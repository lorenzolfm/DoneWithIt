import { Listing } from '../types';
import { apiClient } from './client';

const endpoint = '/listings';
export const getListings = () => apiClient.get(endpoint)

export const addListing = (listing: Listing, onUploadProgress: Function) => {
  const data = new FormData();
  data.append('title', listing.title)
  data.append('price', listing.price.toString())
  data.append('categoryId', listing.category.value);
  data.append('description', listing.description);

  listing.images.forEach((image, index) =>
    data.append('images', JSON.stringify({
      name: 'image' + index,
      type: 'image/jpeg',
      uri: image
    })));

  if (listing.location)
    data.append('location', JSON.stringify(listing.location));

  return apiClient.post(endpoint, data, {
    onUploadProgress: progress => onUploadProgress(progress.loaded / progress.total)
  });
}
