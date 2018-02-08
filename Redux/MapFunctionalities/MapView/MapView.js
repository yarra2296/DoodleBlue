import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import SuperCluster from 'supercluster';
import geoViewport from '@mapbox/geo-viewport';
import MapView from 'react-native-maps';
import CustomMarker from './CustomMarker';

const region = {
    latitude: 18.43939,
    longitude: 43.934334
};
const divideBy =7;
const height = 650;
const width = 650;

class MapViewer extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `                                     MapView        `,
    });
    constructor(props){
        super(props);
        this.state={
            data : [
                {
                    latlong: {
                        latitude: 13.061912,
                        longitude: 80.246771,
                        latitudeDelta: 0.5,
                        longitudeDelta: 0.5},
                    address:{
                        locality: "DoodleBlue Innovations private Limited",
                        city: "chennai",
                        state: "Tamilnadu",
                        country: "INDIA"
                    },
                    image: "./loc1.png",
                    title: "First Place",

                },
                {
                    latlong: {
                        latitude: 13.052117,
                        longitude: 80.224818,
                        latitudeDelta: 0.5,
                        longitudeDelta: 0.5},
                    address:{
                        locality: "FrontLine Appartments",
                        city: "chennai",
                        state: "Tamilnadu",
                        country: "INDIA"
                    },
                    image: "./loc2.png",
                    title: "Second Place"
                },
                {
                    latlong: {
                        latitude: 13.058581,
                        longitude: 80.264572,
                        latitudeDelta: 0.5,
                        longitudeDelta: 0.5},
                    address:{
                        locality: "Express Avenue",
                        city: "chennai",
                        state: "Tamilnadu",
                        country: "INDIA"
                    },
                    image: "./loc3.png",
                    title: "Third Place"
                },
                {
                    latlong: {
                        latitude: 13.049953,
                        longitude: 80.282403,
                        latitudeDelta: 0.5,
                        longitudeDelta: 0.5},
                    address:{
                        locality: "Marina Beach",
                        city: "chennai",
                        state: "Tamilnadu",
                        country: "INDIA"
                    },
                    image: "./loc4.png",
                    title: "Fourth Place"
                },
                {
                    latlong: {
                        latitude: 11.030314,
                        longitude: 77.039208,
                        latitudeDelta: 0.5,
                        longitudeDelta: 0.5},
                    address:{
                        locality: "Coimbatore International Airport",
                        city: "coimbatore",
                        state: "Tamilnadu",
                        country: "INDIA"
                    },
                    image: "./loc5.png",
                    title: "Fifth Place"
                },
                {
                    latlong: {
                        latitude: 11.323854,
                        longitude: 76.913025,
                        latitudeDelta: 0.5,
                        longitudeDelta: 0.5},
                    address:{
                        locality: "Black Thunder",
                        city: "coimbatore",
                        state: "Tamilnadu",
                        country: "INDIA"
                    },
                    image: "./loc6.png",
                    title: "Sixth Place"
                },
                {
                    latlong: {
                        latitude: 11.009685,
                        longitude: 76.959226,
                        latitudeDelta: 0.5,
                        longitudeDelta: 0.5},
                    address:{
                        locality: "BrookeFields Mall",
                        city: "coimbatore",
                        state: "Tamilnadu",
                        country: "INDIA"
                    },
                    image: "./loc7.png",
                    title: "Seventh Place"
                },
                {
                    latlong: {
                        latitude: 12.924623,
                        longitude: 79.134781,
                        latitudeDelta: 0.5,
                        longitudeDelta: 0.5},
                    address:{
                        locality: "Vellore CMC",
                        city: "vellore",
                        state: "Tamilnadu",
                        country: "INDIA"
                    },
                    image: "./loc8.png",
                    title: "Eigth Place"
                },
                {
                    latlong: {
                        latitude: 12.971780,
                        longitude: 79.158904,
                        latitudeDelta: 0.5,
                        longitudeDelta: 0.5},
                    address:{
                        locality: "Vellore VIT",
                        city: "vellore",
                        state: "Tamilnadu",
                        country: "INDIA"
                    },
                    image: "./loc9.png",
                    title: "Nineth Place"
                },
                {
                    latlong: {
                        latitude: 12.874147,
                        longitude: 79.088352,
                        latitudeDelta: 0.5,
                        longitudeDelta: 0.5},
                    address:{
                        locality: "Vellore Golden Temple",
                        city: "vellore",
                        state: "Tamilnadu",
                        country: "INDIA"
                    },
                    image: "./loc10.png",
                    title: "Tenth Place"
                },
                {
                    latlong: {
                        latitude: 16.300432,
                        longitude: 80.443040,
                        latitudeDelta: 0.5,
                        longitudeDelta: 0.5},
                    address:{
                        locality: "Guntur Railway Station",
                        city: "guntur",
                        state: "Andhrapradesh",
                        country: "INDIA"
                    },
                    image: "./loc11.png",
                    title: "Eleventh Place"
                },
                {
                    latlong: {
                        latitude: 16.281695,
                        longitude: 80.455154,
                        latitudeDelta: 0.5,
                        longitudeDelta: 0.5},
                    address:{
                        locality: "Anjeneya Swamy Temple",
                        city: "guntur",
                        state: "Andhrapradesh",
                        country: "INDIA"
                    },
                    image: "./loc12.png",
                    title: "Twelveth Place"
                },
                {
                    latlong: {
                        latitude: 16.312504,
                        longitude: 80.423319,
                        latitudeDelta: 0.5,
                        longitudeDelta: 0.5},
                    address:{
                        locality: "Ntr Stadium Guntur",
                        city: "guntur",
                        state: "Andhrapradesh",
                        country: "INDIA"
                    },
                    image: "./loc13.png",
                    title: "Thirteen Place"
                },
                {
                    latlong: {
                        latitude: 16.333253,
                        longitude: 80.438000,
                        latitudeDelta: 0.5,
                        longitudeDelta: 0.5},
                    address:{
                        locality: "Cine Square Guntur",
                        city: "guntur",
                        state: "Andhrapradesh",
                        country: "INDIA"
                    },
                    image: "./loc14.png",
                    title: "Fourteen Place"
                },
                {
                    latlong: {
                        latitude: 16.501175,
                        longitude: 80.643581,
                        latitudeDelta: 0.5,
                        longitudeDelta: 0.5},
                    address:{
                        locality: "PVR Mall",
                        city: "vijayawada",
                        state: "Andhrapradesh",
                        country: "INDIA"
                    },
                    image: "./loc15.png",
                    title: "Fifteen Place"
                },
                {
                    latlong: {
                        latitude: 16.518470,
                        longitude: 80.619523,
                        latitudeDelta: 0.5,
                        longitudeDelta: 0.5},
                    address:{
                        locality: "Vijayawada Railway Station",
                        city: "vijayawada",
                        state: "Andhrapradesh",
                        country: "INDIA"
                    },
                    image: "./loc16.png",
                    title: "Sixteen Place"
                },
                {
                    latlong: {
                        latitude: 16.515430,
                        longitude: 80.605970,
                        latitudeDelta: 0.5,
                        longitudeDelta: 0.5},
                    address:{
                        locality: "Kanaka Durgamma Temple Vijayawada",
                        city: "vijayawada",
                        state: "Andhrapradesh",
                        country: "INDIA"
                    },
                    image: "./loc17.png",
                    title: "Seventeen Place"
                },
                {
                    latlong: {
                        latitude: 15.505723,
                        longitude: 80.049922,
                        latitudeDelta: 0.5,
                        longitudeDelta: 0.5},
                    address:{
                        locality: "Ongole",
                        city: "ongole",
                        state: "Andhrapradesh",
                        country: "INDIA"
                    },
                    image: "./loc18.png",
                    title: "Eighteen Place"
                },
                {
                    latlong: {
                        latitude: 15.508784,
                        longitude: 80.047407,
                        latitudeDelta: 0.5,
                        longitudeDelta: 0.5},
                    address:{
                        locality: "Ongole Ntr Statue",
                        city: "ongole",
                        state: "Andhrapradesh",
                        country: "INDIA"
                    },
                    image: "./loc19.png",
                    title: "Nighenteen Place"
                },
                {
                    latlong: {
                        latitude: 15.507025,
                        longitude: 80.039531,
                        latitudeDelta: 0.5,
                        longitudeDelta: 0.5},
                    address:{
                        locality: "Ongole Gandhi Park",
                        city: "ongole",
                        state: "Andhrapradesh",
                        country: "INDIA"
                    },
                    image: "./loc20.png",
                    title: "Twenty Place"
                },
            ],
            clustering: '',
            markers: [],
            otherChildren: [],
            numberOfMarkers: 0,
            region: region,
            previousRegion: region,
        }
        this.superCluster = {};
    }

    componentWillMount() {
        this.createMarkersOnMap();
    }

    componentWillReceiveProps() {
        this.createMarkersOnMap();
    }

    createMarkersOnMap() {
        this.getZoomLevel();
    }

    CalculateBBox=()=>{
        return[
        this.state.data.latlong.latitude - 0.2,
        this.state.data.latlong.longitude - 0.2,
        this.state.data.latlong.latitude + 0.2,
        this.state.data.latlong.longitude + 0.2,
        ]
    }

    getZoomLevel(bbox){
        return geoViewport.viewport(bbox, [height, width]);
    }

    calculateClustersForMap(){
        const markersOnMap = [];

        if (!GLOBAL[this.superCluster]) {
            throw new Error('SuperCluster not set!');
        }

        if (this.state.clustering) {
            let bbox = this.CalculateBBox();
            let zoom;
            if (this.state.region.longitudeDelta >= 40) {
                zoom = 0;
            } else {
                zoom = this.getZoomLevel(bbox).zoom || 0;
            }
            if (isNaN(zoom)) {
                zoom = 0;
            }
            let cluster = GLOBAL[this.superCluster].getClusters([bbox[0], bbox[1], bbox[2], bbox[3]], zoom);

            for(let i = 0; i < cluster.length; i++){
                markersOnMap.push(
                    <CustomMarker
                        key={i}
                        onClusterPress={this.props.onClusterPress}
                        customClusterMarkerDesign={this.props.customClusterMarkerDesign}
                        {...cluster[i]}
                        getClusterColor={this.props.setClusterColor}
                        superCluster={this.superCluster}
                    >
                        {cluster[i].properties.point_count === 0 ?  cluster[i].item : null}
                    </CustomMarker>
                );
            }
        } else {
            for (let i = 0; i < this.state.markers.length; i++) {
                markersOnMap.push(
                    <CustomMarker
                        key={i}
                        {...this.state.markers[i]}
                        getClusterColor={this.props.setClusterColor}
                    >
                        {this.state.markers[i].properties.point_count === 0 ?  this.state.markers[i].item : null}
                    </CustomMarker>
                );
            }
        }
        this.setState({ markersOnMap });
    }

    onRegionChangeComplete(region) {
        if (region.longitudeDelta <= 80 && GLOBAL[this.superCluster]){
            if ((Math.abs(region.latitudeDelta - this.state.previousRegion.latitudeDelta) > this.state.previousRegion.latitudeDelta / divideBy)||
                (Math.abs(region.longitude - this.state.previousRegion.longitude) >= this.state.previousRegion.longitudeDelta/4) ||
                (Math.abs(region.latitude - this.state.previousRegion.latitude) >= this.state.previousRegion.latitudeDelta/4)) {
                this.calculateClustersForMap();
                this.setState({
                    region,
                    previousRegion: region
                });
            }
        }
    }

    handleRegionChangeComplete = (region) => {
        if (this.onRegionChangeComplete) {
            this.onRegionChangeComplete(region);
        }
        this.onRegionChangeComplete(region);
    }


    render(){
        GLOBAL.clusterColor = this.clusterColor;
        GLOBAL.clusterTextColor = this.clusterTextColor;
        GLOBAL.clusterTextSize = this.clusterTextSize;
        GLOBAL.clusterBorderColor = this.clusterBorderColor;
        GLOBAL.clusterBorderWidth = this.clusterBorderWidth;

        return(
            <View style ={styles.container}>
                <MapView
                    initialRegion={{latitude: 13.061912 , longitude: 80.246771, latitudeDelta: 0, longitudeDelta: 0}}
                    style={styles.map}
                    fitToElements={true}
                    maxZoomLevel={100}
                    loadingEnabled={true}
                    zoomControlEnabled={true}
                    moveOnMarkerPress={false}
                    onRegionChangeComplete={this.handleRegionChangeComplete}
                >
                    {this.state.data.map(marker => (
                        <MapView.Marker key={marker.title}
                                        coordinate={marker.latlong}
                                        title={marker.title}
                                        pinColor= 'aqua'
                        />
                           /*<View style={styles.radius}>
                                <View style={styles.markerStyle}>
                                </View>
                            </View>*/
                        ))}
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 650,
        width: 650,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    radius:{
        height:15,
        width:15,
        backgroundColor:'#81BD26',
        overflow:'hidden',
        borderRadius:50/2,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    markerStyle:{
        height:14,
        width:14,
        backgroundColor:'#81BD26',
        alignItems:'center',
        justifyContent:'center'
    }
});

export default MapViewer
