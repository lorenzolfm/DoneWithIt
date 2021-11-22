# Fundamental Concepts

* Visit [the offical React Native website](https://reactnative.dev/)
* Components are cross-platform. This means that in the target device, they will be "translated" to their respective native components.

## View

* It's like a `div` from the web.

## SafeAreaView

* Renders content within the safe area boundaries of a device.

## Text

* Used to display text
* `numberOfLines` prop sets the number of lines.
* `onPress` prop is called when text is pressed.

## Image

* Used to display images.
* Can display bundled or network images.
* Set the `source` prop to the path of the image.
* The image needs to be wrapped a **touchable component** to be pressable.

## Touchables

* Wraps children with a touchable.
* There are many: `TouchableOpacity`, `TouchableHighlight`, `TouchableWithoutFeedback`.

## Buttons

* A button is basicaly a fancy touchable with a label.

## Alert

* `Alert` is an API (an object with some methods).
* `alert(msg)`: Displays an alert.
* `Alert.alert(title, message, arrOfButtons)`: Let's you customize the Alert widget.
* `Alert.prompt(title, message, callback)`: Let's you promp the user. (iOS Only).

## StyleSheet

* API for defining styles.
* Styles != CSS.
* Will throw an error if you misspell a property.
* We can pass more than an object to the style prop of an component.

## Platform-Specific Code

* Sometimes we need to know where our app is running and execute some code specific to a platform.
* This is where we use the `Platform` module.
