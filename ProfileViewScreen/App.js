import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import ProfileViewer from './ProfileViewer';

export const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileViewer},
});

//export const { width, height } = Dimensions.get('window')

export default class App extends React.Component {
    render() {
        return <SimpleApp />;
    }
}
