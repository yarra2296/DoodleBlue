import React,{Component} from 'react';
import {WebView} from 'react-native';

export default class Webview extends React.Component{
    static navigationOptions = {
        title:'News Reader           ',
    };
    render(){
        const { params } = this.props.navigation.state;
        return(
          <WebView source={{uri: params.url}}/>
        );
    }
};