import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { FilterProvider } from './context/FilterContext';



ReactDOM.render(
    <FilterProvider>
           <App/>
    </FilterProvider>,
    document.getElementById('root')
);