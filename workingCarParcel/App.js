import React from 'react';
import { StackNavigator } from 'react-navigation';
import workingCarDetails from './CarDetails/CarDetails';
import AddCarDetails from './AddCarDetails/AddCarDetails';
import NativeTachyons from 'react-native-style-tachyons';
import { StyleSheet, screenWidth } from 'react-native';


export const SimpleApp = StackNavigator({
    CarDetails: { screen: workingCarDetails},
    AddCarDetails: { screen: AddCarDetails},
});

NativeTachyons.build({
    /* REM parameter is optional, default is 16 */
    rem: screenWidth > 340 ? 18 : 16
}, StyleSheet);

//export const { width, height } = Dimensions.get('window')

export default class App extends React.Component {
    render() {
        return <SimpleApp />;
    }
}
