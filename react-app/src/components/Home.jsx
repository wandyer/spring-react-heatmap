import React from 'react'
import axios from 'axios';
import MapContainer from './MapContainer';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            heatmapPositions: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/residence').then(response => {
            const positions = response.data.map(x => {
               return  {lat: x.latitude, lng: x.longitude, weight: x.qtResidents}
            })
            this.setState( {heatmapPositions: positions});
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Heatmap</h1>
                <div style={{position: 'relative', 'paddingBottom': '56.25%'}}>
                    <MapContainer heatmapPositions={this.state.heatmapPositions}/>
                </div>
            </div>
        )
    }
}
