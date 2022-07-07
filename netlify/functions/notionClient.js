const { Client } = require('@notionhq/client');

const notion = new Client({ auth: 'secret_Iv5KchMYDUaqiOV4RB1oa0kNxYHiKfwIRxnMb1lHAht' });

exports.handler = async (event, context) => {
    let response
    try {
        response = await notion.pages.create({
            parent: { 
                database_id: "797daf87bfd5422f9abae33dc1084bab"
              },
              properties: {
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
    } catch (err) {
        return {
            statusCode: err.statusCode || 500,
            body: JSON.stringify({
              error: err.message
            })
          }
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            data: response
        })
    }
  }