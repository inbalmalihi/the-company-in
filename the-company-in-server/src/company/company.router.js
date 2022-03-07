import * as express from 'express';
import { CompanyController } from './company.controller.js';

const CompanyRouter = express.Router();

CompanyRouter.get('/:domain', CompanyController.getCompanyByDomain);

export { CompanyRouter };