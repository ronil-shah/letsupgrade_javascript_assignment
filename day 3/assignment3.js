var avg = prompt("enter any number");

if (avg < 60){
    console.log("Grade : F");      
    } 
  else if (avg < 70) {
          console.log("Grade : D"); 
            } 
  else if (avg < 80) 
       {
          console.log("Grade : C"); 
  } else if (avg < 90) {
          console.log("Grade : B"); 
  } else if (avg < 100) {
          console.log("Grade : A"); 
}

//using switch case
var avg = prompt("enter number");

switch(
            
                
    //usage of ternary operator inside switch

    (avg >= 60 && avg <= 100) ? 1 : 
    (avg > 50 && avg < 60) ? 2 : 3 
  )
    
    {
        case 1 :grade = "A";result="First Class";break;
        case 2 :grade = "B"; result="Second Class";break;
        case 3 :grade = "C"; result="Third Class";break;
        
    }