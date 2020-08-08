import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';


const GoalInput = (props) => {

    const [goal, setGoal] = useState('')

    const enteredGoalHandler = (enteredText) => {
        setGoal(enteredText)
    }

    const clearAndAddGoal = () => {
        props.pressed(goal);
        setGoal('');

    }

    const hideModal = () => {
        props.ModalManipulator();
    }


    return (
        <Modal visible={props.visibilityStatus} animationType="slide" style={styles.modalContainer}>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goal" style={styles.input} value={goal} onChangeText={enteredGoalHandler} />
                <View style={styles.btnContainer}>
                    <View style ={{width:'40%'}}>
                        <Button title="Add" onPress={clearAndAddGoal}/>
                    </View >
                    <View style ={{width:'40%'}}>
                        <Button title="Cancel" onPress = {hideModal}/>
                    </View>
                </View>

            </View>
        </Modal>
    );
}


const styles = StyleSheet.create({
    modalContainer: {
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    input: {

        borderColor: 'black', borderWidth: 1, padding: 10
        , width: '75%',
        marginBottom: 10,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent:"space-around",
        width:'60%',

    }
})


export default GoalInput;