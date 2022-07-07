
const fetch = require('node-fetch')

const API_ENDPOINT = 'https://api.notion.com/v1/pages'

let payload = {parent:
    {type: "database_id", "database_id": "797daf87bfd5422f9abae33dc1084bab"}, propertiers: {type: "title", title: [{type: "text", "text": {content: "It work"}}]}}

exports.handler = async (event, context) => {
  let response
  try {
    response = await fetch(API_ENDPOINT, {
        type: "json",
        fetchOptions: {
            method: "POST",
            headers: {
                "Authorization": `Bearer secret_Iv5KchMYDUaqiOV4RB1oa0kNxYHiKfwIRxnMb1lHAht`,
                "Notion-Version": "2021-05-13",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }
    })
    // handle response
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