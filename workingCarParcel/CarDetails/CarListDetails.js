import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

export default class CarListDetails extends React.Component{
    checkImage(){
            if((this.props.carDetails.avatarSource1)!==null)
            {
                return (<Image source={this.props.carDetails.avatarSource1} style={{width: 100, height: 100}}/>)
            } else if ((this.props.carDetails.avatarSource2)!==null)
            {
                return (<Image source={this.props.carDetails.avatarSource2} style={{width: 100, height: 100}}/>)
            } else if ((this.props.carDetails.avatarSource3)!==null)
            {
                return (<Image source={this.props.carDetails.avatarSource3} style={{width: 100, height: 100}}/>)
            } else
            {
                return (<Text style={{ fontSize: 40, alignSelf: 'center'}}>+</Text>)
            }
    }

    render(){
        return(
            <View style={{flex: 1, borderWidth: 1, borderColor: "#acacac",marginBottom: 10,padding: 10, borderRadius: 5}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
                    <Text style={{fontWeight:'bold', fontSize: 18, color: 'black'}}>{this.props.carType} - AJ2563 CAL</Text>
                    <Text style={{color: 'black'}}>...</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginTop: 7}}>
                    <View>
                        <View style={{borderWidth: 1, justifyContent: 'center', alignItems:'center',height: 100,width: 100, backgroundColor: '#e2e2e2', borderStyle: 'dashed', borderRadius: 5, marginRight: 10}}>
                           {this.checkImage()}
                        </View>
                    </View>
                    <View style={{flex:1, justifyContent: 'space-between', bottom: 3}}>
                        <Text style={{paddingBottom: 2, fontWeight: 'bold'}}>Brand                          <Text style={{fontWeight:'bold', color: 'black'}}> {this.props.carDetails.CarBrand}</Text></Text>
                        <Text style={{paddingBottom: 2, fontWeight: 'bold'}}>Model                       <Text style={{fontWeight:'bold', color: 'black'}}>   {this.props.carDetails.CarModel}</Text></Text>
                        <Text style={{paddingBottom: 2, fontWeight: 'bold'}}>Color                          <Text style={{fontWeight:'bold', color: 'black'}}>   {this.props.carDetails.CarColor}</Text></Text>
                        <Text style={{fontWeight: 'bold'}}>VIN Number        <Text style={{fontWeight:'bold', color: 'black'}}>    {this.props.carDetails.CarVINNumber}</Text></Text>
                    </View>
                </View>
            </View>
        )
    }
}