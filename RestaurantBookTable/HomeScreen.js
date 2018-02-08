import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import BookTable from "./BookTable";

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title:'      Welcome To KartBites Restaurant          '
    };
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            Booking: [],
        };
    };
    onSubmit(value){
        console.log('value in parent', value);
        this.state.Booking.push(value),
        this.setState({
            Booking: this.state.Booking,
        })
        console.log(this.state.Booking);
    };

    render() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Image source={require('./restaurant1.png')} style={styles.image}/>
                <View style={styles.button}>
                    <View style={{paddingBottom: 30, bottom: 400, left: 140}}>
                    <Button title='Book Table' onPress={()=>navigate('Book',{onSubmit: this.onSubmit})}/>
                    </View>
                    <View style={{bottom: 400, left: 140}}>
                        <Button title='View Bookings' onPress={()=>navigate('View',{value: this.state.Booking})}/>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    button: {
        width: 150,
    },
    image:{

    }
});
