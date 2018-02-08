import React from 'react';
import {
  Text,
  View 
} from 'react-native';

import MapView from 'react-native-maps';
import supercluster from 'supercluster';
import Promise from 'bluebird';

import Marker from './components/Marker';
import PolyLine from './components/PolyLine';

const DoodleBlue = {
    latitude: 13.061912,
    longitude: 80.246771,
    latitudeDelta: 100,
    longitudeDelta: 100,
}


export default class Map extends React.Component {

  state = {
    mapLock: false,
    region: DoodleBlue,
  }


  setRegion(region) {
    if(Array.isArray(region)) {
      region.map(function(element) { 
        if (element.hasOwnProperty("latitudeDelta") && element.hasOwnProperty("longitudeDelta")) {
          region = element;
          return;
        }
      })
    }
    if (!Array.isArray(region)) {
      this.setState({
        region: region
      });
    } else {
      console.log("We can't set the region as an array");
    }
  }


  componentDidMount() {
    this.componentWillReceiveProps(this.props);
  }


  createMarkersForLocations(props) {
    return {
      places: props.mapPoints
    };
  }


  componentWillReceiveProps(nextProps) {
    const markers = this.createMarkersForLocations(nextProps);
    if (markers && Object.keys(markers)) {
      const clusters = {};
      this.setState({
        mapLock: true
      });
      Object.keys(markers).forEach(categoryKey => {
        // Recalculate cluster trees
        const cluster = supercluster({
          radius: 60,
          maxZoom: 16,
        });

        cluster.load(markers[categoryKey]);

        clusters[categoryKey] = cluster;
      });

      this.setState({
        clusters,
        mapLock: false
      });
    }
  }


  getZoomLevel(region = this.state.region) {
    const angle = region.longitudeDelta;
    return Math.round(Math.log(360 / angle) / Math.LN2);
  }


  createMarkersForRegion_Places() {
    const padding = 0.25;
    if (this.state.clusters && this.state.clusters["places"]) {
      const markers = this.state.clusters["places"].getClusters([
        this.state.region.longitude - (this.state.region.longitudeDelta * (0.5 + padding)),
        this.state.region.latitude - (this.state.region.latitudeDelta * (0.5 + padding)),
        this.state.region.longitude + (this.state.region.longitudeDelta * (0.5 + padding)),
        this.state.region.latitude + (this.state.region.latitudeDelta * (0.5 + padding)),
      ], this.getZoomLevel());
      const returnArray = [];
      const { clusters, region } = this.state;
      const onPressMaker = this.onPressMaker.bind(this);
      markers.map(function(element ) {
        returnArray.push(
            <Marker
              key={element.properties._id || element.properties.cluster_id}
              onPress={onPressMaker}
              feature={element}
              clusters={clusters}
              region={region}
            />
        );
      });
      return returnArray;
    }
    return [];
  }

  onPressMaker(data) {
    if (data.options.isCluster) {
      if (data.options.region.length > 0) {
        this.goToRegion(data.options.region, 100)
      } else {
        console.log("We can't move to an empty region");
      }
    } else {

    }
    return;
  }


  goToRegion(region, padding) {
    this.map.fitToCoordinates(region, {
      edgePadding: { top: padding, right: padding, bottom: padding, left: padding },
      animated: true,
    });
  }

  onChangeRegionComplete(region) {
    this.setRegion(region);
    this.setState({
      moving: false,
    });
  }


  onChangeRegion(region) {
    this.setState({
      moving: true,
    });
  }



  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <MapView
          ref={ref => { this.map = ref; }}
          style={{
            flex: 1,
          }}
          initialRegion={DoodleBlue}
          onRegionChange={this.onChangeRegion.bind(this)}
          onRegionChangeComplete={this.onChangeRegionComplete.bind(this)}
          >
           {/* {this.state.region.geometry.map(regions=>(<MapView.Polyline
                coordinates={regions}
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
            />))}*/}
            <MapView.Polyline
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
          />
          {
            this.createMarkersForRegion_Places()
          }
         </MapView>
      </View>
    );
  }
}
