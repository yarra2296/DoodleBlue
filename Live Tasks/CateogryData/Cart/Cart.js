import React from 'react';
import {
    View,
    Text,
    SectionList,
    ScrollView,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

let {width, height} = Dimensions.get('window')

import { connect } from 'react-redux';
import saveCartValues from '../actions/action';

class Cart extends React.Component{

    constructor(props){
        super(props);
        this.state={value: true}
    }

    Rating(value, rating){
        if (value >= rating) {
            return 'star';
        } else if (value >= rating - 0.5) { //3.2
            return 'star-half-o';
        } else {
            return 'star-o';
        }
    }

    deleteFromCart(data){
        var index = this.props.cartValues.indexOf(data);
        if (index > -1) {
            this.props.cartValues.splice(index, 1);
        }
        this.setState({
            value: false
        })
    }

    render(){
        return(
            <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
            <View style={{flex:1, backgroundColor: '#ffffff'}}>
            {!this.props.isCartValues ?
            <View style={{flex:1, backgroundColor: 'white', justifyContent:'center', alignItems:'center'}}>
                <Text>Cart is Empty, Please add Something to cart</Text>
            </View> :
                <SectionList
                    showsVerticalScrollIndicator={false}
                    sections={[ {data: this.props.cartValues} ]}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) =>
                        (  <View style={styles.view}>
                            <View style={{left: width/2.5, bottom: 25}}>
                                <TouchableOpacity onPress={()=>this.deleteFromCart(item)}>
                                    <Icon name='times-circle' size={40}/>
                                </TouchableOpacity>
                            </View>
                            <Image source={{uri: item.ProductImage}} style={styles.image}/>
                            <Text>{item.ProductName}</Text>
                            <Text>{item.Cost}</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name={this.Rating(item.Rating,1)} size={30} color="gold"/>
                                <Icon name={this.Rating(item.Rating,2)} size={30} color="gold"/>
                                <Icon name={this.Rating(item.Rating,3)} size={30} color="gold"/>
                                <Icon name={this.Rating(item.Rating,4)} size={30} color="gold"/>
                                <Icon name={this.Rating(item.Rating,5)} size={30} color="gold"/>
                                <Text style={{alignSelf: 'center'}}>({item.Rating})</Text>
                            </View>
                        </View> )}
                />
                }
                </View>
            </ScrollView>
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

function mapStateToProps (state) {
    return {
        cartValues: state.appData.cartValues,
        isCartValues: state.appData.isCartValues,
    }
}

export default connect(
    mapStateToProps,
)(Cart)