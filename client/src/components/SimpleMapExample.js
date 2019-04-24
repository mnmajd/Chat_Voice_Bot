import React, {Component} from 'react'
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {geolocation} from "../store/actions/ClaimActions";
import connect from "react-redux/es/connect/connect";



delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
//export const SimpleMapExample = (props) => {
 class SimpleMapExample extends Component {

     componentWillMount() {
         const {dispatch } = this.props;
         dispatch(geolocation());
     }
     constructor(props) {
         super(props);
         this.state = {
             lat:'',
             lng:'',
             zoom:13
         };
     }


     state = {
         zoom: 13,
     }
    render() {

        const longitude ='';
        const latitude ='';
        const name ='';
        var position=[];
        this.props.Location.map(location =>(
            // this.longitude=location.longitude,
            // this.latitude=location.latitude,
            // this.name=location.name
            position.push(location.longitude,location.latitude)

        ))

        //const position = [this.longitude, this.latitude];
        return (



        this.props.Location.map(location => (
        this.state.lat = location.latitude, this.state.lng=location.longitude,
        <Map center={[this.state.lat ,this.state.lng]} zoom={this.state.zoom} style={{height: '350px'}}>
            <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            />
            <Marker position={[this.state.lat,this.state.lng]}>
                <Popup>
                    {location.name}
                </Popup>
            </Marker>
        </Map>
        ))

        )
    }



    // state = {
    //     lat: 51.505,
    //     lng: -0.09,
    //     zoom: 13,
    // }
    //
    // render() {
    //
    //     const position = [this.state.lat, this.state.lng];
    //
    //     const LeafletMarkers = markers.map(marker => (
    //         <Marker position={marker.latlng} key={`marker_${marker.name}`}>
    //             <Popup>
    //                 <span>{marker.name}</span>
    //             </Popup>
    //         </Marker>
    //     ))
    //
    //     return (
    //         <div className="map">
    //             <Map center={mapConfig.center} zoom={mapConfig.zoom} className="map__reactleaflet">
    //                 <TileLayer
    //                     url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
    //                     attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
    //                 />
    //                 {LeafletMarkers}
    //             </Map>
    //         </div>
    //     )
    // }

}

const mapStateToProps = (state) =>{
    const { Location } = state.claimreducer;

    return {
        Location
    };
}
export default connect(
    mapStateToProps,
    null
)(SimpleMapExample);
