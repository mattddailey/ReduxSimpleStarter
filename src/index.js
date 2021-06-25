import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'API_KEY_HERE';

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}


ReactDOM.render(<App />, document.querySelector('.container'));