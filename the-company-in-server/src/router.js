import { Router } from 'express';
import { CompanyRouter } from './company/company.router.js';

const AppRouter = Router();

AppRouter.use('/api/company', CompanyRouter);

AppRouter.use('*', (_req, res) => {
  res.status(404).send('Invalid Route');
});

export { AppRouter };
