import React from 'react';
import {TextInput, StyleSheet, Text, View, Image, Button, TouchableHighlight, DatePickerAndroid, TimePickerAndroid } from 'react-native';
import DatePicker from 'react-native-datepicker';
import TimePicker from 'react-native-datepicker';

export default class BookTable extends React.Component{
    static navigationOptions = {
        title:' KartBites TABLE RESERVATION    '
    };
   constructor(props) {
        super(props)
        this.savename=this.savename.bind(this);
        this.savePhoneNumber=this.savePhoneNumber.bind(this);
        this.saveMembers=this.saveMembers.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state = {
            Name: 'dkjhajkd',
            Phone: '928423942',
            isDate: '2018-1-15',
            Time: '04:00',
            Count: '9',
            isSuccessfulReg: false,
        };
    }
    _showDatePicker = async() => {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({date: new Date()});
                    const newDate = new Date(year, month, day);
                    this.setState({
                        isDate: newDate.year-newDate.month-newDate.day,
                    })
        }
        catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }
    }

    savename(text){
       const name1 = text;
       this.setState({
           Name: name1
       })
        console.log(this.state.Name)
    };
    savePhoneNumber(number){
        const phone = number;
        this.setState({
            Phone: phone
        })
    };
    saveMembers(member){
        const count = member
        this.setState({
            Count: count,
        })
    };
    onSubmit(){
        const value =  {name: this.state.Name, phno: this.state.Phone, Date: this.state.datetime, count: this.state.Count}
        console.log("props in child", this.props)
        this.props.navigation.state.params.onSubmit(value);
        this.setState({
            isSuccessfulReg: true,
        })
    };
  render(){
      const { navigate } = this.props.navigation;
      const { params } = this.props.navigation.state;
      return(
              <View>
                  <Image source={require('./restaurant.jpeg')} style={styles.bgimage}/>
                  <View style={{bottom: 700, margin: 10}}>
                      <Text style={{fontSize: 30, fontWeight: 'bold', color: '#ff2b46', alignSelf: 'center'}}>Book
                          Table </Text>
                      <View style={{
                          flexWrap: 'wrap',
                          flexDirection: 'row',
                          backgroundColor: '#c0c0c0',
                          padding: 10,
                          marginTop: 20,
                          marginBottom: 5
                      }}>
                          <Text style={{top: 15, color: '#000000', fontSize: 15}}>Name: </Text>
                          <TextInput
                              underlineColorAndroid='transparent'
                              placeholder='Enter Name'
                              placeholderTextColor='#afb6b6'
                              autoCapitalize='none'
                              onChangeText={(text) => this.savename(text)}
                              style={styles.textInput}
                          />
                      </View>
                      <View style={{
                          flexWrap: 'wrap',
                          flexDirection: 'row',
                          backgroundColor: '#c0c0c0',
                          padding: 10,
                          marginBottom: 5
                      }}>
                          <View><Text style={{top: 15, color: '#000000', fontSize: 15}}>Ph.No: </Text></View>
                          <View>
                              <TextInput
                                  underlineColorAndroid='transparent'
                                  placeholder='Enter Your Phone Number'
                                  placeholderTextColor='#afb6b6'
                                  autoCapitalize='none'
                                  onChangeText={(text) => this.savePhoneNumber(text)}
                                  keyboardType='numeric'
                                  style={styles.textInput}
                              />
                          </View>
                      </View>
                      <View style={{
                          flexWrap: 'wrap',
                          flexDirection: 'row',
                          backgroundColor: '#c0c0c0',
                          padding: 10,
                          marginBottom: 5,
                          height: 70
                      }}>
                          <Text style={{top: 15, color: '#000000', fontSize: 15}}>Date :</Text>
                          <View style={styles.date}>
                              <TouchableHighlight unuderlayColor='transparent' onPress={this._showDatePicker}>
                                  <DatePicker
                                      style={{width: 305}}
                                      date={this.state.datetime}
                                      mode="datetime"
                                      format="YYYY-MM-DD HH:mm"
                                      confirmBtnText="Confirm"
                                      cancelBtnText="Cancel"
                                      customStyles={{
                                          dateIcon: {
                                              position: 'absolute',
                                              left: 0,
                                              top: 4,
                                              marginLeft: 0
                                          },
                                          dateInput: {
                                              marginLeft: 36
                                          }
                                      }}
                                      minuteInterval={10}
                                      onDateChange={(datetime) => {
                                          this.setState({datetime: datetime});
                                      }}
                                  />
                              </TouchableHighlight>
                          </View>
                      </View>

                      <View style={{
                          flexWrap: 'wrap',
                          flexDirection: 'row',
                          backgroundColor: '#c0c0c0',
                          padding: 10,
                          marginBottom: 5
                      }}>
                          <View><Text style={{top: 15, color: '#000000', fontSize: 15}}>Family: </Text></View>
                          <View>
                              <TextInput
                                  underlineColorAndroid='transparent'
                                  placeholder='No.of Members'
                                  placeholderTextColor='#afb6b6'
                                  autoCapitalize='none'
                                  onChangeText={(text) => this.saveMembers(text)}
                                  style={styles.textInput}
                                  keyboardType='numeric'
                              />
                          </View>
                      </View>
                      <View style={{justifyContent: 'center', width: 200, borderWidth: 1, left: 100}}>
                          <Button title="Submit" onPress={this.onSubmit}/>
                      </View>
                  </View>
              </View>
      );
  }
};

const styles = StyleSheet.create({
   bgimage:{
       resizeMode: 'cover',
       width: 500,
       height: 700,
   },
    textInput:{
        width: 300,
        borderWidth: 3,
        alignItems: 'center',
    },
    dateInput:{
        left: 10,
        width: 310,
        borderWidth: 3,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    date:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput1:{
        width: 300,
        borderWidth: 3,
        alignItems: 'center',
        left: 5
    },
});