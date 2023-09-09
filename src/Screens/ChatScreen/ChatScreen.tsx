import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../types';
import {ScreenContainer} from '../../Components';
import {ChatComponent} from './Components/ChatComponent';
import {UserConversation} from '../../types/ChatTypes';

type Props = NativeStackScreenProps<RootStackParamList, 'ChatScreen'>;
export function ChatScreen(props: Props) {
  return (
    <ScreenContainer
      canGoback
      navigationTitle={props.route.params.title}
      keyboardAvoidingView>
      <ChatComponent
        userMessages={{
          currentLocation: 'lat-long',
          conversation: UserConversation,
        }}
        onMessageSend={message => {
          console.log('Message', message);
        }}
      />
    </ScreenContainer>
  );
}
