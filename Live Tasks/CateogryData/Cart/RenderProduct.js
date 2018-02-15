import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

let {width, height} = Dimensions.get('window')

export default class RenderProduct extends React.Component{

    Rating(value, rating){
        if (value >= rating) {
            return 'star';
        } else if (value >= rating - 0.5) { //3.2
            return 'star-half-o';
        } else {
            return 'star-o';
        }
    }

    render(){
        console.log("url:", this.props.cartvalues.ProductImage)
        return(
            <View style={styles.view}>
                <View style={{left: width/2.5, bottom: 25}}>
                    <Icon name='times-circle' size={40}/>
                </View>
                <Image source={{uri: this.props.cartvalues.ProductImage}} style={styles.image}/>
                <Text>{this.props.cartvalues.ProductName}</Text>
                <Text>{this.props.cartvalues.Cost}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Icon name={this.Rating(this.props.cartvalues.Rating,1)} size={30} color="gold"/>
                    <Icon name={this.Rating(this.props.cartvalues.Rating,2)} size={30} color="gold"/>
                    <Icon name={this.Rating(this.props.cartvalues.Rating,3)} size={30} color="gold"/>
                    <Icon name={this.Rating(this.props.cartvalues.Rating,4)} size={30} color="gold"/>
                    <Icon name={this.Rating(this.props.cartvalues.Rating,5)} size={30} color="gold"/>
                    <Text style={{alignSelf: 'center'}}>({this.props.cartvalues.Rating})</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view:{
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        margin: 10,
        marginBottom: 50
    },
    image:{
        width: 75,
        height: 75
    },
    rating:{
        width: 300,
        height: 50
    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'red',
        marginTop: 10
    },
    text:{
        color: '#ffffff',
    }
})
