import React, { Component } from 'react';
import {
    TextInput,
    StyleSheet,
    TouchableHighlight,
    View,
    FlatList,
    Image,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.searchList= this.searchList.bind(this);
        this.state={
            data:[
                {
                    image: require('./person1.jpg'),
                    key: 'Maria Tyler',
                },
                {
                    image: require('./person1.jpg'),
                    key: 'Maria Tyler 2',
                },
                {
                    image: require('./person2.jpg'),
                    key: 'Duane Nguyen',
                },
                {
                    image: require('./person3.jpg'),
                    key: 'Elijah Alvarez',
                },
                {
                    image: require('./person4.jpg'),
                    key: 'Louisa Reyes',
                },
                {
                    image: require('./person5.jpg'),
                    key: 'Jaswanth Kishore',
                },
                {
                    image: require('./person6.jpg'),
                    key: 'Venkat Kishore',
                }
            ],
            isShowArrow: false,
        };
    }
    searchList(value){
        console.log(value);
        const data = this.state.data;
        const olddata = [
            {
                image: require('./person1.jpg'),
                key: 'Maria Tyler',
            },
            {
                image: require('./person1.jpg'),
                key: 'Maria Tyler 2',
            },
            {
                image: require('./person2.jpg'),
                key: 'Duane Nguyen',
            },
            {
                image: require('./person3.jpg'),
                key: 'Elijah Alvarez',
            },
            {
                image: require('./person4.jpg'),
                key: 'Louisa Reyes',
            },
            {
                image: require('./person5.jpg'),
                key: 'Jaswanth Kishore',
            },
            {
                image: require('./person6.jpg'),
                key: 'Venkat Kishore',
            }
        ];
        const newdata = data.filter(function (el) {
            // return el.key.toLowerCase().trim() === value.toLowerCase().trim();
            return el.key.trim().toLowerCase().includes(value.trim().toLowerCase());
        });
        console.log(newdata);
        if (value.length === 0) {
            console.log('text');
            this.setState({
                data: olddata,
            });
        } else if (newdata.length > 0) {
            this.setState({
                data: newdata,
                isShowArrow: true,
            });
        }
    };
   clearValue(){

   };
   exit(){

   };
   openProfile(){

   };
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.searcharea}>
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    {this.state.isShowArrow ?<TouchableHighlight onPress={()=>this.clearValue()} underlayColor='#ffffff' style={styles.leftArrow}>
          <Image source={require('./leftarrow.png')} style={styles.arrowimage}/>
                    </TouchableHighlight>: null}
          <TextInput
              underlineColorAndroid = 'transparent'
              placeholder = 'Find Friends'
              placeholderTextColor = '#afb6b6'
              autoCapitalize = 'none'
              onChangeText  = {(text)=>this.searchList(text)}
              style={styles.textInput}
          />
                </View>
                <View>
                    <TouchableHighlight onPress={()=>this.exit()} underlayColor='#ffffff' style={styles.exit}>
                <Icon name='remove' size={20} color='#8F9696' style={styles.iconExit}/>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={{flex:1}}>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => (<TouchableHighlight onPress={()=> this.openProfile()} underlayColor='#ffffff'><View style={styles.line}><Image source={item.image} style={styles.image}/><View style={styles.border}><Text>{item.key}</Text></View></View></TouchableHighlight>)}
                />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput:{
        width: 300,
        left: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    arrowimage:{
        width : 20,
        height : 20,
        top: 8,
        left: 5,
    },
    exit:{
        right: 10,
        borderWidth: 1,
        borderRadius: 100,
        width: 25,
        height: 25,
        borderColor: '#9ba2a2',
    },
    iconExit:{
        left: 4,
    },
    searcharea: {
        borderWidth: 1,
        padding: 5,
        marginTop: 7,
        marginBottom: 0,
        marginLeft: 7,
        marginRight: 5,
        borderColor: '#afb6b6',
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
        borderBottomLeftRadius:40,
        borderBottomRightRadius: 40,
        borderTopEndRadius: 40,
        borderTopStartRadius: 40,
        borderTopLeftRadius:40,
        borderTopRightRadius: 40,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
    },
    image:{
        padding: 10,
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    line: {
        marginLeft: 8,
        marginTop: 0,
        marginBottom: 0,
        marginRight: 50,
        padding: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    border:{
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
        borderBottomWidth: 1,
        alignItems: 'center',
        left: 10,
        borderColor: '#ebebeb',
    },
});
