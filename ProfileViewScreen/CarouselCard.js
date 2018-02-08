import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Carousel from 'react-native-carousel';
// import ImageSlider from 'react-native-image-slider';
/*import Carousel from 'react-native-snap-carousel';*/
/*import FlatListData from './FlatListData';*/

/*
const horizontalMargin = 20;
const slideWidth = 280;

// const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;
*/

export default class Slider extends React.Component{
    /*constructor(props){
        super(props);
        this.state={
          entries:[
              {
                  image : require('./place1.jpg'),
                  key : 'Summer In Asia with Sacha',
                  countriescount: '4',
                  dayscount: '64',
              },
              {
                  image : require('./place2.jpg'),
                  key : 'Costa Rica Trip!!',
                  countriescount: '4',
                  dayscount: '64',
              },
              {
                  image : require('./place3.jpg'),
                  key : 'India Trip!!',
                  countriescount: '4',
                  dayscount: '64',
              },
              {
                  image : require('./place4.jpg'),
                  key : 'US Trip',
                  countriescount: '4',
                  dayscount: '64',
              },
          ]
        };
    }*/
    /*_renderItem ({item, index}) {
        return (
            <View style={styles.carousel}>
                <Text style={styles.bold}>{ item.name }</Text>
            </View>
        );
    }*/
  render(){
      return(
          <View style={styles.carousel}>
              <Carousel width={100} animate={false} loop={true}>
                  <View style={styles.container}>
                      <Image source={require("./place1.jpg")}/>
                  </View>
                  <View style={styles.container}>
                      <Image source={require("./place2.jpg")}/>
                  </View>
                  <View style={styles.container}>
                      <Image source={require("./place3.jpg")}/>
                  </View>
                  <View style={styles.container}>
                      <Image source={require("./place4.jpg")}/>
                  </View>
              </Carousel>
          </View>
      );
  }
};

const styles = StyleSheet.create({
   carousel:{
       flex:1,
       justifyContent:'space-between',
       flexDirection: 'column',
       flexWrap: 'wrap',
       width: 100,
       height: 200,
   },
    bold:{
        fontWeight: 'bold',
        fontSize: 20,
    },
    slide: {
        width: 10,
        height: 10,
        paddingHorizontal: 20
    },
    slideInnerContainer: {
        width: 5,
        flex: 1
    },
    container: {
        flex: 1,
        borderWidth: 1,
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    child: {
        height: 5,
        width: 5,
        justifyContent: 'center',
    },
    text: {
        fontSize: 10,
        textAlign: 'center',
    },
});




<View style={styles.sliderprops}>
    <Text style={{fontWeight: 'bold', fontSize: 20, color:'#000000'}}>Tracked Journeys</Text>
    <Carousel width={600} animate={false} loop={true} indicatorAtBottom={true} hideIndicators={false} indicatorOffset={565} indicatorSize={30} >
        <View style={styles.container}>
            <Image source={require("./place3.jpg")} style={styles.carouselimage}/>
            <Text style={{bottom: 400, fontWeight: 'bold', fontSize: 30, color: '#000000'}}>Summer in Asia with Sacha</Text>
            <Text style={{bottom: 200,fontSize: 20,color:'#ffffff',left : 30}}>4</Text><Text style={{bottom: 190,fontSize: 20,color:'#ffffff'}}>Countries</Text>
            <Text style={{bottom: 200,fontSize: 20,color:'#ffffff',left: 250}}>64</Text><Text style={{bottom: 190,fontSize: 20,color:'#ffffff',left: 240}}>days</Text>
        </View>
        <View style={styles.container}>
            <Image source={require("./place4.jpg")} style={styles.carouselimage}/>
            <Text style={{bottom: 400, fontWeight: 'bold', fontSize: 30, color: '#000000'}}>Summer in Asia with Sacha</Text>
            <Text style={{bottom: 200,fontSize: 20,color:'#ffffff',left : 30}}>4</Text><Text style={{bottom: 190,fontSize: 20,color:'#ffffff'}}>Countries</Text>
            <Text style={{bottom: 200,fontSize: 20,color:'#ffffff',left: 250}}>64</Text><Text style={{bottom: 190,fontSize: 20,color:'#ffffff',left: 240}}>days</Text>
        </View>
        <View style={styles.container}>
            <Image source={require("./place1.jpg")} style={styles.carouselimage}/>
            <Text style={{bottom: 400, fontWeight: 'bold', fontSize: 30, color: '#000000'}}>Summer in Asia with Sacha</Text>
            <Text style={{bottom: 200,fontSize: 20,color:'#ffffff',left : 30}}>4</Text><Text style={{bottom: 190,fontSize: 20,color:'#ffffff'}}>Countries</Text>
            <Text style={{bottom: 200,fontSize: 20,color:'#ffffff',left: 250}}>64</Text><Text style={{bottom: 190,fontSize: 20,color:'#ffffff',left: 240}}>days</Text>
        </View>
    </Carousel>
</View>
<View style={styles.sliderprops}>
<Text style={{fontWeight: 'bold', fontSize: 20, color:'#000000'}}>Followed Journeys</Text>
<Carousel width={600} animate={false} loop={true} hideIndicators={false} indicatorOffset={565} indicatorSize={30} >
    <View style={styles.container}>
        <Image source={require("./place4.jpg")} style={styles.carouselimage}/>
        <Text style={{bottom: 390, fontWeight: 'bold', fontSize: 30, color: '#000000'}}>Summer in Asia with Sacha</Text>
        <Text style={{bottom: 200,fontSize: 20,color:'#ffffff',left : 30}}>4</Text><Text style={{bottom: 190,fontSize: 20,color:'#ffffff'}}>Countries</Text>
        <Text style={{bottom: 200,fontSize: 20,color:'#ffffff',left: 250}}>64</Text><Text style={{bottom: 190,fontSize: 20,color:'#ffffff',left: 240}}>days</Text>
    </View>
    <View style={styles.container}>
        <Image source={require("./place3.jpg")} style={styles.carouselimage}/>
        <Text style={{bottom: 390, fontWeight: 'bold', fontSize: 30, color: '#000000'}}>Summer in Asia with Sacha</Text>
        <Text style={{bottom: 200,fontSize: 20,color:'#ffffff',left : 30}}>4</Text><Text style={{bottom: 190,fontSize: 20,color:'#ffffff'}}>Countries</Text>
        <Text style={{bottom: 200,fontSize: 20,color:'#ffffff',left: 250}}>64</Text><Text style={{bottom: 190,fontSize: 20,color:'#ffffff',left: 240}}>days</Text>
    </View>
</Carousel>
</View>