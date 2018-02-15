/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    SectionList,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native';
import SecondView from './SecondView';
import Icon from 'react-native-vector-icons/FontAwesome'

import { connect } from 'react-redux';
import saveCartvalues from '../actions/action';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class Promate extends Component<Props> {

    static navigationOptions = { title: 'Welcome', header: { visible:false } };

    constructor(props){
        super(props);
        this.state={
            data: [
                {
                    CateogryName: 'Audio',
                    CateogryImage: 'https://www.beatsbydre.com/content/dam/beats/web/pdp/beats-solo3-wireless/color_selector/_0052_rgb_MP582-RGB-front_V2.png',
                    ProductName: 'HeadPhone1',
                    ProductImage: [
                        'https://images-na.ssl-images-amazon.com/images/I/41a1SfU3o9L.jpg',
                        'https://d2211byn0pk9fi.cloudfront.net/spree/products/11563/product/A3233011_TD01.jpg?1461128642',
                        'http://headphone.guru/wp-content/uploads/2017/10/E55BT_Quincy_Grey_Hero-1605x1605px-495x400.png ',
                        'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/M/QU/MQUF2/MQUF2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1502831144597',
                    ],
                    Cost: '$138',
                    Rating: 5,
                },
                {
                    CateogryName: 'Audio',
                    CateogryImage: 'https://www.beatsbydre.com/content/dam/beats/web/pdp/beats-solo3-wireless/color_selector/_0052_rgb_MP582-RGB-front_V2.png',
                    ProductName: 'HeadPhone2',
                    ProductImage: [
                    'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/M/QU/MQUF2/MQUF2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1502831144597',
                    'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/M/QU/MQUF2/MQUF2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1502831144597',
                    'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/M/QU/MQUF2/MQUF2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1502831144597',
                    'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/M/QU/MQUF2/MQUF2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1502831144597',
                    ],
                    Cost: '$100',
                    Rating: 1,
                },
                {
                    CateogryName: 'Audio',
                    CateogryImage: 'https://www.beatsbydre.com/content/dam/beats/web/pdp/beats-solo3-wireless/color_selector/_0052_rgb_MP582-RGB-front_V2.png',
                    ProductName: 'HeadPhone3',
                    ProductImage:[
                    'https://d2211byn0pk9fi.cloudfront.net/spree/products/11563/product/A3233011_TD01.jpg?1461128642',
                    'https://d2211byn0pk9fi.cloudfront.net/spree/products/11563/product/A3233011_TD01.jpg?1461128642',
                    'https://d2211byn0pk9fi.cloudfront.net/spree/products/11563/product/A3233011_TD01.jpg?1461128642',
                    'https://d2211byn0pk9fi.cloudfront.net/spree/products/11563/product/A3233011_TD01.jpg?1461128642',
                    ],
                    Cost: '$150',
                    Rating: 5,
                },
                {
                    CateogryName: 'Audio',
                    CateogryImage: 'https://www.beatsbydre.com/content/dam/beats/web/pdp/beats-solo3-wireless/color_selector/_0052_rgb_MP582-RGB-front_V2.png',
                    ProductName: 'HeadPhone4',
                    ProductImage:[
                    'https://images-na.ssl-images-amazon.com/images/I/41a1SfU3o9L.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/41a1SfU3o9L.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/41a1SfU3o9L.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/41a1SfU3o9L.jpg',
                    ],
                    Cost: '$70',
                    Rating: 3,
                },
                {
                    CateogryName: 'Audio',
                    CateogryImage: 'https://www.beatsbydre.com/content/dam/beats/web/pdp/beats-solo3-wireless/color_selector/_0052_rgb_MP582-RGB-front_V2.png',
                    ProductName: 'HeadPhone5',
                    ProductImage:[
                    'http://headphone.guru/wp-content/uploads/2017/10/E55BT_Quincy_Grey_Hero-1605x1605px-495x400.png  ',
                    'http://headphone.guru/wp-content/uploads/2017/10/E55BT_Quincy_Grey_Hero-1605x1605px-495x400.png  ',
                    'http://headphone.guru/wp-content/uploads/2017/10/E55BT_Quincy_Grey_Hero-1605x1605px-495x400.png  ',
                    'http://headphone.guru/wp-content/uploads/2017/10/E55BT_Quincy_Grey_Hero-1605x1605px-495x400.png  ',
                    ],
                    Cost: '$108',
                    Rating: 2.8,
                },
                {
                    CateogryName: 'Chargers',
                    CateogryImage: 'https://www.androidcentral.com/sites/androidcentral.com/themes/android_visor/images/badges/quick-charge.png',
                    ProductName: 'Charger1',
                    ProductImage:[
                    'http://www.glasgowmobile.co.uk/wp-content/uploads/2017/09/1-16050910335A51.jpg',
                    'http://www.glasgowmobile.co.uk/wp-content/uploads/2017/09/1-16050910335A51.jpg',
                    'http://www.glasgowmobile.co.uk/wp-content/uploads/2017/09/1-16050910335A51.jpg',
                    'http://www.glasgowmobile.co.uk/wp-content/uploads/2017/09/1-16050910335A51.jpg',
                    ],
                    Cost: '$18',
                    Rating: 5,
                },
                {
                    CateogryName: 'Chargers',
                    CateogryImage: 'https://www.androidcentral.com/sites/androidcentral.com/themes/android_visor/images/badges/quick-charge.png',
                    ProductName: 'Chargers2',
                    ProductImage:[
                    'https://i.ytimg.com/vi/KRs7FOxNx6M/maxresdefault.jpg',
                    'https://i.ytimg.com/vi/KRs7FOxNx6M/maxresdefault.jpg',
                    'https://i.ytimg.com/vi/KRs7FOxNx6M/maxresdefault.jpg',
                   'https://i.ytimg.com/vi/KRs7FOxNx6M/maxresdefault.jpg',
                    ],
                    Cost: '$25',
                    Rating: 2.8
                },
                {
                    CateogryName: 'Chargers',
                    CateogryImage: 'https://www.androidcentral.com/sites/androidcentral.com/themes/android_visor/images/badges/quick-charge.png',
                    ProductName: 'Chargers3',
                    ProductImage:[
                    'https://target.scene7.com/is/image/Target/50785784?wid=328&hei=328&qlt=80&fmt=pjpeg',
                    'https://target.scene7.com/is/image/Target/50785784?wid=328&hei=328&qlt=80&fmt=pjpeg',
                    'https://target.scene7.com/is/image/Target/50785784?wid=328&hei=328&qlt=80&fmt=pjpeg',
                    'https://target.scene7.com/is/image/Target/50785784?wid=328&hei=328&qlt=80&fmt=pjpeg',
                    ],
                    Cost: '$40',
                    Rating: 3,
                },
                {
                    CateogryName: 'Chargers',
                    CateogryImage: 'https://www.androidcentral.com/sites/androidcentral.com/themes/android_visor/images/badges/quick-charge.png',
                    ProductName: 'Chargers4',
                    ProductImage:[
                    'https://images.mobilefun.co.uk/graphics/300pixelp/58956.jpg',
                    'https://images.mobilefun.co.uk/graphics/300pixelp/58956.jpg',
                    'https://images.mobilefun.co.uk/graphics/300pixelp/58956.jpg',
                    'https://images.mobilefun.co.uk/graphics/300pixelp/58956.jpg',
                    ],
                    Cost: '$100',
                    Rating: 2
                },
                {
                    CateogryName: 'Chargers',
                    CateogryImage: 'https://www.androidcentral.com/sites/androidcentral.com/themes/android_visor/images/badges/quick-charge.png',
                    ProductName: 'Chargers5',
                    ProductImage:[
                    'http://imshopping.rediff.com/imgshop/800-1280/shopping/pixs/16786/s/samoemcharger._charger-cable-for-htc-one-e8-mobile-phone.jpg',
                    'http://imshopping.rediff.com/imgshop/800-1280/shopping/pixs/16786/s/samoemcharger._charger-cable-for-htc-one-e8-mobile-phone.jpg',
                    'http://imshopping.rediff.com/imgshop/800-1280/shopping/pixs/16786/s/samoemcharger._charger-cable-for-htc-one-e8-mobile-phone.jpg',
                    'http://imshopping.rediff.com/imgshop/800-1280/shopping/pixs/16786/s/samoemcharger._charger-cable-for-htc-one-e8-mobile-phone.jpg',
                    ],
                    Cost: '$50',
                    Rating: 4
                },
                {
                    CateogryName: 'PowerBanks',
                    CateogryImage: 'http://www.techtitans.ca/cat_images/TEC_1513197243_pb.png',
                    ProductName: 'PowerBanks1',
                    ProductImage:[
                   'https://i2.wp.com/www.yugatech.com/wp-content/uploads/2015/04/xiaomi-powerbank-4.jpg?resize=480%2C360',
                    'https://i2.wp.com/www.yugatech.com/wp-content/uploads/2015/04/xiaomi-powerbank-4.jpg?resize=480%2C360',
                        'https://i2.wp.com/www.yugatech.com/wp-content/uploads/2015/04/xiaomi-powerbank-4.jpg?resize=480%2C360',
                    'https://i2.wp.com/www.yugatech.com/wp-content/uploads/2015/04/xiaomi-powerbank-4.jpg?resize=480%2C360',
                    ],
                    Cost: '$50',
                    Rating: 5
                },
                {
                    CateogryName: 'PowerBanks',
                    CateogryImage: 'http://www.techtitans.ca/cat_images/TEC_1513197243_pb.png',
                    ProductName: 'PowerBanks2',
                    ProductImage:[
                    'http://cdn.screenguards.co.in/media/catalog/product/cache/11/image/9df78eab33525d08d6e5fb8d27136e95/r/o/rock-qi-wireless-charger-power-bank-5v-2a-5w-external-battery-with-digital-display-powerbank-for.jpg',
                    'http://cdn.screenguards.co.in/media/catalog/product/cache/11/image/9df78eab33525d08d6e5fb8d27136e95/r/o/rock-qi-wireless-charger-power-bank-5v-2a-5w-external-battery-with-digital-display-powerbank-for.jpg',
                   'http://cdn.screenguards.co.in/media/catalog/product/cache/11/image/9df78eab33525d08d6e5fb8d27136e95/r/o/rock-qi-wireless-charger-power-bank-5v-2a-5w-external-battery-with-digital-display-powerbank-for.jpg',
                    'http://cdn.screenguards.co.in/media/catalog/product/cache/11/image/9df78eab33525d08d6e5fb8d27136e95/r/o/rock-qi-wireless-charger-power-bank-5v-2a-5w-external-battery-with-digital-display-powerbank-for.jpg',
                    ],
                    Cost: '$100',
                    Rating: 3
                },
                {
                    CateogryName: 'PowerBanks',
                    CateogryImage: 'http://www.techtitans.ca/cat_images/TEC_1513197243_pb.png',
                    ProductName: 'PowerBanks3',
                    ProductImage:[
                    'https://4.bp.blogspot.com/-vo3QyKF5iWA/Vz3bkkbE-OI/AAAAAAAADxw/KnB5Si7Nanc2-TVutNKeYWDn7zr6MVSTACLcB/s1600/Problems%2Bwith%2BPower%2BBanks.jpg',
                    'https://4.bp.blogspot.com/-vo3QyKF5iWA/Vz3bkkbE-OI/AAAAAAAADxw/KnB5Si7Nanc2-TVutNKeYWDn7zr6MVSTACLcB/s1600/Problems%2Bwith%2BPower%2BBanks.jpg',
                    'https://4.bp.blogspot.com/-vo3QyKF5iWA/Vz3bkkbE-OI/AAAAAAAADxw/KnB5Si7Nanc2-TVutNKeYWDn7zr6MVSTACLcB/s1600/Problems%2Bwith%2BPower%2BBanks.jpg',
                    'https://4.bp.blogspot.com/-vo3QyKF5iWA/Vz3bkkbE-OI/AAAAAAAADxw/KnB5Si7Nanc2-TVutNKeYWDn7zr6MVSTACLcB/s1600/Problems%2Bwith%2BPower%2BBanks.jpg',
                    ],
                    Cost: '$23',
                    Rating: 4
                },
                {
                    CateogryName: 'PowerBanks',
                    CateogryImage: 'http://www.techtitans.ca/cat_images/TEC_1513197243_pb.png',
                    ProductName: 'PowerBanks4',
                    ProductImage:[
                    'https://cdn57.androidauthority.net/wp-content/uploads/2017/06/best-portable-chargers-ravpower-26800-840x473.jpg',
                    'https://cdn57.androidauthority.net/wp-content/uploads/2017/06/best-portable-chargers-ravpower-26800-840x473.jpg',
                    'https://cdn57.androidauthority.net/wp-content/uploads/2017/06/best-portable-chargers-ravpower-26800-840x473.jpg',
                    'https://cdn57.androidauthority.net/wp-content/uploads/2017/06/best-portable-chargers-ravpower-26800-840x473.jpg',
                    ],
                    Cost: '$23',
                    Rating: 2
                },
                {
                    CateogryName: 'PowerBanks',
                    CateogryImage: 'http://www.techtitans.ca/cat_images/TEC_1513197243_pb.png',
                    ProductName: 'PowerBanks5',
                    ProductImage:[
                        'https://cdn57.androidauthority.net/wp-content/uploads/2017/12/charmast-battery-840x485.jpg',
                        'https://cdn57.androidauthority.net/wp-content/uploads/2017/12/charmast-battery-840x485.jpg',
                        'https://cdn57.androidauthority.net/wp-content/uploads/2017/12/charmast-battery-840x485.jpg',
                        'https://cdn57.androidauthority.net/wp-content/uploads/2017/12/charmast-battery-840x485.jpg',
                    ],
                    Cost: '$23',
                    Rating: 0
                },
                {
                    CateogryName: 'Photography',
                    CateogryImage: 'https://cdn2.iconfinder.com/data/icons/electronics/512/Professional_Camera-512.png',
                    ProductName: 'Photography1',
                    ProductImage:[
                    'https://static.pexels.com/photos/226243/pexels-photo-226243.jpeg',
                    'https://static.pexels.com/photos/226243/pexels-photo-226243.jpeg',
                    'https://static.pexels.com/photos/226243/pexels-photo-226243.jpeg',
                    'https://static.pexels.com/photos/226243/pexels-photo-226243.jpeg',
                    ],
                    Cost: '$200',
                    Rating: 1.8
                },
                {
                    CateogryName: 'Photography',
                    CateogryImage: 'https://cdn2.iconfinder.com/data/icons/electronics/512/Professional_Camera-512.png',
                    ProductName: 'Photography2',
                    ProductImage: [
                    'https://www.businessplan.com.ng/wp-content/uploads/2017/01/start-a-Photography-Business-in-Nigeria.jpg',
                    'https://www.businessplan.com.ng/wp-content/uploads/2017/01/start-a-Photography-Business-in-Nigeria.jpg',
                    'https://www.businessplan.com.ng/wp-content/uploads/2017/01/start-a-Photography-Business-in-Nigeria.jpg',
                    'https://www.businessplan.com.ng/wp-content/uploads/2017/01/start-a-Photography-Business-in-Nigeria.jpg',
                    ],
                    Cost: '$230',
                    Rating: 4.5
                },
                {
                    CateogryName: 'Photography',
                    CateogryImage: 'https://cdn2.iconfinder.com/data/icons/electronics/512/Professional_Camera-512.png',
                    ProductName: 'Photography3',
                    ProductImage:[
                    'http://www.ucl.ac.uk/isd/services/creative-media/images/camera.jpg',
                    'http://www.ucl.ac.uk/isd/services/creative-media/images/camera.jpg',
                    'http://www.ucl.ac.uk/isd/services/creative-media/images/camera.jpg',
                    'http://www.ucl.ac.uk/isd/services/creative-media/images/camera.jpg',
                    ],
                    Cost: '$250',
                    Rating: 5
                },
                {
                    CateogryName: 'Photography',
                    CateogryImage: 'https://cdn2.iconfinder.com/data/icons/electronics/512/Professional_Camera-512.png',
                    ProductName: 'Photography4',
                    ProductImage:[
                    'http://www.nitinkhanna.net/wp-content/uploads/2018/01/Picture-1.png',
                    'http://www.nitinkhanna.net/wp-content/uploads/2018/01/Picture-1.png',
                    'http://www.nitinkhanna.net/wp-content/uploads/2018/01/Picture-1.png',
                    'http://www.nitinkhanna.net/wp-content/uploads/2018/01/Picture-1.png',
                    ],
                    Cost: '$250',
                    Rating: 3
                },
                {
                    CateogryName: 'Photography',
                    CateogryImage: 'https://cdn2.iconfinder.com/data/icons/electronics/512/Professional_Camera-512.png',
                    ProductName: 'Photography5',
                    ProductImage:[
                    'http://aboutforensics.co.uk/wp-content/uploads/2015/05/Photography-1.jpg',
                    'http://aboutforensics.co.uk/wp-content/uploads/2015/05/Photography-1.jpg',
                    'http://aboutforensics.co.uk/wp-content/uploads/2015/05/Photography-1.jpg',
                    'http://aboutforensics.co.uk/wp-content/uploads/2015/05/Photography-1.jpg',
                    ],
                    Cost: '$300',
                    Rating: 5
                },
            ],
            audioValues:[],
            chargersValues:[],
            powerBankValues:[],
            photographyValues:[],
            cateogryListNames:[],
            isAudio: true,
            isChargers: false,
            isPowerBanks: false,
            isPhotography: false,
            opacity: 1,
            SelectedProduct: [],
        }
        this.getValues();
        this.getCateogryList();
    }

    getValues(){
        const a = this.state.data.length
        const Audio = 'Audio'
        for(let i=0; i<=(a-1);i++) {
            if (this.state.data[i].CateogryName === Audio) {
                this.state.audioValues.push(this.state.data[i])
                console.log("AUDIO VALUES:", this.state.audioValues)
            }
        }
        this.state.objectValues = this.state.audioValues
    }

    getCateogryList(){
        this.state.cateogryListNames = this.state.data.filter((item, index, self) =>
            index === self.findIndex((t) => (
                t.CateogryName === item.CateogryName && t.CateogryImage === item.CateogryImage
            ))
        )
        console.log("checking Cateogry List names:", this.state.cateogryListNames)
    }

    viewvalues(name){
        this.setState({
            SelectedProduct: name,
        });
        let product = this.state.data.filter(function (e) {
            return (e.CateogryName === name.CateogryName)
        })
        this.setState({
            objectValues: product
        })
    }

    ViewProduct(item){
        if(this.state.SelectedProduct.CateogryName===item.CateogryName)
        {
            return(<TouchableOpacity onPress={()=>this.viewvalues(item)}>
                <View style={styles.view1}>
                    <Image source={{uri: item.CateogryImage}} style={styles.image}/>
                    <Text>{item.CateogryName}</Text>
                </View>
            </TouchableOpacity>)
        }
        else
        {
            return(<TouchableOpacity onPress={()=>this.viewvalues(item)}>
                <View style={styles.view}>
                    <Image source={{uri: item.CateogryImage}} style={styles.image}/>
                    <Text>{item.CateogryName}</Text>
                </View>
            </TouchableOpacity>)
        }
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{backgroundColor: 'white'}}>
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
            <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
            <View style={{backgroundColor: '#ffffff'}}>
                <SectionList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    sections={[ {data: this.state.cateogryListNames}]}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) => this.ViewProduct(item)}
                />
                <SectionList
                    showsHorizontalScrollIndicator={false}
                    sections={[ {data: this.state.objectValues} ]}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) =>
                        (<TouchableHighlight onPress={()=>navigate('productView', {productdetails: item})} underlayColor='white'>
                            <SecondView renderproduct={item}/>
                        </TouchableHighlight>)}
                />
            </View>
            </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cart:{
        width: 20,
        height: 20,
    },
    view:{
        borderRadius: 5,
        backgroundColor: '#c6c6c6',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 70,
        margin: 10,
    },
    image:{
        width: 60,
        height: 60
    },
    view1:{
        borderRadius: 5,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 70,
        margin: 10,
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
)(Promate)
