import http from 'k6/http';
import {check} from "k6";
import {sleep} from "k6";

export let options = {
    vus: 50,
    duration: '30s',

  };

  export default function() {
  let params = {
    headers: {
  'Authorization': 'Bearer 0dba9188627a9f19ea22e595f946b0b19ddab636892b95650edb430ee6e0ecd3'
	   
    }
  }

  let res = http.get('https://simple-tool-rental-api.glitch.me/tools?category=plumbing&results=2&countrycode=NGA',
  params 
     
    );
  console.log(res.body);
  check(res, {
            'is status 200': (res)=> res.status = 200,
            
    });
  }