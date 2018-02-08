import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';

export default class ProfileData extends React.Component{
    render (){
        return(
            <TouchableHighlight onPress={()=> this.opendata().bind(this)} underlayColor="#68f2ff">
            <View stytle={styles.profilecontainer}>
            <View style={styles.circle}><Text>{this.props.value}</Text></View>
                <View><Text style={styles.textcolor}>{this.props.name}</Text></View>
            </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    profilecontainer:{
        flexWrap:'wrap',
        flexDirection:'row',
        alignContent:'space-between',
        justifyContent: 'center',
    },
    circle:{
        borderRadius: 100,
        padding: 5,
        borderWidth: 1,
        height: 45,
        width: 45,
        backgroundColor:'#ffffff',
        justifyContent:'center',
        alignItems:'center',
        marginRight: 50,
    },
    textcolor:{
        color:'#616161'
    },
});