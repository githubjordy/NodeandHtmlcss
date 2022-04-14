const cheerio= require('cheerio');
const fetch = require('node-fetch');





exports.getdata = async function () {

const url ="https://runescape.wiki/w/Travelling_Merchant%27s_Shop/Future";

 let date = new Date();
 let day = date.getDate();
 let year = date.getFullYear();
 let month = date.toLocaleString('en-us', { month: 'long' });

 let currentdate = day+" "+ month + " " + year;
 let check =false;
 //console.log(currentdate);
 let errortext;

 const result =async()=>
{
 
 let result =await fetch(url).then(function(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}).catch(function(error) {
    //console.log("gets called")
    //console.log(error);
    errortext = "something went wrong"
});

if(errortext!= ""){ return }
 let html =await result.text();
 const $ =cheerio.load(html);

 //let text =$('title').text();
  $('table.wikitable tbody tr td:first-child ').each((index, element) => {
    //console.log(index);
    //console.log($(element).text());
    let htmldocdatum =$(element).text();
    if(htmldocdatum== currentdate){

        let searchtext ="Livid plant".toLowerCase();
        let searchtext2 ="Shattered anima".toLowerCase();
        let selectcolumn = index +2;
        //console.log(index);
        $(`table.wikitable tbody tr:nth-child(${selectcolumn}) td `).each((index, element) => {
          
           if($(element).text().trim().toLowerCase()==searchtext2){
               
            //console.log("is equal")
                check = true;
                
            }
        
        });

        //console.log("works");
        
       
    }
   
    });;
   
}



 await result();

//console.log(check);

if(errortext!= ""){
    return errortext;
}
if(check ==true){
    return "Merchant has item in stock"
}
 return "Merchant doesn't have item in stock"  

}// end of function








