const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_TOKEN });

exports.handler = async (event, context) => {
    let response
    try {
        response = await notion.pages.create({
            parent: { 
                database_id: event.queryStringParameters.dbid
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