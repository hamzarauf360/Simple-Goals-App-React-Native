import React from 'react';
import { Text, View,StyleSheet,TouchableOpacity} from 'react-native';


const GoalItem = (props) => {
    return(
        <TouchableOpacity onPress = {() => (props.onDelete(props.itemKey))}>
        <View style={styles.goalContainer}><Text
          style={{
            fontSize: 18,
            color: 'red',
          }}>{props.title}</Text></View>
          </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    goalContainer: {
        justifyContent: "center",
        paddingLeft: 5,
        paddingTop: 20,
        width: 200,
          borderColor: 'yellow',
        backgroundColor: 'yellow',
        borderWidth: 2,
        marginTop: 10,
      },
});


export default GoalItem;
