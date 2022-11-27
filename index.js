function scuberGreetingForFeet(feet){
  // Write your code here!
  let result;
  if(feet <= 400) {
    result = "This one is on me!";

  }else if(feet > 2500){
    result = "No can do.";
  }else if (feet > 2000) {
    result = "I will gladly take your thirty bucks."
  }
  return result
}

function ternaryCheckCity(city){
  // Write your code here!
  let result = (city ==='NYC') ? 'Ok, sounds good.' : 'No go.'
      return result;

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let result;
  switch(tip) {
    case 'generous':
      result ='Thank you so much.';
      break;
    case 'not as generous':
      result ='Thank you.';
      break;  
    case 'thanks for everything':
      result ='Bye.';
      break;    
  }
  return result;
  
}

scuberGreetingForFeet(2501);
ternaryCheckCity('Pittsburgh');
