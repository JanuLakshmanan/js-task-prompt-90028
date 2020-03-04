  
  var person = prompt("Please enter your name");

  while(person != null) {
    
    var start = prompt("Enter the start index");
    
    while((!isNaN(start)) && start<=person.length && start>=0)
    {
    var end = prompt("Enter the end index");
    
       while((!isNaN(end))&& end<=person.length && end>start)
        {
           alert(person.slice(start,end));
           break;
         }
         alert("Enter valid number");
    } 
       alert("Enter valid number"); 
       
       }
  alert("Enter the name");
  












  

