
jest.mock('@expo/vector-icons', () => {
  const { View } = require('react-native');
  return {
    MaterialCommunityIcons: View,
  }
});

jest.mock('react-native-gesture-handler/Swipeable', () => {
  const { View } = require('react-native');
  return View;
});
