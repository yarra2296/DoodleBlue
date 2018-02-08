import React from 'react';
import { StackNavigator } from 'react-navigation';
import SearchScreen from './SearchScreen/SearchScreen';

export const SimpleApp = StackNavigator({
    SearchScreen: {screen: SearchScreen},
},
{
    headerMode: 'none'
}
);

export default class App extends React.Component {
    render() {
        return <SimpleApp />;
    }
}
