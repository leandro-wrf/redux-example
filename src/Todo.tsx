import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { bindActionCreators, Dispatch, Store } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from './actions/todo';

export interface ITodo {
  id: number;
  title: string;
}

function Todo({ addTodo, todos }) {
  const [text, setText] = useState('');

  function removeTodo(id: number) {
    const newArray = todos.filter((todo) => {
      if (todo.id === id) { return false}

       return true
    })
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {todos.map(todo => (
        <View key={todo.id} style={{flexDirection: 'row'}}>
          <Text
            style={{
              marginRight: 16,
            }}
          >
            {todo.text}
          </Text>
          <Button
            title="Remove" 
            onPress={() => removeTodo(todo.id)}
          />
        </View>
      ))}

      <TextInput 
        style={{
          borderWidth: 1, 
          width: 200, 
          height: 40,
          paddingLeft: 16
        }} 
        placeholder="add" 
        onChangeText={(text) => setText(text)}
      />
      <Button title="ADD todo" onPress={() => { addTodo(text); setText('');}} />
    </View>
  )
}

const mapStateToProps = (state: any) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(todoActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
