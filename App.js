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
  Alert,
} from 'react-native';

import  ToDoList  from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    for (let task of tasks){
      if (task.toLowerCase() == newTask.toLowerCase()){
        return Alert.alert('Task was already added');
      } 
    }

    setTasks([...tasks, newTask])
    
  };

  return (
    <SafeAreaView style={{padding: 20, marginVertical: 20,}}>
      <ToDoList tasks={tasks}/>
      <ToDoForm addTask={addTask}/>     
    </SafeAreaView>
  );
}

export default App;