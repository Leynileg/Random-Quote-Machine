import React from 'react';
import ReactDOM from 'react-dom';
import {QuoteMachine} from './components/quoteMachine.jsx';

class App extends React.Component {
    render(){
        return (
            <div>
                <QuoteMachine/>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});