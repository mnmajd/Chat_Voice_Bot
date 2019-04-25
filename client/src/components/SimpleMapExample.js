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

var icon = L.icon({
    iconUrl: require('../assets/img/redlocation.png'),
    iconRetinaUrl: require('../assets/img/redlocation.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
});

//export const SimpleMapExample = (props) => {
class SimpleMapExample extends Component {

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(geolocation());
    }

    constructor(props) {
        super(props);
        this.state = {
            lat: '',
            lng: '',
            latUser: '',
            lngUser: '',
            zoom: 13
        };
    }


    state = {
        zoom: 13,
    }

    render() {
        return (


            <Map center={[36.858183, 10.186026]} zoom={this.state.zoom} style={{height: '350px'}}>
                <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                />

                <Marker position={[36.858183, 10.186026]} icon={icon} >
                    <Popup>
                        This is you
                    </Popup>
                </Marker>

                {this.props.Location.map(location => (
                    this.state.lat = location.latitude, this.state.lng = location.longitude, this.state.latUser = location.latitudeUser, this.state.lngUser = location.longitudeUser,
                        <Marker position={[this.state.lat, this.state.lng]}>
                            <Popup>
                                {location.name}
                            </Popup>
                        </Marker>

                ))}


            </Map>


        )
    }

}

const mapStateToProps = (state) => {
    const {Location} = state.claimreducer;

    return {
        Location
    };
}
export default connect(
    mapStateToProps,
    null
)(SimpleMapExample);