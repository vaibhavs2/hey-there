import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {ScreenContainer} from '../../Components/ScreenContainer';
import {RootStackParamList} from '../../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
export function HomeScreen(props: Props) {
  return (
    <ScreenContainer keyboardAvoidingView navigationTitle="Hey there">
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate('ChatListScreen');
          }}>
          <Text style={styles.buttonTitle}>Your Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate('MapScreen');
          }}>
          <Text style={styles.buttonTitle}>See Map</Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    borderRadius: 12,
    backgroundColor: 'lightblue',
    paddingVertical: 15,
    marginBottom: 18,
  },
  buttonTitle: {fontSize: 18, fontWeight: 'bold', textAlign: 'center'},
});
