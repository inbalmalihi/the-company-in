import React, { Component } from "react";
import axios from 'axios';

const formFields = ['logo', 'name', 'type', 'domain', 'description', 'industry', 'location']; //TODO: add the rest


class CompanyInfo extends Component {
  state = { data: [] };

 componentDidMount(event){
    event.preventDefault();
    axios.get(`http://127.0.0.1:5000/api/company/${this.props.company}.com`, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => {
        console.log('success', res.data);
        let companyInfo = [];
        for (const value in formFields) {
          if(value in res.data){
            companyInfo= [
              ...companyInfo,
              {[value]: res.data[value]}
            ]
          }
        }
        this.setState({data: companyInfo})
        
    }).catch(err => {
        alert('fail');
    });
  }

  render() {
    return(
      <div>
          <ul>
          {this.state.data.map((info,key, index) =>(
                <li key={index}>
                    {info.logo ?<img key={index} src={info.logo} alt="company logo"/> :
                <p key={index}>{info[key]} </p>
              }</li>                  
              ))
          }
          </ul>
      </div>
    );
  }
}

export default CompanyInfo;