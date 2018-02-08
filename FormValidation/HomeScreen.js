import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title:'Welcome           '
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <View style={styles.button}>
                    <Button title='SIGNUP' onPress={()=>navigate('SignUp')}/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    button: {
        width: 150,
    }
});
