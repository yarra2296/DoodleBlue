import React,{Component} from 'react';
import {Text, View} from  'react-native';

export default class FlatCard extends React.Component{
    render(){
        return(
            <View style={{flexDirection:'row', flexWrap:'wrap',justifyContent:'space-between',padding: 10, margin: 15,backgroundColor: 'blue'}}>
                <Text>{this.props.name}</Text>
                <Text>{this.props.date}</Text>
                <Text>{this.props.phoneno}</Text>
                <Text>{this.props.family}</Text>
            </View>
        )
    }
}