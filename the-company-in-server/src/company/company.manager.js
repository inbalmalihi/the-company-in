import { CompanyRepository } from './company.repository.js';

export class CompanyManager {
    static async create(req) {
    return CompanyRepository.create(req);
  }

  static getById(id) {
    return CompanyRepository.getById(id);
  }

  static getMany(startIndex, endIndex, sortOrder = '-' | '', sortBy) {
    return CompanyRepository.getMany(startIndex, endIndex, sortOrder, sortBy);
  }
}