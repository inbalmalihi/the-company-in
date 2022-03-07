import { CompanyManager } from './company.manager.js';
import { getCompanyByDomain } from '../findCompaniesHelpers/getCompany.js';

export class CompanyController {
  static async createCompany(req, res) {
    res.json(await CompanyManager.create({ ...req.body, date: new Date() }));
  }
  
  static async getCompanyByDomain(req, res) {
    const company = await getCompanyByDomain(req.params.domain);
    // const company = await CompanyManager.getById(req.params.id);
    if (!company.data) {
      res.json({message: 'Company not found'})
      // TODO: throw error instead
    }
    res.json(company.data);
  }
}
