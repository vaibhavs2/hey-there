import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {ScreenContainer} from '../../Components';
import {ChatListItem} from './Components/ChatListItem';
import {RootStackParamList, UserChatList} from '../../types';

type Props = NativeStackScreenProps<RootStackParamList, 'ChatListScreen'>;
export function ChatListScreen(props: Props) {
  return (
    <ScreenContainer navigationTitle="Chats" canGoback>
      <FlatList
        data={UserChatList}
        renderItem={({item}) => (
          <ChatListItem
            onPress={() => {
              props.navigation.navigate('ChatScreen', {
                title: item.distance,
                userId: item.userId,
              });
            }}
            {...item}
          />
        )}
        keyExtractor={(_, index) => `chatlist-${index}`}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({});
