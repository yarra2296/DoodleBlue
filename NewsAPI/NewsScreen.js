import React from 'react';
import {Image, View, Text, StyleSheet, ScrollView, TouchableHighlight} from 'react-native';
import Hyperlink from 'react-native-hyperlink';


export default class NewsScreen extends React.Component{
    static navigationOptions = {
        title:'News Reader           ',
    };
  render(){
      const { params } = this.props.navigation.state;
      const { navigate } = this.props.navigation;
      return(
          <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View>
        <View style={styles.imagecontainer}>
            <Image source={{uri: params.newsimmages}} style={styles.image}/>
        </View>
            <View style={{padding: 10}}>
            <Text style={{fontSize: 15}}> by {params.newsauthor}</Text>
            <View style={{marginTop: 20}}>
            <Text style={{fontWeight:'bold', fontSize: 30, color:'#000000'}}>{params.newstitle}</Text>
            </View>
            <View style={{marginTop: 30, marginBottom: 30}}>
            <Text style={{fontSize: 20,}}>{params.newsdescription} </Text>
            </View>
                <View style={{marginBottom: 20}}>
            <View style={{marginBottom: 20}}><TouchableHighlight onPress={()=> navigate('WebView', {url: params.newsurl})}>
                <Text style={{fontSize: 20, color: 'blue'}}> Link: {params.newsurl}</Text>
            </TouchableHighlight>
            </View>
                <Text>                                                                                           {params.newstime}</Text>
        </View>
            </View>
        </View>
          </ScrollView>

      );
  }
};

const styles = StyleSheet.create({
    imagecontainer:{
        marginBottom: 20,
    },
    image:{
        width:500,
        height:300 ,
        borderWidth: 1,
    },

});