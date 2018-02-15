import React from 'react';
import { StackNavigator } from 'react-navigation';
import Promate from './Promate/Promate';
import Cart from './Cart/Cart';
import ProductView from './ProductView/ProductView'

export const SimpleApp = StackNavigator({
    Promate: {screen: Promate},
    cart: {screen: Cart},
    productView: {screen: ProductView}
},
{
    headerMode: 'none'
},
);

export default class App extends React.Component {
    render() {
        return <SimpleApp />;
    }
}
