import React from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
    SectionList,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import { connect } from 'react-redux';
import saveCartValues from '../actions/action';

let {width, height} = Dimensions.get('window')

class ProductView extends React.Component{

    constructor(props){
        super(props);
        this.state={
            values:[],
            imageurl: '',
            value: []
        }
    }

    showimage(url){
        this.setState({
            imageurl: url
        })
    }

    componentDidMount(){
        const {params} = this.props.navigation.state
        this.setState({
            values: params.productdetails.ProductImage
        })

    }

   /* mainImage(){
        if(this.state.imageurl===null){
            return (<Image source={{uri: this.}} style={{resizeMode: 'center', width: width/2, height: height/2}}/>)
        }
        else{
            return (<Image source={{uri: this.state.imageurl}} style={{resizeMode: 'center', width: width/2, height: height/2}}/>)
        }
    }*/

    addProduct(productdetails) {
        if (this.productExists(productdetails)) {
            alert("You already added this product to the cart, Checkout in cart!")
        }
        else {
            this.state.value.push({
                ProductName: productdetails.ProductName,
                ProductImage1: productdetails.ProductImage1,
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

    render(){
        const { params } = this.props.navigation.state;
        const {navigate} = this.props.navigation
        this.image = params.productdetails.ProductImage1
        return(
            <View style={{flex:1, backgroundColor:'#ffffff'}}>
                <View style={{backgroundColor: '#ffffff', alignItems: 'flex-end', height: 30}}>
                    <TouchableOpacity onPress={()=>navigate('cart')}>
                        <View style={{flexDirection:'row'}}>
                            <Icon name='cart-plus' size={30}/>
                            {this.props.isCartValues ? <View style={{borderRadius: 100,width: 15, height: 15, backgroundColor: 'orange', right: 2}}>
                                    <Text style={{alignSelf: 'center', bottom: 3}}>{this.props.cartValues.length}</Text></View> :
                                <View style={{borderRadius: 100,width: 15, height: 15, backgroundColor: '#ffffff', right: 2}}>
                                    <Text style={{alignSelf: 'center', color: "#ffffff"}}>{this.props.cartValues.length}</Text></View>}
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{borderWidth: 1, marginTop: 5}}/>
                <View style={{flex: 1, backgroundColor: '#ffffff', margin: 10}}>
                    <View style={{alignItems:'center'}}>
                        {this.state.imageurl ? <Image source={{uri: this.state.imageurl}} style={{resizeMode: 'center', width: width/2, height: height/2}}/> :
                            <Image source={{uri: params.productdetails.ProductImage[0]}} style={{resizeMode: 'center', width: width/2, height: height/2}}/>}
                    </View>
                    <View style={{marginLeft: 30}}>
                    <SectionList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        sections={[ {data: this.state.values}]}
                        keyExtractor={(item, index) => index}
                        renderItem={({item}) => (<TouchableOpacity onPress={()=>this.showimage(item)} underlayColor='white'><View style={{marginRight:10, borderWidth: 1, padding: 10}}><Image source={{uri : item}} style={{resizeMode: 'center',width: 50, height: 50}}/></View></TouchableOpacity>)}
                    />
                    </View>
                    <Text style={{color: 'black', fontSize: 20, paddingLeft: 30, marginTop: 10}}>{params.productdetails.ProductName}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold', color:'black', marginLeft: 30, marginTop: 10}}>Rating: {params.productdetails.Rating} </Text>
                        <Icon name='star-o' size={15} color='black' style={{marginTop: 12}}/>
                    </View>
                    <Text style={{fontWeight: 'bold', fontSize: 30, color: 'black', marginLeft: 30, marginTop: 10}}>Cost: {params.productdetails.Cost}</Text>
                </View>
                <TouchableOpacity onPress={()=>this.AddToCart(params.productdetails)}>
                    <View style={styles.button}>
                        <Text style={styles.text}>ADD TO CART</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 10,
        paddingBottom: 2,
        backgroundColor: 'red',
        marginTop: 10
    },
    text:{
        color: '#ffffff',
        alignSelf: 'center',
        bottom: 3
    }
})

function mapStateToProps (state) {
    return {
        cartValues: state.appData.cartValues,
        isCartValues: state.appData.isCartValues,
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
)(ProductView)