import React,{Component} from 'react';
import {View, Image, Text,StyleSheet} from 'react-native';

export default class NewsCard extends React.Component{
  render(){
      return(
              <View style={styles.flatlistview}>
            <Image source={{uri:this.props.urlToImage}} style={styles.image}/>
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.titlename}</Text>
                    <Text style={styles.authorname}>by {this.props.author}</Text>
                    <View style={styles.popular}>
                    <Text style={styles.light}>@305 views        |         </Text>
                    <Text style={styles.light}>@15 comments</Text>
                    </View>
            </View>
        </View>
      );
  }
};

const styles = StyleSheet.create({
    flatlistview:{
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#d3d3d3',
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 10,
        marginRight: 10,
    },
    image:{
        width: 120,
        height: 160,
        bottom: 8,
        marginRight: 20,
        marginTop: 10,
    },
    container:{
        flex: 1,
        flexDirection:'column',
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000000',
    },
    items:{
        flexWrap: 'wrap',
        flex: 1,
        flexDirection: 'column',
        borderWidth: 1,
        justifyContent: 'flex-end',
    },
    authorname:{
        color: '#f376ff',
        fontSize: 10,
    },
    popular:{
        flexWrap: 'wrap',
        flex: 1,
        flexDirection:'row',
    },
    light:{
      fontSize: 10,
    },
});