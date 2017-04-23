'use strict'

const request = require('request');
const _ = require('underscore');
var config = require('./config')

var sendUrl = "https://graph.facebook.com/v2.6/me/messages";

function sendMsg(data) {
    console.log(JSON.stringify(data));
    var sendId = data.sender.id;

    request({
        url : sendUrl,
        qs : { access_token : config.page_token },
        method : 'POST',
        json : {
            "recipient":{
  	            "id":sendId
            },
            "message":{
  	            "text":"hello, world!"
            }
        }
    }, (err,res,body) => {
        if(err) throw err;
        console.log("msg sent %d",sendId);
    });
}

module.exports = {
    sendMsg : sendMsg
}