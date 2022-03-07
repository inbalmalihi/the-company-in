import React, { Component } from 'react';
import CompanyForm from './Form';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Companies Information</h1>
                <hr/>
                <CompanyForm />
            </div>
        )
    }
}

export default App;