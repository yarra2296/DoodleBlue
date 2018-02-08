import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image, Button, FlatList } from 'react-native';
import FlatCard from './FlatCard';

export default class ViewTable extends React.Component{
    static navigationOptions = {
        title:'VIEW YOUR TABLE INFO       '
    };
    constructor(props){
      super(props);
      this.state={
          list: [],
      }
    };
    componentDidMount(){
        this.rerendered();
    };
    rerendered(){
        this.setState({
            list: this.props.navigation.state.params.value,
        })
    };

  render(){
      console.log(this.props.value);
      return(
          <ScrollView contentContainerStyle={{flexGrow:1}}>
              <View style={{flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between',margin: 15, backgroundColor: 'red',padding: 10}}>
                  <Text >Name</Text>
                  <Text >Date</Text>
                  <Text >Phone NO</Text>
                  <Text >Family Count</Text>
              </View>
              <FlatList
              data={this.state.list}
              renderItem={({item}) =>
                  <FlatCard name={item.name} phoneno={item.phno} date={item.Date} family={item.count}/>
              }
              keyExtractor={(x, i) => i}
              />
          </ScrollView>
         /* <View>
              <Image source={require('./restaurant.jpeg')} style={styles.bgimage}/>
              <View ><Text style={{bottom: 680,fontWeight: 'bold',fontSize: 30, left: 140}}>Table Info</Text></View>
              <View style={{bottom: 650, left: 50,backgroundColor: 'blue',marginRight: 100, height: 400, justifyContent:'space-between', padding: 20}}>
              <Text style={{fontWeight: 'bold', color: 'red'}}>Name:                 {params.value.name}</Text>
              <Text style={{fontWeight: 'bold', color: 'red'}}>Phone no:          {params.value.phno}</Text>
              <Text style={{fontWeight: 'bold', color: 'red'}}>Date & Time:     {params.value.Date}</Text>
              <Text style={{fontWeight: 'bold', color: 'red'}}>Family   :        {params.value.count}     </Text>
              </View>
          </View>*/
      );
  }
};
const styles = StyleSheet.create({
    bgimage: {
        resizeMode: 'cover',
        width: 500,
        height: 700,
    },
})