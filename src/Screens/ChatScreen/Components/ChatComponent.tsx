import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {MessageBubble} from './MessageBubble';
import {MessageType} from '../../../types';

type Props = {
  userMessages: {currentLocation: string; conversation: Array<MessageType>};
  onMessageSend: (message: string) => void;
  updateUserWithNewMessage?: MessageType;
};
export function ChatComponent(props: Props) {
  const flatListRef = useRef<FlatList>(null);
  const [getMessageInput, setMessageInput] = useState('');
  const [getConversation, setConversation] = useState<Array<MessageType>>(
    props.userMessages.conversation || [],
  );

  useEffect(() => {
    if (props.updateUserWithNewMessage) {
      setConversation([...getConversation, props.updateUserWithNewMessage]);
      scrollToEnd();
    }
  }, [props.updateUserWithNewMessage]);

  const onSendPress = () => {
    props.onMessageSend(getMessageInput);
    setConversation([
      ...getConversation,
      {
        type: 'me',
        userId: '1',
        message: getMessageInput,
        timeStamp: new Date().toISOString(),
      },
    ]);
    scrollToEnd();
    setMessageInput('');
  };
  const scrollToEnd = () => {
    flatListRef.current?.scrollToEnd({animated: true});
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={getConversation}
        renderItem={({item}) => <MessageBubble message={item} />}
        keyExtractor={(_, index) => `chat-bubble-${index}`}
        showsVerticalScrollIndicator={false}
        extraData={getConversation.length}
        onContentSizeChange={scrollToEnd}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          multiline
          value={getMessageInput}
          placeholder="write a new message here..."
          onChangeText={setMessageInput}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={onSendPress}>
          <Icon name="send" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  input: {
    flex: 1,
    borderRadius: 8,
    borderWidth: 1,
    minHeight: 50,
    maxHeight: 80,
    paddingHorizontal: 8,
  },
  sendBtn: {padding: 8, paddingEnd: 0},
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
  },
});
