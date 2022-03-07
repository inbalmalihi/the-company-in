import { CompanyModel } from './company.model.js';

export class CompanyRepository {
  static async create(request) {
    return CompanyModel.create(request);
  }

  static getById(id) {
    return CompanyModel.findById(id).exec();
  }

  static getMany(startIndex = 0, endIndex = 20, sortOrder = '-', sortBy = 'open_date')
     {
    return CompanyModel
      .find()
      .sort(sortOrder + sortBy)
      .skip(+startIndex)
      .limit(+endIndex - +startIndex)
      .exec();
  }
}
