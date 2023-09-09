import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ChatList} from '../../../types';

type Props = {
  onPress: (userId: string) => void;
} & ChatList;
export function ChatListItem(props: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.onPress(props.userId);
      }}>
      <Image
        source={{
          uri: props.image,
        }}
        style={styles.avtar}
      />
      <View style={styles.messageContainer}>
        <Text style={styles.messageTitleText}>{props.distance}</Text>
        <Text numberOfLines={2}>{props.lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  avtar: {
    width: 55,
    height: 55,
    borderRadius: 28,
  },
  messageContainer: {marginHorizontal: 12, flex: 1},
  messageTitleText: {fontWeight: 'bold'},
});
