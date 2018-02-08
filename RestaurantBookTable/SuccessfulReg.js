import React,{Component} from 'react';
import {View, Text} from 'react-native';

export default class SuccessfulReg extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight: 'bold'}}>SUCCESSFULLY REGISTERED</Text>
            </View>
        )
    }
};