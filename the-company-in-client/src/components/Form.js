import React, { Component } from "react";
import axios from 'axios';

class CompanyForm extends Component {
  state = {
    input: null,
    companiesInfo: [],
    selectedCompany: null
  }

  handleChange(event){
    this.setState({...this.state, input: event.target.value})
  }

 handleSubmit(event){
    event.preventDefault();
    axios.get(`http://127.0.0.1:5000/api/company/${this.state.input}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => {
        let companyInfo = {};
        for (const [key, value] of Object.entries(res.data)) {
          if(key === 'name' | key === 'logo' | key === 'type'){
            companyInfo= {
              ...companyInfo,
              [key]: value
            }
          }
        }
        // if(this.state.companiesInfo.length > 0){
        this.setState({...this.state, companiesInfo: [...this.state.companiesInfo, companyInfo]})
        // }
        // else{
        //   this.setState({...this.state, companiesInfo: [companyInfo]});
        // }
      console.log('companiess', this.state.companiesInfo);

    }).catch(err => {
        alert('fail');
    });
  }

  routeChange() {
    let path = `http://127.0.0.1:3000/company/${this.state.selectedCompany}`;
    // this.props.history.push(path);
  }
  render() {
    return(
      <div>
        <h2>Company File</h2> 
        <form onSubmit={this.handleSubmit.bind(this)}>
        <h4>Enter company domain:</h4>
          <label>
              <input
                type="text" 
                name="domain"
                value={this.state.input || ""}
                onChange={this.handleChange.bind(this)}
              />
          </label>
          <button
                type="submit"
                onClick={this.handleSubmit.bind(this)}>
                Get Information!
              </button>
        </form>
        <div>
          <ul>
          {
            this.state.companiesInfo.map((companyInfo,key, index) =>(
                <li 
                  key={index}
                  onClick={this.routeChange}
                  // company={companyInfo.name}
                  >{companyInfo.logo ?<img key={index} src={companyInfo.logo} alt="company logo"/> :
                <p key={index}>{companyInfo[key]} </p>
              }</li>                  
              ))
          }
          </ul>
     
        </div>
      </div>
    );
  }

}

export default CompanyForm;