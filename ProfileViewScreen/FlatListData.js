import React from 'react';
import {FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';

export default class FlatListData extends React.Component{
    render(){
        return(
          <View>
              <FlatList
                  data = {[
                  {
                      image : require('./place1.jpg'),
                      key : 'Summer In Asia with Sacha',
                      countriescount: '4',
                      dayscount: '64',
                  },
                  {
                      image : require('./place2.jpg'),
                      key : 'Costa Rica Trip!!',
                      countriescount: '4',
                      dayscount: '64',
                  },
                  {
                      image : require('./place3.jpg'),
                      key : 'India Trip!!',
                      countriescount: '4',
                      dayscount: '64',
                  },
                  {
                      image : require('./place4.jpg'),
                      key : 'US Trip',
                      countriescount: '4',
                      dayscount: '64',
                  },
              ]}
                  renderItem={({item}) => (<View style={styles.listcontainer}><Image source={item.image} style={styles.image}/><Text>{item.key}</Text><Text>{item.countriescount}countries</Text><Text>{item.dayscouont}days</Text></View>)}
                  />
          </View>
        );
    }
};
const styles = StyleSheet.create({
   image:{
        width: 50,
        height: 100,
   },
    listcontainer:{
        marginLeft: 5,
        marginRight: 5,
    },
});