import React from 'react';
import {GoogleApiWrapper, HeatMap, InfoWindow, Map, Marker} from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
};

export class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,  // Hides or shows the InfoWindow
            activeMarker: {},          // Shows the active marker upon click
            selectedPlace: {},          // Shows the InfoWindow to the selected place upon a marker,
            markers: [
                {
                    title: '',
                    name: '',
                    position: {lat: '', lng: ''}
                }
            ],
            clickedMap: '',
            isForm: !this.props.heatmapPositions,
        };
        this.mapClicked = this.mapClicked.bind(this);
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    mapClicked(mapProps, map, clickEvent) {
        const {latLng} = clickEvent;
        const position = {
            lat: latLng.lat(),
            lng: latLng.lng()
        };

        this.setState(() => {
            return {
                markers: [
                    {
                        title: "",
                        name: "Residence",
                        position: {lat: position.lat, lng: position.lng}
                    }
                ]
            };
        });

        this.props.onClickedMap(position);
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={17}
                clickableIcons={true}
                onClick={this.state.isForm ? this.mapClicked : undefined}
                style={mapStyles}>
                {
                    this.props.heatmapPositions !== undefined ? <HeatMap
                        opacity={10}
                        positions={this.props.heatmapPositions}
                        radius={20}
                    /> : null
                }
                {this.state.markers.map((marker, index) => (
                    <Marker
                        key={index}
                        title={marker.title}
                        name={marker.name}
                        position={marker.position}
                        onClick={this.onMarkerClick}
                    />
                ))}
                <InfoWindow google={this.props.google}
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}>
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'API_KEY',
    libraries: ['visualization']
})(MapContainer);
