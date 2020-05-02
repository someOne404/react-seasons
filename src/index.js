import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import useLocation from './useLocation';

const App = () => {
    const [lat, errorMessage] = useLocation();

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