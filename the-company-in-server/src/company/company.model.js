import mongoose from 'mongoose';
const { Schema, model } = mongoose;

// TODO: add schema
const CompanySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
    }
}, { strict: false });

const CompanyModel = model('Company', CompanySchema);

export { CompanyModel };