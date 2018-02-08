import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import MapView from 'react-native-maps';
const offset_map_small = 0.0001;

export default class PolyLine extends React.Component {

    state = {
        colorByCategory: {
            A: "violet",
            B: "yellow",
            C: "blue",
            D: "pink",
            E: "green",
            "Cluster": "red",
            "master":"aqua",
        }
    }

    onPress() {
        if (!this.props.feature.properties.featureclass) {
            const { region } = this.props;
            const category = this.props.feature.properties.featureclass || "Cluster";
            const angle = region.longitudeDelta || 0.0421/1.2;
            const result =  Math.round(Math.log(360 / angle) / Math.LN2);
            const markers = this.props.clusters["places"].getChildren(this.props.feature.properties.cluster_id, result);
            const newRegion = [];
            const smallZoom = 0.05;

            markers.map(function (element) {
                newRegion.push({
                    latitude: offset_map_small + element.geometry.coordinates[1] - region.latitudeDelta * smallZoom,
                    longitude: offset_map_small + element.geometry.coordinates[0] - region.longitudeDelta * smallZoom,
                });

                newRegion.push({
                    latitude: offset_map_small + element.geometry.coordinates[1],
                    longitude: offset_map_small + element.geometry.coordinates[0],
                });

                newRegion.push({
                    latitude: offset_map_small + element.geometry.coordinates[1] + region.latitudeDelta * smallZoom,
                    longitude: offset_map_small + element.geometry.coordinates[0] + region.longitudeDelta * smallZoom,
                });
            });

            const options = {
                isCluster: true,
                region: newRegion,
            };

            if (this.props.onPress) {
                this.props.onPress({
                    type: category,
                    feature: this.props.feature,
                    options: options,
                });
            }
        }
    }

    render() {
       /*const latitude = this.props.feature.geometry.coordinates[1];
        const longitude = this.props.feature.geometry.coordinates[0];
        const category = this.props.feature.properties.featureclass || "Cluster";
        const text = (category  == "Cluster" ? this.props.feature.properties.point_count : category);
        const size = 37;*/
        return (
                <MapView.Polyline
                    coordinate={
                        {   latitude: this.props.feature.geometry.coordinates[1],
                            longitude: this.props.feature.geometry.coordinates[0] }
                    }
                    strokeColor='#FF455B'
                    strokeWidth={2}
                    strokePattern='dash'
                    strokeType='dash'
                    gap={20}
                    patternType='dash'
                    lineCap="round"
                    lineJoin="round"
                    lineDashPhase={3}
                    lineDashPattern={[1-2-3]}
                    onPress={this.onPress.bind(this)}
                />

        );
    }
}
