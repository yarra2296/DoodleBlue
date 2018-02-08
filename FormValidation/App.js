import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import SignUpScreen from './SignUpScreen';

export const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    SignUp: { screen: SignUpScreen},
});

//export const { width, height } = Dimensions.get('window')

export default class App extends React.Component {
    render() {
        return <SimpleApp />;
    }
}
