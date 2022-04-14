//const axios = require('axios');


//http://localhost:3000/ url
//location.href='http://localhost:3000/'

const FetchDataAjax =()=>{
    console.log("works");

axios.get('http://localhost:3000/')
  .then(function (response) {
    // handle success
    console.log(response);
    let datafromwebsite = response.data.merchantmessage;
    //console.log(datafromwebsite);
    
    document.getElementById("mybutton").style.display="none";
    document.getElementById("response").innerHTML=datafromwebsite;

    const myElement = document.getElementById("response");
    
    
    myElement.style.textAlign= "center";
    myElement.style.marginTop="300px";

  })
  .catch(function (error) {
    // handle error
    console.log("an error")
    console.log(error);
  })

}