import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    //initialize the state object

    // equivalent as having a constructor and put state vairable in it
    state = { lat: null, errorMessage: '' };
 
    componentDidMount() { // initial set up
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    //required to implement render()
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        }

        return <div>Loading!</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)