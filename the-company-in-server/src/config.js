const config = {
    db: {
        connectionString: process.env.CONNECTION_STRING || 'mongodb://127.0.0.1:27017/companies'
      },
    server: {
        port: process.env.PORT || 5000
      },
    companiesApi:{
        url: 'https://company.clearbit.com/v2/companies/find?domain=[[company_domain]]',
        authToken: 'Bearer sk_30240e2d1dfc1d73d26ab80390d1fd49'
      }
}

export {config};