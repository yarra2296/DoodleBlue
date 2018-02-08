import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import Map from './scenes/Map'

import Points from './assets/Points.json';
import MapView from 'react-native-maps';

//const mapView = this.map.getMapRef()

export default class App extends React.Component {

    add(){
        console.log('hi');
    }

    render() {
        return (
            <View
                style={{
                    flex: 1
                }}
            >
                <View
                    style={{
                        height: 80,
                        backgroundColor: "blue",
                    }}
                >
                    <Text
                        style={{
                            alignSelf: 'center',
                            textAlign: "center",
                            height: 50,
                            marginTop: 35,
                            color: "gold"
                        }}
                    >
                        MAP CLUSTERING(Zoom IN and Zoom OUT to see clustering)
                    </Text>
                </View>
                <Map
                    {
                        ...{
                            mapPoints: Points
                        }
                    }
                >
                    {/*<MapView.Polyline
                        coordinates={[
                            { latitude: 13.061912, longitude: 80.246771 }, //Location 1
                            { latitude: 13.052117, longitude: 80.224818},  //Points in Between 1 & 2
                            { latitude: 13.058581, longitude: 80.264572 },  //Points in Between 1 & 2
                            { latitude: 13.049953, longitude: 80.282403 },  //Location 2
                            { latitude: 11.030314, longitude: 77.039208},  //Points in Between 2 & 3
                            { latitude: 11.323854, longitude: 76.913025},  //Points in Between
                            { latitude: 11.009685, longitude: 76.959226 },  //Location 3 //Points in Between 3 & 4
                            { latitude: 16.300432, longitude: 80.443040 },  //Location 4
                            { latitude: 16.281695, longitude: 80.455154}, // Points in Between 4 & 5
                            { latitude: 16.312504, longitude: 80.423319},  //Points in Between 4 & 5
                            { latitude: 16.333253, longitude: 80.438000 },  //Location 5
                            { latitude: 16.501175, longitude: 80.643581},  // Location 6
                            { latitude: 16.518470, longitude: 80.619523},  //Points Between 6 & 7
                            { latitude: 16.518470, longitude: 80.619523}, //Location 7
                            { latitude: 15.505723, longitude: 80.049922},
                            { latitude: 15.508784, longitude: 80.047407},
                            { latitude: 15.507025, longitude: 80.039531}
                        ]}
                        strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                        strokeColors={[
                            '#7F0000',
                            '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                            '#B24112',
                            '#E5845C',
                            '#238C23',
                            '#7F0000'
                        ]}
                        strokeWidth={6}
                    />
                    ref={r => (this.map = r)}*/}
                </Map>
                <TouchableHighlight underlayColor='white' onPress={this.add()}>
                <Text
                    style={{
                        alignSelf: "center",
                        textAlign: "center",
                        height: 50,
                        marginTop: 35,
                        color: "grey"
                    }}
                >
                   <Text style={{fontWeight:'bold', fontSize: 15}}>+(ADD LOCATIONS)</Text>
                    <Text style={{fontWeight:'bold', fontSize: 15}}>                         -(REMOVE LOCATIONS)</Text>
                </Text>
                </TouchableHighlight>
            </View>
        );
    }
}