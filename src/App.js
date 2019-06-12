import React from 'react';
import './App.scss';
import Registration from './components/registerForm';
import Form from './components/test';


export default class App extends React.Component {
    render() {
        return ( 
            <div className = "App">
                <Registration / >
            </div>
        );
    }
}

