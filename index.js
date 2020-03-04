  
  var person = prompt("Please enter your name");
  if(person != null) {
    
    var start = prompt("Enter the start index");
    
    if((!isNaN(start)) && start<=person.length && start>=0)
    {
    var end = prompt("Enter the end index");
    
       if((!isNaN(end))&& end<=person.length && end>start)
        {
           alert(person.slice(start,end));
          
         }
         else{
            alert("Enter valid number");
         }
        
    } 
    else{
      alert("Enter valid number");
    }
          
       }
  alert("Enter the name");


  












  

