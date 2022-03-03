const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.post('/', async(req, res, next) => {
  let body  = {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  }
  let body1  = {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  }
  let body2  = {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  }
  console.log(req.body)
  let output = []
  if((req.body.stdin === '' && req.body.testcases[0].i === '') || req.body.stdin !== ''){
    console.log("WORK")
    body.stdin = req.body.stdin
    body.language = req.body.language
    body.versionIndex = req.body.versionIndex
    body.script = req.body.script
    fetch('https://api.jdoodle.com/v1/execute', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
    .then(json => res.send(json));
  }else if(req.body.testcases[0].i !== ''){
    if(req.body.testcases[0].i !== ''){
      body.stdin = req.body.testcases[0].i
      body.language = req.body.language
      body.versionIndex = req.body.versionIndex
      body.script = req.body.script
    }
    if(req.body.testcases[1].i !== ''){
      body1.stdin = req.body.testcases[1].i
      body1.language = req.body.language
      body1.versionIndex = req.body.versionIndex
      body1.script = req.body.script
    }
    if(req.body.testcases[2].i !== ''){
      console.log("WROKING - 3")
      body2.stdin = req.body.testcases[2].i
      body2.language = req.body.language
      body2.versionIndex = req.body.versionIndex
      body2.script = req.body.script
    }
    const fetch1 = fetch('https://api.jdoodle.com/v1/execute', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
      }).then(res => res.json())
    
    const fetch2 = req.body.testcases[1].i !== ''? Promise.all([fetch1,     
      fetch('https://api.jdoodle.com/v1/execute', {
      method: 'POST',
      body: JSON.stringify(body1),
      headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
    ])
     : fetch1;
     const fetch3 = req.body.testcases[2].i !== ''? Promise.all([fetch1,fetch2,     
      fetch('https://api.jdoodle.com/v1/execute', {
      method: 'POST',
      body: JSON.stringify(body2),
      headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
    ])
     : fetch2;
    fetch3.then(result => {
      //result is a array
      let output = [{o:''}, {o:''},{o:''}]
       if(result.length){
         console.log(result)
        output[0].o=result[0].output
        output[1].o=result[1].output
          if(result[2]){
            output[2].o = result[2].output
          }
          res.send({output})
          console.log(output)
        }
      else{
        output[0].o = result.output       
        res.send({output})
      }
    })
  }
});


module.exports = router; 