/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, Button, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addItem} from '../../global_state/actions/listActions';

import styles from './styles';

const AddNewRow = ({navigation}) => {
  const [text, setText] = useState('');
  const nextIndex = useSelector(state => state.length);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={value => setText(value)}
        placeholder="Add text here"
      />
      <Button
        title="Submit"
        onPress={() => {
          dispatch(
            addItem({
              index: nextIndex,
              value: text,
              key: nextIndex,
            }),
          );
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};

export default AddNewRow;
