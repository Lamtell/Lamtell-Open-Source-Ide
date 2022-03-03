const express = require("express");
const rp = require('request-promise');
const cheerio = require('cheerio');

const router = express.Router()

router.get("/", (req, res) => {
   const url = req.query.url;
    rp(url)
    .then(function(html){
    const $ = cheerio.load(html);

    //Problem Statement
    const problem_statement = $('.problem-statement > div:nth-child(2)').text()
    //Title
    const title = $('.problem-statement > div:nth-child(1) > .title').text()

    //Sample Tests
    //sample test case input 1
    const sti1 = $('.problem-statement > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > pre').text()
    //sample test case output 1
    const sto1 = $('.problem-statement > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > pre').text()
    const sti2 = $('.problem-statement > div:nth-child(5) > div:nth-child(2) > div:nth-child(3) > pre').text()
    const sto2 = $('.problem-statement > div:nth-child(5) > div:nth-child(2) > div:nth-child(4) > pre').text()
    const sti3 = $('.problem-statement > div:nth-child(5) > div:nth-child(2) > div:nth-child(5) > pre').text()
    const sto3 = $('.problem-statement > div:nth-child(5) > div:nth-child(2) > div:nth-child(6) > pre').text()
    const sampleTests = [{i:sti1,o:sto1},{i:sti2,o:sto2},{i:sti3,o:sto3}]
    //Time limit
    const time_limit = $('.problem-statement > div:nth-child(1) > .time-limit').text().replace('time limit per test', '');

    //Memory limit
    const memory_limit = $('.problem-statement > div:nth-child(1) > .memory-limit').text().replace('memory limit per test', '');

    //input-specifications
    const input_specifications = $('.problem-statement > div:nth-child(3)').text().replace('Input', '');
    
    //output-specifications
    const output_specifications = $('.problem-statement > div:nth-child(4)').text().replace('Output', '');
    
    
    //sample-tests -  this will be a array
    const markup = $('.problem-statement').html();
    
    res.send({markup, title, problem_statement, time_limit, memory_limit, input_specifications, output_specifications, sampleTests })
    })
    .catch(function(err){
        console.log(err)
    });

})

module.exports = router


