import React, { useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { AuthContext } from '../auth/context';
import { removeToken } from '../auth/storage';

import { Icon } from '../components/Icon';
import { ListItem } from '../components/ListItem';
import { ListItemSeparator } from '../components/ListItemSeparator';
import { Screen } from '../components/Screen';
import defaultStyles from '../config/styles';
import { Navigation } from '../types';

interface Icon { name: string; backgroundColor: string }
interface MenuItem {
  title: string;
  icon: Icon;
  targetScreen: string;
}

const menuItems: MenuItem[] = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: defaultStyles.colors.primary,
    },
    targetScreen: 'Listings'
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: defaultStyles.colors.secondary,
    },
    targetScreen: 'Messages',
  },
]

export const AccountScreen = ({ navigation: { navigate } }: Navigation) => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogOut = () => {
    setUser(null);
    removeToken();
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user?.name || 'unknown'}
          subtitle={user?.email}
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={item => item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={
            ({ item }) =>
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                }
                onPress={() => navigate(item.targetScreen)}
              />
          }
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={
          <Icon name="logout" backgroundColor="#ffe66d" />
        }
        onPress={handleLogOut}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: defaultStyles.colors.light,
  },
});
