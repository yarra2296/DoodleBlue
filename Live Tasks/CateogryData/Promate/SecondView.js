import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import saveCartValues from '../actions/action';

class SecondView extends React.Component{

    constructor(props){
        super(props);
        this.state={
            value: [],
        }
    }

    componentDidMount () {
       // this._updateList();
    }

    addProduct(productdetails) {
        if (this.productExists(productdetails)) {
            alert("You already added this product to the cart, Checkout in cart!")
        }
        else {
            this.state.value.push({
                ProductName: productdetails.ProductName,
                ProductImage: productdetails.ProductImage[0],
                Cost: productdetails.Cost,
                Rating: productdetails.Rating
            });
            this.props.saveCartValues(this.state.value)
        }
        return true;
    }

   productExists(productdetails) {
        return this.props.cartValues.some(function(el) {
            return el.ProductName === productdetails.ProductName;
        });
    }

    AddToCart(value){
        this.addProduct(value)
    }

    /*if (this.props.cartValues.length === 0) {
        this.state.value.push(data)
        this.props.saveCartValues(this.state.value);
    }
    else {
        function filterIt(this.props.cartValues, data.ProductName) {
            return arr.filter(function (obj) {
                return Object.keys(obj).some(function (key) {
                    return obj[key].includes(searchKey);
                })
            });
        }

        else
        {
            alert("You already added this product to the cart, Checkout in cart!")
        }
    }*/

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
        return(
            <View style={styles.view}>
                <Image source={{uri: this.props.renderproduct.ProductImage[0]}} style={styles.image}/>
                <Text>{this.props.renderproduct.ProductName}</Text>
                <Text>{this.props.renderproduct.Cost}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Icon name={this.Rating(this.props.renderproduct.Rating,1)} size={30} color="gold"/>
                    <Icon name={this.Rating(this.props.renderproduct.Rating,2)} size={30} color="gold"/>
                    <Icon name={this.Rating(this.props.renderproduct.Rating,3)} size={30} color="gold"/>
                    <Icon name={this.Rating(this.props.renderproduct.Rating,4)} size={30} color="gold"/>
                    <Icon name={this.Rating(this.props.renderproduct.Rating,5)} size={30} color="gold"/>
                <Text style={{alignSelf: 'center'}}>({this.props.renderproduct.Rating})</Text>
                </View>
                <TouchableOpacity onPress={()=>this.AddToCart(this.props.renderproduct)}>
                    <View style={styles.button}>
                        <Text style={styles.text}>ADD TO CART</Text>
                    </View>
                </TouchableOpacity>
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

function mapStateToProps (state) {
    return {
        cartValues: state.appData.cartValues,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        saveCartValues : (value) => dispatch(saveCartValues(value))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SecondView)
