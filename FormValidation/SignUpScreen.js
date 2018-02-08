import React,{Component} from 'react';
import {View, Text, Image, StyleSheet, TextInput, Button, ScrollView} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class SignUpScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Fname: '',
            Lname: '',
            Email: '',
            Number: '',
            Password: '',
            isValidated: false,
            isSuccessful: false,
            isValidEmail: true,
            isValidNumber: true,
        }

    }
    CheckFirstName(fname){
        //No Checking for First Name
    };
    CheckLastName(fname){
        //No Checking for Last Name
    };
    CheckEmail(email){
        console.log(email);
        this.setState({
            Email: email,
        })
        /*let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(email)=== false)
        {
            console.log("Email isn't Correct");
            this.setState({Email: email,isSuccessful: false})
        }
        else
        {
            this.setState({Email: email,isSuccessful: true})
        }*/
    };
    CheckPhoneNumber(ph){
        this.setState({
            Number: ph,
        })
        /*let phreg = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
        if(phreg.test(ph)=== false)
        {
            console.log("Phone Number isn't correct");
            this.setState({Number: ph, isSuccessful: false})
        }
        else
        {
            this.setState({Number: ph,isSuccessful: true})
        }*/

    };
    CheckPassword(pass){

    };
    formValidate(){
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        let phreg = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
        if(reg.test(this.state.Email)=== false)
        {
            if(phreg.test(this.state.Number)=== false)
            {
                console.log("Phone Number isn't correct");
                this.setState({Number: this.state.Number, isSuccessful: false, isValidEmail: false, isValidNumber: false})
            }
            else
            {
                this.setState({Number: this.state.Number,isSuccessful: false, isValidEmail: false, isValidNumber: true })
            }
        }
        else
        {
            if(phreg.test(this.state.Number)=== false)
            {
                console.log("Phone Number isn't correct");
                this.setState({Number: this.state.Number, isSuccessful: false, isValidEmail: true, isValidNumber: false})
            }
            else
            {
                this.setState({Number: this.state.Number,isSuccessful: true, isValidEmail: true, isValidNumber: true})
            }
        }
    };
    render(){
        return(
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                {!this.state.isSuccessful ?
            <KeyboardAwareScrollView
                style={{ backgroundColor: '#4c69a5' }}
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >
            <View>
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        borderWidth: 1,
                    }}
                >
                    {/*<Image source={require('./hills.jpg')} style={styles.bgimage}/>*/}
                </View>
                {/*<Text style={{fontWeight: 'bold', color:'#ffffff', fontSize: 40, left: 25, top: 20}}>Nice To Meet You!</Text>
                <View style={styles.whiteTab}/>*/}
                <View style={styles.textinputcontainer}>
                <TextInput
                    underlineColorAndroid='transparent'
                    placeholder='First Name'
                    placeholderTextColor='#ffffff'
                    autoCapitalize='none'
                    onChangeText={(text) => this.CheckFirstName(text)}
                    style={styles.textInputFname}
                />
                <TextInput
                    underlineColorAndroid='transparent'
                    placeholder='Last Name'
                    placeholderTextColor='#ffffff'
                    autoCapitalize='none'
                    onChangeText={(text) => this.CheckLastName(text)}
                    style={styles.textInput}
                />
                <TextInput
                    underlineColorAndroid='transparent'
                    placeholder='Email Address'
                    placeholderTextColor='#ffffff'
                    autoCapitalize='none'
                    onChangeText={(text) => this.CheckEmail(text)}
                    value={this.state.Email}
                    style={styles.textInput}
                />
                    {!this.state.isValidEmail ?
                        (<View>
                        <Text style={{color:'red', fontSize: 10, left: 260, bottom: 30}}>Please check your email</Text></View>) : null
                    }
                <TextInput
                    underlineColorAndroid='transparent'
                    placeholder='Phone Number'
                    placeholderTextColor='#ffffff'
                    autoCapitalize='none'
                    onChangeText={(text) => this.CheckPhoneNumber(text)}
                    value={this.state.Number}
                    keyboardType='numeric'
                    style={styles.textInput}
                />
                    {!this.state.isValidNumber ?
                        (<View>
                            <Text style={{color:'red', fontSize: 10,left: 245, bottom: 40}}>Please check your Number</Text></View>) : null
                    }
                <TextInput
                    underlineColorAndroid='transparent'
                    placeholder='Password'
                    placeholderTextColor='#ffffff'
                    autoCapitalize='none'
                    onChangeText={(text) => this.CheckPassword(text)}
                    style={styles.textInput}
                />
                </View>
                <View style={styles.buttoncontainer}>
                <Button title='submit' style={styles.button} onPress={()=>this.formValidate()}/>
                </View>
            </View>
            </KeyboardAwareScrollView> :
                    <View style={{justifyContent: 'center', alignItems:'center', flex: 1}}><Text>The Details are Successfully submitted</Text> </View>}
    </ScrollView>
        )
    }
};
const styles = StyleSheet.create({
    bgimage:{
        width: 500,
        flex: 1,
        height: 700,
    },
    whiteTab:{
        width: 50,
        height: 5,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#ffffff',
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        borderBottomStartRadius: 3,
        borderBottomEndRadius: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        borderTopStartRadius: 3,
        borderTopEndRadius: 3,
        left: 28,
        top: 30,
    },
    textinputcontainer:{
        margin: 20,
    },
    textInput:{
        borderBottomWidth: 2,
        borderColor: '#ffffff',
        marginBottom: 40,
    },
    buttoncontainer:{
        marginTop: 35,
        width: 200,
        left: 190,
        bottom: 20,
        borderWidth: 3,
    },
    textInputEmail:{
        borderBottomWidth: 2,
        borderColor: '#ffffff',
        marginBottom: 30,
        marginTop: 20,
    },
    textInputFname:{
        borderBottomWidth: 2,
        borderColor: '#ffffff',
        marginBottom: 30,
        marginTop: 30,
    },
})