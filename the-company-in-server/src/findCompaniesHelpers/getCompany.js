import axios from "axios";
import { config } from '../config.js';

const getCompanyByDomain = async (domain) => {
    try {
      return await axios.get(`https://company.clearbit.com/v2/companies/find?domain=${domain}`, {
        headers: {
          'Authorization': `${config.companiesApi.authToken}`
        }});
    } catch (error) {
      console.error(error)
    }
  }
  
export { getCompanyByDomain };