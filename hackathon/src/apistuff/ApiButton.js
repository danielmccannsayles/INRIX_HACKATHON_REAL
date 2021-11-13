import React from 'react';
//This is API Folder

function handleClick(){

    let accessToken;

    const credentials = { appId: 'lrzpgru190', hashToken: 'bHJ6cGdydTE5MHxiT1I3MGY2cmVONW1Dd2k4SmlIcjA1dXd4d2ZSTWlmdTMxd3pUb05M' };


    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    async function getAccessToken(appId, hashToken) {
        let response = await fetch("https://api.iq.inrix.com/auth/v1/appToken?appId=lrzpgru190&hashToken=bHJ6cGdydTE5MHxiT1I3MGY2cmVONW1Dd2k4SmlIcjA1dXd4d2ZSTWlmdTMxd3pUb05M", requestOptions)
        let json;
        if (response.ok){
            json= await response.json();
            console.log(json);
        }

        console.log(json.result.token);

    }

    accessToken = getAccessToken( credentials.appId, credentials.hashToken);
}


function ApiButton() {

  return (
      <button onClick={handleClick}>Hello </button>
  );
}

export default ApiButton;