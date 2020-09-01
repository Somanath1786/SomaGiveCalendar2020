const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add a route to get the token
app.get('/api/getToken', async (req, res) => {
    const stringToEncode = process.env.CLIENT_ID+':'+process.env.CLIENT_SECRET;
    const buff = Buffer.alloc((process.env.CLIENT_ID.length + process.env.CLIENT_SECRET.length +1), stringToEncode);
    const base64EncodedString = buff.toString('base64');
    const headerValue = 'Basic ' + base64EncodedString

    var requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : headerValue
        },
        redirect: 'follow'
      };

    const response = await fetch("https://public-api.benevity-staging.org/oauth2/token?grant_type=client_credentials&scope=benevity/api", requestOptions)
    .then(response => response.json())
    .then(result => res.json(result))
    .catch(error => console.log('error', error));
})

app.listen(port, () => console.log(`Listening on port ${port}`));