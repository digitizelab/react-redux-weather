import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Importing action creator
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    //this.onInputChange = this.onInputChange.bind(this);
    //Fat arrow is similar to writing ^ in constructor (binding to context)
    //Without fat arrow function, method is just a callback
    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        //We need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favourite city"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);