# Layout

## Dimensions

* **Density-independent Pixels**: Or just DIPs.
* **Physical Pixels = DIPs x Scale Factor**
* Example:
  * iPhone 4
  * Points: 320 x 480
  * Scale Factor 2x
  * Pixels 640 x 960
  * View Width: 150 x 2 = 300

* Using dips to express dimensions gives slightly different results depending on the target device.
* Use relative values!:
  * `width: '50%'`.

* We can use the `Dimensions` API to get the window size of the target device.
    * It doesn't respond to orientation changes.

## Detecting Orientation Changes

* We can use a Hook to detect orientation changes!
* `npm i @react-native-community/hooks`
* `useDimensions`.
* `useDeviceOrientation`.

## Flex

* With `flex`, we can build consistent layouts that work with different screen sizes.
* We tipically use `flex` in a `View`, as a container and them align children inside that container.
* When we set `flex` to 1, the component will fill the available space inside it's parent container.

### Flexbox - Direction

* Use the `flexDirection` property to change the direction of the children.
* Sets the main and cross axis.

### Flexbox - justifyContent, alignItems and alignSelf

* `justifyContent` align items along the **main** axis.
* `alignItems` aligns items in the **cross** (secundary) axis.
* `alignSelf` is applied in an individual item.

### Flexbox - flexWrap and alignContent

* Default behaviour: If out items overflow across the main axis, one or more items get shrunk so all items can fit on the screen.
* `flexWrap`: Wraps the children if content overflow screen. It messes up with alignment on the secondary axis.
    * `alignItems`: Determines the alignment of items within each line.
    * Use `alignContent` to align all items in the secondary axis. Only works if we have wrapping.

### Flexbox - flexBasis, flexGrow and flexShrink

* `flexBasis`: Sets the size of an item within the main axis.
* `flexGrow`: The same as set the flex properties.
* `flexShrink`: If we have overflowing, the item can shrink to fit all stuff on the screen.

### Absolute and Relative Positioning

* Use `top, bottom, left, right` to move the component.
* `relative` positioning works the same as regular css. Doesn't moves other stuff.
* `absolute` positioning is always relative to the parent. Moves other stuff.
