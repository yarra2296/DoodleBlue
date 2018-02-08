import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import NewsViewer from './NewsViewer';
import NewsScreen from './NewsScreen';
import Webview from './WebView';

export const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    News: { screen: NewsViewer},
    NewsScreen: { screen: NewsScreen},
    WebView: { screen: Webview},
});

//export const { width, height } = Dimensions.get('window')

export default class App extends React.Component {
    render() {
        return <SimpleApp />;
    }
}
