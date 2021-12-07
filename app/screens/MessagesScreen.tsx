import React, { useState } from 'react';
import { FlatList } from "react-native"

import { ListItem } from '../components/ListItem';
import { ListItemDeleteAction } from '../components/ListItemDeleteAction';
import { ListItemSeparator } from '../components/ListItemSeparator';
import { Screen } from '../components/Screen';

interface Message {
  id: number,
  title: string,
  description: string,
  image: any,
};

const msgs: Array<Message> = [
  {
    id: 0,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 1,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg'),
  },
];

export const MessagesScreen = () => {
  const [messages, setMessages] = useState(msgs);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message: Message): void => {
    setMessages(messages.filter(m => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={item => item.id.toString()}
        renderItem={
          ({ item }) =>
            <ListItem
              title={item.title}
              subtitle={item.description}
              image={item.image}
              onPress={() => console.log('Message selected', item)}
              renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
            />
        }
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => setMessages([...msgs])}
      />
    </Screen>
  );
};
