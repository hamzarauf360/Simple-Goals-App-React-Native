import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './Components/GoalInput'
import GotalItem from './Components/GoalItem'


export default function App() {


  const [courseGoals, setcourseGoals] = useState([])

  const [isAddMode, setisAddMode] = useState(false);

  const addModeHandler = () => {
    setisAddMode(!isAddMode);
  }

  const deleteAGoal = (key) => {
    setcourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key != key);
    })
  }


  const addGoalHandler = (goal) => {
    setcourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goal }])
    setisAddMode(false);
  }

  return (
    <View style={styles.container}>
      <View style={{ paddingTop:300 }}>
        <Button title="Add a Goal" onPress={addModeHandler} />
      </View>
      <GoalInput pressed={addGoalHandler} visibilityStatus={isAddMode} ModalManipulator={addModeHandler} />

      <FlatList data={courseGoals} renderItem={(itemData) => (
        <GotalItem title={itemData.item.value} itemKey={itemData.item.key} onDelete={deleteAGoal} />
      )}>
      </FlatList>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 80,
  },




})



/*
  Flex box example

    <View style={{ padding: 50 ,
      flexDirection:"row"
    ,width:'80%',
    height:300,justifyContent:'space-around'}}>
    <View
      style={{
        backgroundColor: 'red',
       flex:1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text>1</Text>
    </View>
    <View
      style={{
        backgroundColor: 'blue',
        flex:1,

        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text>2</Text>
    </View>
    <View
      style={{
        backgroundColor: 'green',
        flex:1,

        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text>3</Text>
    </View>
  </View>

*/