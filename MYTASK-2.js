

$('h2').on("touchstart",function (){
    //simply starts listening for touchstart - allows for hover state on touch devices
  });

function getData(a)
{
url="https://reqres.in/api/users?page=1";
fetch(url).then((response)=>{
 return response.json(); 
    }).then((data)=>{
 console.log(data);
    var value=data;       
    var img1=(value['data'][0]['avatar']);
           document.getElementById('IMG1').src = img1;
    var img2=(value['data'][1]['avatar']);
           document.getElementById('IMG2').src = img2;
    var img3=(value['data'][2]['avatar']);
           document.getElementById('IMG3').src = img3;
    var img3=(value['data'][3]['avatar']);
           document.getElementById('IMG4').src = img3;
    var img3=(value['data'][4]['avatar']);
           document.getElementById('IMG5').src = img3;
     var img3=(value['data'][5]['avatar']);
           document.getElementById('IMG6').src = img3;       
    var first1=(value['data'][0]['first_name']);
    var last1=(value['data'][0]['last_name']);
           document.getElementById('username1').innerHTML =first1+" "+last1;
    var first1=(value['data'][1]['first_name']);
    var last1=(value['data'][1]['last_name']);
    document.getElementById('username2').innerHTML =first1+" "+last1;
    var first1=(value['data'][2]['first_name']);
    var last1=(value['data'][2]['last_name']);
           document.getElementById('username3').innerHTML =first1+" "+last1;
    var first1=(value['data'][3]['first_name']);
     var last1=(value['data'][3]['last_name']);
           document.getElementById('username4').innerHTML =first1+" "+last1;
     var first1=(value['data'][4]['first_name']);
    var last1=(value['data'][4]['last_name']);
           document.getElementById('username5').innerHTML =first1+" "+last1;
     var first1=(value['data'][5]['first_name']);
     var last1=(value['data'][5]['last_name']);
           document.getElementById('username6').innerHTML =first1+" "+last1;
      var mail1=(value['data'][0]['email']);
           document.getElementById('mailID1').innerHTML=mail1;
    var mail2=(value['data'][1]['email']);
           document.getElementById('mailID2').innerHTML=mail2;
   var mail3=(value['data'][2]['email']);
           document.getElementById('mailID3').innerHTML=mail3;
   var mail3=(value['data'][3]['email']);
           document.getElementById('mailID4').innerHTML=mail3;
     var mail3=(value['data'][4]['email']);
           document.getElementById('mailID5').innerHTML=mail3;
     var mail3=(value['data'][5]['email']);
           document.getElementById('mailID6').innerHTML=mail3;
        })
    }
    