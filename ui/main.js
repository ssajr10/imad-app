var button= document.getElementById('counter');

button.onclick = function(){
    
    var request=new XMLHttpRequest();
    request.onreadystatechange= function(){
        
        if (request.readtState === XMLHttpRequest.DONE) {
            if(request.status===200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
        
    };
    
   request.opn('GET','http://salmanashrafsyed.imad.hasura-app.io/',true);
   request.send(null);
    
};