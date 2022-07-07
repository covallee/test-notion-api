const { Client } = require('@notionhq/client');

const notion = new Client({ auth: 'secret_Iv5KchMYDUaqiOV4RB1oa0kNxYHiKfwIRxnMb1lHAht' });

exports.handler = async (event, context) => {
    const response = await notion.pages.create({
        parent:{ 
            database_id: "797daf87bfd5422f9abae33dc1084bab"
          },
          propertiers: {
            Name: {
              title: [
                {
                  text: {
                    content: "It work",
                  }
                }
              ]
            },
          }
    })
  }