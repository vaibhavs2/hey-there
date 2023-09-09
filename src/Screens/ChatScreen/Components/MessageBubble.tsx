import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MessageType} from '../../../types';

type Props = {
  message: MessageType;
};
export function MessageBubble(props: Props) {
  return (
    <View
      style={[
        styles.bubble,
        props.message.type == 'me' ? styles.bubbleIn : styles.bubbleOut,
      ]}>
      <Text>{props.message.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubbleOut: {
    borderTopEndRadius: 12,
    borderBottomEndRadius: 12,
    borderTopStartRadius: 12,
    alignSelf: 'flex-start',
  },
  bubbleIn: {
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
    borderBottomStartRadius: 12,
    alignSelf: 'flex-end',
  },
  bubble: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 8,
    borderWidth: 1,
  },
});
