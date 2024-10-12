/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';

import  ToDoList  from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
    'Finish Mobile Dev Lab'
  ]);

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm />     
    </SafeAreaView>
  );
}

export default App;