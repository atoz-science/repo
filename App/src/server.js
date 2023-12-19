const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Hard-Coded for demo
const CONTACTS = [
                    {
                      "name": "Ali",
                      "email": "aali1@gmail.com",
                      "cell": "+92303-123-4567"
                    },
                    {
                      "name": "Noman",
                      "email": "noman1@gmail.com",
                      "cell": "+92302-453-3434"
                    },
                    {
                      "name": "Hurairah",
                      "email": "hurairahj@gmail.com",
                      "cell": "+92309-786-9090"
                    }
                ];

app.get('/contacts', (req, res) => {
  res.json({contacts: CONTACTS});
});

app.listen(3000, () =>{
   console.log('Server running on port 3000.'); 
});