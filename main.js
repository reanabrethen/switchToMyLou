/******************************/
//Your Code Here 


function dayOfWeek(day){
  switch(day){
    case 1: return "Monday"
    case 2: return "Tuesday" 
    case 3: return "Wednesday"
    case 4: return "Thursday"
    case 5: return "Friday"
    case 6: return "Saturday"
    case 7: return "Sunday" 
    // default: return "Enter a valid day."
  }
}

function identifySeason(season){
  switch(season){
   
    case 1: 
    case 2: return "Winter"
    break
    case 3: 
    case 4: 
    case 5: return "Spring"
    break
    case 6: 
    case 7: 
    case 8: return "Summer"
    break
    case 9:
    case 10:
    case 11: return "Autumn"
    break
    case 12:  return "Winter"
    break
    default : "Return valid month."
    
  }
}

function menuSelection(option){
  switch(option){
  case 1: return "Option 1 selected"
  case 2: return "Option 2 selected"
  case 3: return "Option 3 selected"
  default: return "Invalid choice"
}
}

/****************************/
// Our code here. Don't touch!
if (typeof dayOfWeek === 'undefined') {
    dayOfWeek = undefined
  }
  
  if (typeof identifySeason === 'undefined') {
    identifySeason = undefined
  }
  
  if (typeof menuSelection === 'undefined') {
    menuSelection = undefined
  }

  
  
  module.exports = {
    dayOfWeek, 
    identifySeason, 
    menuSelection
  }
  