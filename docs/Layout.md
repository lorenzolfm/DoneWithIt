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
