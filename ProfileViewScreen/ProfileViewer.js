import React from 'react';
import {TabBarBottom} from "react-navigation"
import { StyleSheet, Text, View, Image, Button , ScrollView } from 'react-native';
import FollowScreen from './FollowScreen';
import ProfileData from './ProfileData';
/*import Slider from './CarouselCard';*/
/*import Carousel from 'react-native-carousel';*/
import Carousel from 'react-native-snap-carousel'; // 3.4.0
import { sliderWidth, sliderItemWidth } from './styles';
import Card from './components/cards';

export default class ProfileViewer extends React.Component{
    static navigationOptions = ({ navigation }) => ({
        title:`${navigation.state.params.user}             `,
    });
    constructor(props){
        super(props);
        this.state={
            isTravelling: true,
            isFollowing: true,
            data:[
                {
                    title: '1',
                    image: require('./place1.jpg')
                },
                {
                    title: '2',
                    image: require('./place2.jpg')
                },
                {
                    title: '3',
                    image: require('./place3.jpg')
                },
                {
                    title: '4',
                    image: require('./place4.jpg')
                },
                {
                    title: '5',
                    image: require('./place5.jpg')
                },
            ],
        };
    }

    travellingInfo(){
      this.setState({
          isTravelling: false,
      });
    };
    onFollow(){
            this.setState({
                isFollowing: false,
            });
    };
    onunFollow(){
      this.setState({
          isFollowing: true,
      })
    };
    opendata(){

    };
    renderListComponent = ({ item }) => (
        <Card title={item.title} image={item.image} />
    );
    render(){
        const { params } = this.props.navigation.state;
        return(
            <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={{flex: 1}}>
                <View style={styles.imagecontainer}>
                    <View style={styles.followerscontainer}>
                        <Text style={styles.follower}>{params.followers}</Text>
                    <Text style={styles.textcolor}>followers</Text>
                    </View>
                    <Image source={require('./profile1.jpg')} style={styles.image}/>
                    <View style={styles.followingcontainer}>
                    <Text style={styles.follower}>{params.following}</Text>
                    <Text style={styles.textcolor}>following</Text>
                </View>
                </View>
                <View style={styles.travellingstate}>{this.state.isTravelling ? <View><Text style={styles.travellinginfotext}>{params.TravellingInfo}</Text></View> : null}
                </View>
                <View style={styles.status}>
                <Text style={styles.statustext}>"I love to meet new people and embrace the unknown while I travel!"</Text>
                </View>
                <View style={styles.buttoncontainer}>
                <View style={styles.Followbutton}>
                    {this.state.isFollowing ?  <Button title="Following" color="#000000" onPress={()=>this.onFollow()}/>: <Button title="Follow" onPress={()=>this.onunFollow()}/>}
                </View>
                </View>
                <View style={styles.pointcontainer}>
                    <ProfileData value= "4" name="countries"/><ProfileData value="64" name="days"/><ProfileData value="7280m" name="disatnce"/><ProfileData value="473" name="photos"/>
                </View>
                <View style={styles.containerwork}>
                    <View style={{marginBottom: 15, left: 10}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20, color: '#000000'}}>Tracked Journeys</Text>
                    </View>
                    <Carousel
                        data={this.state.data}
                        renderItem={this.renderListComponent}
                        sliderWidth={sliderWidth}
                        itemWidth={sliderItemWidth}
                        activeSlideAlignment={'center'}
                        inactiveSlideScale={1}
                        inactiveSlideOpacity={1}
                        autoplay={true}
                        loop={true}
                    />
                </View>
            </View>
                <View style={styles.containerwork}>
                    <View style={{marginBottom: 15, left: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20, color: '#000000'}}>Followed Journeys</Text>
                    </View>
                    <Carousel
                        data={this.state.data}
                        renderItem={this.renderListComponent}
                        sliderWidth={sliderWidth}
                        itemWidth={sliderItemWidth}
                        activeSlideAlignment={'center'}
                        inactiveSlideScale={1}
                        inactiveSlideOpacity={1}
                        autoplay={true}
                        loop={true}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    containerwork: {
        flex: 1,
        paddingTop: 56,
        backgroundColor: '#ecf0f1',
    },
    imagecontainer: {
        flex:1,
        padding: 30,
        flexWrap:'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    image:{
        borderRadius: 100,
        borderWidth: 3,
        width: 120,
        height: 120,
    },
    followerscontainer:{
        justifyContent:'center',
        alignItems: 'center',
        paddingRight: 50,
    },
    followingcontainer:{
        justifyContent:'center',
        alignItems: 'center',
        paddingLeft: 40,
    },
    textcolor:{
        color:'#616161'
    },
    follower:{
        fontWeight: 'bold',
        fontSize: 20,
        color:'#000000'
    },
    travellingstate:{
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'center',
    },
    travellinginfotext:{
        color:"red",
        fontSize: 10
    },
    status:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft: 70,
        marginRight: 70,
        marginTop: 10,
        marginBottom:5
    },
    statustext:{
        textAlign: 'center',
        color:'#616161'
    },
    buttoncontainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop: 20,
    },
    Followbutton:{
        width: 110,
    },
    pointcontainer:{
        backgroundColor: '#68f2ff',
        borderWidth: 1,
        marginTop: 30,
        paddingLeft: 40,
        paddingTop: 10,
        paddingBottom: 15,
        flexDirection:'row'
    },
    circle:{
        borderRadius: 100,
        padding: 5,
        borderWidth: 1,
        height: 40,
        width: 40,
        backgroundColor:'#ffffff',
        justifyContent:'center',
        alignItems:'center',
        left: 10
    },
    sliderprops:{
        justifyContent: 'center',
        width: 600,
        height: 600,
    },
    carousel:{
        flex:1,
        justifyContent:'space-between',
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: 100,
        height: 600,
    },
    container: {
        flex: 1,
        width: 600,
        height: 200,
        backgroundColor: 'white',
    },
    carouselimage:{
        flex: 1,
        resizeMode:'stretch',
    }
});
