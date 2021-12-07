
import { Component } from 'react';
import { connect } from "react-redux";
import { Map, InfoWindow, Marker, GoogleApiWrapper, Circle } from 'google-maps-react';

class _MyMap extends Component {

    state = {
        isInfoWindowOn : false,
        location:null,
        contry : null
    }

    onCircleClicked=(location)=>{
        this.setState({isInfoWindowOn: true})
        this.setState({location: location})
        const contry = this.props.countries.find(contryLocation => contryLocation.countryInfo.lat === location.lat && contryLocation.countryInfo.long === location.lng )
        this.setState({contry: contry})
    }

    onInfoWindowClose=()=>{
        this.setState({isInfoWindowOn: false}) 
    }

    setNumber = (number) =>{
     return new Intl.NumberFormat().format(number)
    }

    render() {
      const center = { lat: 34.80746, lng: -40.4796 };
        return (
            <Map
                google={this.props.google}
                zoom={!this.props.country ?2 : 5}
                initialCenter={!this.props.country ?!this.state.location?center : this.state.location : {lat:this.props.country.countryInfo.lat,lng:this.props.country.countryInfo.long}}
                center={!this.props.country ?!this.state.location?center : this.state.location : {lat:this.props.country.countryInfo.lat,lng:this.props.country.countryInfo.long}}
            >

                <InfoWindow 
                onClose={this.onInfoWindowClose}
                position={this.state.location}
                visible={this.state.isInfoWindowOn}
                >
                    <div className="flex column justify-center align-center">
                        <h1>{!this.state.contry? '': this.state.contry.country}</h1>
                        <div className="info-img-continer">
                        <img src={!this.state.contry? '': this.state.contry.countryInfo.flag} alt="flag.img"/>
                        </div>
                        <p>{!this.state.contry? '': `Cases: ${this.setNumber(this.state.contry.cases)}`}</p>
                        <p>{!this.state.contry? '': `Recovered: ${this.setNumber(this.state.contry.recovered)}`}</p>
                        <p>{!this.state.contry? '': `Deaths: ${this.setNumber(this.state.contry.deaths)}`}</p>
                    </div>
                </InfoWindow>

                {
               this.props.locations.map((location,idx) => 
                <Circle
                key={idx}
                radius={this.props.cases[idx]}
                center={location}
                strokeColor='transparent'
                strokeOpacity={0}
                strokeWeight={10}
                fillColor='#FF0000'
                fillOpacity={0.2}
                onClick={()=>this.onCircleClicked(location)}
                // onMouseover = {()=>this.onCircleOver(location)}
              />
               )}


            </Map>
        );
    }
}

function mapStateToProps(state) {
  return {
    country: state.countriesModule.country,
  };
}
const mapDispatchToProps = {
};

const MyMap = connect(mapStateToProps, mapDispatchToProps)(_MyMap);

export default GoogleApiWrapper({
    apiKey: ('')
})(MyMap)