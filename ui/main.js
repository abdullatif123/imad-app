//counter code
var button=document.getElementById('counter');
var counter=0;
 button.onclick =function() {
     //create a request object
     var request=new XMLHttpRequest();
     
     //capture the response and store it in a variable
     request.onreadystatechange=function(){
         if(request.readyState===XMLHttpRequest.DONE){
             //Take some action
             if(request.status===200){
                 var counter=request.responseText;
                 var span=document.getElementById("count");
                 span.innerHTML=counter.toString();
             }
         }
       //Not done yet  
     };
     // Make ther request
     request.open('GET','http://abdul1997latif.imad.hasura-app.io/counter',true);
     request.send(null);
     
 };
 //submit name
 var nameInput=document.getElementById("name");
 var name=nameInput.value;
 var submit=document.getElementById("submit_btn");
 submit.onclick =function(){
     //Make a request to the server and send the name
     
     //capture a list of names and render it as a list
     var names=["name 1","name 2"];
     var list=' ';
     for (var i=0;i<names.length;i++){
         list+='<li>'+ names[i] + '</li>;
     }
     var ul=document.getElementById("namelist");
     ul.innerHTML=list;
 };