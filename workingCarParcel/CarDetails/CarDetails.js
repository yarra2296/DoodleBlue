import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Image,
    ScrollView
} from 'react-native';
import CarListDetails from './CarListDetails'
import { connect } from 'react-redux';

class workingCarParcel extends React.Component {
    static navigationOptions = {
        title:'                                    Car Details          '
    };
    open(){

    }
    render(){
        const { navigate } = this.props.navigation
        const { params } = this.props.navigation.state
        console.log('reading from car details component',this.props.hatchbackOneCarDetails)
        console.log('checking the state',  this.props.isHatchbackOneCarDetails)
        return(
            <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={{flex:1, backgroundColor: 'white'}}>
                <View style={{marginTop: 20, marginLeft: 20, marginRight: 20}}>
                    <Text style={{fontSize: 20, color: '#5f5f5f'}}>
                        {'\t'}Let us know about the details of {'\n'}  your 4 cars that will be transported
                    </Text>
                </View>
                <View style={{paddingLeft: 20, paddingRight: 20, marginTop: 20, marginBottom: 20}}>
                    {!this.props.isHatchbackOneCarDetails ?
                        <TouchableHighlight overlaycolor='#ffffff' onPress={()=>navigate('AddCarDetails',{title: 'Hatchback 1'})}>
                        <View style={{borderWidth: 1,height: 70, justifyContent: 'space-between', flexWrap:'wrap', flexDirection: 'row',marginBottom: 10 }}>
                            <View style={{flexDirection:'column'}}>
                                <Text style={{left: 20, top: 20, fontWeight: 'bold', fontSize: 20, borderTopRightRadius: 100, borderBottomLeftRadius: 100, borderTopLeftRadius: 100,borderBottomRightRadius: 100}}>Hatchback 1  </Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                                <Image source={require('../angle.png')} style={{width: 50, height: 45,top: 10}}/>
                            </View>
                        </View>
                    </TouchableHighlight> :
                        <CarListDetails carDetails={this.props.hatchbackOneCarDetails} carType='Hatchback 1' /> }
                    {!this.props.isHatchbackTwoCarDetails ?
                    <TouchableHighlight overlaycolor='#ffffff' onPress={()=>navigate('AddCarDetails',{title: 'Hatchback 2'})}>
                        <View style={{borderWidth: 1,height: 70, justifyContent: 'space-between', flexWrap:'wrap', flexDirection: 'row',marginBottom: 10}}>
                            <View style={{flexDirection:'column'}}>
                                <Text style={{left: 20, top: 20, fontWeight: 'bold', fontSize: 20}}>Hatchback 2  </Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                                <Image source={require('../angle.png')} style={{width: 50, height: 45,top: 10}}/>
                            </View>
                        </View>
                    </TouchableHighlight> :
                        <CarListDetails carDetails={this.props.hatchbackTwoCarDetails}  carType='Hatchback 2'/> }
                    {!this.props.isSUVOneCarDetails ?
                    <TouchableHighlight overlaycolor='#ffffff' onPress={()=>navigate('AddCarDetails',{title: 'SUV 1'})}>
                        <View style={{borderWidth: 1,height: 70, justifyContent: 'space-between', flexWrap:'wrap', flexDirection: 'row',marginBottom: 10 }}>
                            <View style={{flexDirection:'column'}}>
                                <Text style={{left: 20, top: 20, fontWeight: 'bold', fontSize: 20}}>SUV 1  </Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                                <Image source={require('../angle.png')} style={{width: 50, height: 45, top: 10}}/>
                            </View>
                        </View>
                    </TouchableHighlight> :
                        <CarListDetails carDetails={this.props.SUVOneCarDetails}  carType='SUV 1'/> }
                    {!this.props.isSUVTwoCarDetails ?
                    <TouchableHighlight overlaycolor='#ffffff' onPress={()=>navigate('AddCarDetails', {title: 'SUV 2'})}>
                        <View style={{borderWidth: 1,height: 70, justifyContent: 'space-between', flexWrap:'wrap', flexDirection: 'row',marginBottom: 0}}>
                            <View style={{flexDirection:'column'}}>
                                <Text style={{left: 20, top: 20, fontWeight: 'bold', fontSize: 20}}>SUV 2  </Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                                <Image source={require('../angle.png')} style={{width: 50, height: 45,top: 10}}/>
                            </View>
                        </View>
                    </TouchableHighlight>:
                        <CarListDetails carDetails={this.props.SUVTwoCarDetails}  carType='SUV 2'/> }
                </View>
                <View style={{flex: 0.3, flexDirection: 'row', justifyContent:'center', marginTop: 0, marginBottom: 5}}>
                    <Text style={{color:'orange', fontSize: 20}}>+ Add New Car</Text>
                </View>
                <View style={{ marginLeft : 70, flex: 2, bottom: 10, marginTop: 5}}>
                    <Text style={{fontSize: 10}}>Note- If you wish to remove any existing car you'd have to input {'\n'}{'\t\t\t'}   details again</Text>
                </View>
                <TouchableHighlight overlaycolor='#ffffff' onPress={this.open()} >
                    <View style={{borderTopWidth: 1, borderColor: '#a0a0a0'}}>
                        <View style={{marginTop: 20,marginBottom: 20, marginLeft: 30, marginRight: 30, backgroundColor: 'orange',borderWidth: 1, height: 50, justifyContent: 'center', borderColor: 'orange'}}>
                            <Text style={{alignSelf: 'center', fontSize: 20}}>
                                Select your truck type
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
            </ScrollView>
        )
    }
}

function mapStateToProps (state) {
    return {
        hatchbackOneCarDetails: state.appData.hatchbackOneCarDetails,
        hatchbackTwoCarDetails: state.appData.hatchbackTwoCarDetails,
        SUVOneCarDetails: state.appData.SUVOneCarDetails,
        SUVTwoCarDetails: state.appData.SUVTwoCarDetails,
        isHatchbackOneCarDetails: state.appData.isHatchbackOneCarDetails,
        isHatchbackTwoCarDetails: state.appData.isHatchbackTwoCarDetails,
        isSUVOneCarDetails: state.appData.isSUVOneCarDetails,
        isSUVTwoCarDetails: state.appData.isSUVTwoCarDetails,
    }
}

export default connect(
    mapStateToProps,
)(workingCarParcel)