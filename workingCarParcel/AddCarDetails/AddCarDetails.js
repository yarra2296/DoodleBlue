import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { styles as s } from "react-native-style-tachyons";

import { connect } from 'react-redux';
import saveCarDetails from '../actions/action';
import pick from './picker';

class AddCarDetails extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `                   ${navigation.state.params.title}        `,
    });
    constructor(){
        super();
        this.state={
            CarRegisterationNumber:'',
            CarColor:'',
            CarBrand:'',
            CarModel:'',
            CarVINNumber:'',
            isSuccessfullyRegistered: false,
            avatarSource1: null,
            data1: null,
            avatarSource2: null,
            data2: null,
            avatarSource3: null,
            data3: null,
            isImage1: false,
            isImage2: false,
            isImage3: false,
        }
    }
  /*  selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
    }*/

    OnSave(){
        const value =  {CarRegisterationNumber: this.state.CarRegisterationNumber, CarColor: this.state.CarColor, CarBrand: this.state.CarBrand, CarModel: this.state.CarModel, CarVINNumber: this.state.CarVINNumber, avatarSource1: this.state.avatarSource1, avatarSource2: this.state.avatarSource2, avatarSource3: this.state.avatarSource3};
        const title = this.props.navigation.state.params.title;
        this.props.saveCarDetails(title, value);
        console.log('${navigation.state.params.title}', this.props.navigation.state.params.title )
        this.setState({
            isSuccessfullyRegistered: true,
        })
    }
    render(){
        const { params } = this.props.navigation.state;
        console.log('this.props.hatchbackOneCarDetails', this.props.hatchbackOneCarDetails)
        let img1 = this.state.avatarSource1 == null? null:
            <Image
                source={this.state.avatarSource1}
                style={{height: 230, width: 200}}
            />
        let img2 = this.state.avatarSource2 == null? null:
            <Image
                source={this.state.avatarSource2}
                style={{height: 230, width: 200}}
            />
        let img3 = this.state.avatarSource3 == null? null:
            <Image
                source={this.state.avatarSource3}
                style={{height: 230, width: 200}}
            />
        return(
            <View style={{flex: 1 ,backgroundColor: '#ffffff' }}>
                <View style={{flexWrap: 'wrap', flexDirection: 'row', marginLeft: 10, marginRight: 10,marginTop: 20,justifyContent:'space-between'}}>
                    <TextInput
                        underlineColorAndroid='transparent'
                        placeholder='Registration Number'
                        placeholderTextColor='#8C8C8C'
                        autoCapitalize='none'
                        onChangeText={(CarRegisterationNumber) => this.setState({CarRegisterationNumber})}
                        value={this.state.CarRegisterationNumber}
                        style={styles.textInput}
                    />
                    <TextInput
                        underlineColorAndroid='transparent'
                        placeholder='Car Color'
                        placeholderTextColor='#8C8C8C'
                        autoCapitalize='none'
                        onChangeText={(CarColor) => this.setState({CarColor})}
                        value={this.state.CarColor}
                        style={styles.textInput}
                    />
                </View>
                <View style={{flexWrap: 'wrap', flexDirection: 'row', marginLeft: 10, marginRight: 10,marginTop: 10, justifyContent:'space-between'}}>
                    <TextInput
                        underlineColorAndroid='transparent'
                        placeholder='Brand'
                        placeholderTextColor='#8C8C8C'
                        autoCapitalize='none'
                        onChangeText={(CarBrand) => this.setState({CarBrand})}
                        value={this.state.CarBrand}
                        style={styles.textInput}
                    />
                    <TextInput
                        underlineColorAndroid='transparent'
                        placeholder='Model'
                        placeholderTextColor='#8C8C8C'
                        autoCapitalize='none'
                        onChangeText={(CarModel) => this.setState({CarModel})}
                        value={this.state.CarModel}
                        style={styles.textInput}
                    />
                </View>
                <View style={{flexWrap: 'wrap', flexDirection: 'row', marginLeft: 10, marginRight: 10,marginTop:10, justifyContent:'space-between'}}>
                    <TextInput
                        underlineColorAndroid='transparent'
                        placeholder='VIN Number'
                        placeholderTextColor='#8C8C8C'
                        autoCapitalize='none'
                        onChangeText={(CarVINNumber) => this.setState({CarVINNumber})}
                        value={this.state.CarVINNumber}
                        style={styles.textInput}
                    />
                </View>
                <View style={{marginTop: 20, marginLeft: 15}}>
                    <Text style={{color: '#000000', fontSize: 15}}>Add Car Image</Text>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity onPress={this.show1.bind(this)}>
                                { !this.state.isImage1 ?  <View style={{borderWidth: 1,justifyContent: 'center', alignItems:'center',height: 90,width: 90, backgroundColor: '#e2e2e2', borderStyle: 'dashed', borderRadius: 5, marginRight: 10, marginTop: 10}}>
                                <Text style={{ fontSize: 40, alignSelf: 'center'}}>+</Text>
                                    </View> :
                                    <View style={{marginRight: 10, marginTop:10, borderRadius: 5, borderWidth: 1}}>
                                        <Text>{img1}</Text>
                                    </View>}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.show2.bind(this)}>
                                { !this.state.isImage2 ?  <View style={{borderWidth: 1, justifyContent: 'center', alignItems:'center',height: 90,width: 90, backgroundColor: '#e2e2e2', borderStyle: 'dashed', borderRadius: 5, marginRight: 10, marginTop: 10}}>
                                        <Text style={{ fontSize: 40, alignSelf: 'center'}}>+</Text>
                                    </View> :
                                    <View style={{marginRight: 10, marginTop:10, borderRadius: 5, borderWidth: 1}}>
                                        <Text>{img2}</Text>
                                    </View>}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.show3.bind(this)}>
                                { !this.state.isImage3 ?  <View style={{borderWidth: 1, justifyContent: 'center', alignItems:'center',height: 90,width: 90, backgroundColor: '#e2e2e2', borderStyle: 'dashed', borderRadius: 5, marginRight: 10, marginTop: 10}}>
                                        <Text style={{ fontSize: 40, alignSelf: 'center'}}>+</Text>
                                    </View> :
                                    <View style={{marginRight: 10, marginTop:10, borderRadius: 5, borderWidth: 1}}>
                                        <Text>{img3}</Text>
                                    </View>}
                            </TouchableOpacity>
                        </View>
                </View>
                <TouchableHighlight underlayColor='#ffffff' onPress={()=>this.OnSave()} style={{top: 215,margin: 30, height: 50,alignItems:'center',justifyContent:'center', borderColor: 'orange', borderWidth: 1}}>
                    <View>
                        <Text style={{alignItems:'center', color: 'orange'}}>Save</Text>
                    </View>
                </TouchableHighlight>
                {this.state.isSuccessfullyRegistered ? alert('Successfully Registered, Can view details in previous screen'): null }
            </View>
        )
    }
    show1(){
        pick((source1, data1) => this.setState({avatarSource1: source1, data1: data1, isImage1: true}));
    }
    show2(){
        pick((source2, data2) => this.setState({avatarSource2: source2, data2: data2, isImage2: true}));
    }
    show3(){
        pick((source3, data3) => this.setState({avatarSource3: source3, data3: data3, isImage3: true}));
    }
}

const styles = StyleSheet.create({
    textInput:{
        width: 180,
        borderBottomWidth: 2,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        borderRadius: 75,
        width: 150,
        height: 150
    }
})

function mapStateToProps (state) {
    return {
        hatchbackOneCarDetails: state.appData.hatchbackOneCarDetails,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        saveCarDetails : (title, value) => dispatch(saveCarDetails(title, value))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCarDetails)