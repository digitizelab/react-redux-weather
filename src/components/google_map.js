import React, {Component} from 'react';

class GoogleMap extends Component {
    //Lifecycle method -> calls automatically after the element is rendered to the screen
    //google.maps.Map -> create embedded Google maps
    //this.refs.map -> HTML element
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    //Allows access to ref system in React
    //Allows to get a reference to a HTML that is rendered to the page
    //this.refs.map
    render() {
        return <div ref="map" />
    }
}

export default GoogleMap;