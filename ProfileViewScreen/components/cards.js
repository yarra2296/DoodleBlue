import React from 'react';
import { View, Text } from 'react-native';
import { sliderItemWidth, sliderItemHorizontalMargin, slideWidth } from '../styles';
import {Image} from 'react-native';

const Card = ({ title, image }) => (
    <View
        style={{
            width: sliderItemWidth,
            height: 300,
            paddingHorizontal: sliderItemHorizontalMargin,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
        }}
    >
        <View
            style={{
                width: slideWidth,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
            }}
        >
            <Image source = {image} style={{width: 300,height: 400}}/>
            <Text style={{ color: 'white' }}>{title}</Text>
        </View>
    </View>
);

export default Card;
