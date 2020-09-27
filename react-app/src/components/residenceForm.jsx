import React from 'react';
import axios from "axios";

class ResidenceForm extends React.Component {
    constructor(props) {
        super(props);

        // setting up state
        this.state = {
            cep: '',
            number: '',
            qtResidents: '',
            latitude: '',
            longitude: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const postData = {
            "cep": this.state.cep,
            "number": this.state.number,
            "longitude": this.state.longitude,
            "latitude": this.state.latitude,
            "qtResidents": this.state.qtResidents,
        }

        axios.post('http://localhost:8080/api/residence', postData
        ).then( response => {
            console.log(response);
        }).catch(err => console.error(err));

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="cep">CEP:</label>
                        <input id="cep" className="form-control" type="text" value={this.state.cep}
                               onChange={event => this.setState({cep: event.target.value})}/>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="number">Number:</label>
                        <input id="number" className="form-control" type="text" value={this.state.number}
                               onChange={event => this.setState({number: event.target.value})}/>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="qtResidents">Nº of Residents:</label>
                        <input id="qtResidents" className="form-control" type="text" value={this.state.qtResidents}
                               onChange={event => this.setState({qtResidents: event.target.value})}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="latitude">Latitude:</label>
                        <input id="latitude" className="form-control" type="text" value={this.state.latitude}
                               onChange={event => this.setState({latitude: event.target.value})}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="longitude">Longitude:</label>
                        <input id="longitude" className="form-control" type="text" value={this.state.longitude}
                               onChange={event => this.setState({longitude: event.target.value})}/>
                    </div>
                </div>
                <div className="form-row">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
}

export default ResidenceForm;
