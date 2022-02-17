import { apiClient } from './client';

const send = (message: string, listingId: number) =>
  apiClient.post('/messages', {
    message,
    listingId,
  });
