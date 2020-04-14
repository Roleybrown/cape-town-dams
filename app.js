/*
Title: Extract List of Dams from City Of Cape Town Open Data Portal
Author: Roland Brown
Date: 14-April-2020
*/

const request = require('request')

const url = 'https://citymaps.capetown.gov.za/agsext1/rest/services/Theme_Based/Open_Data_Service/MapServer/120/query?where=1%3D1&outFields=*&outSR=4326&f=json';

request({url: url, json:true}, (err,response) => {
    if (err) {
        console.log(err);
    }
    else { 
             for (let i = 0; i < response.body.features.length; i++) {
               console.log('Dam Name: ' + response.body.features[i].attributes.NAME)
             }
    }
});