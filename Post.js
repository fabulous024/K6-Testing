import http from 'k6/http';
import {check} from "k6";
import {sleep} from "k6";

export let options = {
    vus: 50,
    duration: '30s',

  };
  
  export default function () {
    sleep(2);
  // send custom payload/post data
  const payload = JSON.stringify({

    
        "toolId": 4643,
        "customerName": "oluwatoyin"
       
  });
  }

  export default function() {
  let params = {
    headers: {
  'Authorization': 'Bearer 0dba9188627a9f19ea22e595f946b0b19ddab636892b95650edb430ee6e0ecd3' ,
  'Content-Type' : 'application/json'
	   
    }
  }

  let res = http.post('https://simple-tool-rental-api.glitch.me/orders',payload,
  params

    );
  console.log(res.body);
  check(res, {
            'is status 200': (res)=> res.status = 200,
            
    });
  }