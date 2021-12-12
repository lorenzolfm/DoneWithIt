# Lists

* Almost every app shows some data to the user as lists.
* Let's take a look on how FlatLists help us with that.

## FlatList

* The FlatList component is very easy to use.
* Make sure to set the `data`, `keyExtractor` and `renderItem` props.
* You can also use a `ItemSeparatorComponent`.
* Pass a custom component to `renderItem` and handle the press event inside the component!
* You can handle selections by handling the `onPress` envent on the item you're rendering with `renderItem`.
* You can also handle swipes.
* If an item is deleted, your `FlatList` will rerender.
* You can also use a callback to handle the "pull" action.
