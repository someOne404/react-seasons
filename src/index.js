import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

const App = () => {
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude),
            err => setErrorMessage(err.message)
        );
    }, []);

    // componentDidMount: useEffect(function, []), 
    // componentDidMount+update: useEffect(function, [someVar])

    let content;
    if (errorMessage) {
        content = <div>Error: {errorMessage}</div>
    }
    else if (lat) {
        content = <SeasonDisplay lat={lat} />
    }
    else {
        content = <Loader message="Please accept location request"/>;
    }

    return (
        <div className="border red">
            {content}
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)