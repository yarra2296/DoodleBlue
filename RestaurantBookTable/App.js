import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import BookTable from './BookTable';
import ViewTable from './ViewTable';
import SuccessfulReg from './SuccessfulReg';

export const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Book: { screen: BookTable},
    View: { screen: ViewTable},
    Successful: {screen: SuccessfulReg}
});

//export const { width, height } = Dimensions.get('window')

export default class App extends React.Component {
    render() {
        return <SimpleApp />;
    }
}
