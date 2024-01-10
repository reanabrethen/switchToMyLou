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
    // default: return "Enter a valid day." or break
    //return will take you out of function so this works
  }
}




function identifySeason(month){
  switch(month){
   
    case 1: 
    case 2: return "Winter"
    // break: don't need break as return backs you out of function
    case 3: 
    case 4: 
    case 5: return "Spring"
    // break 
    case 6: 
    case 7: 
    case 8: return "Summer"
    // break
    case 9:
    case 10:
    case 11: return "Autumn"
    // break
    case 12:  return "Winter"   //can go under case 2 or above case 1 for more concise code
    // break
    default : "Return valid month." 
  }
}

//Another way to solve w/true statements
//switch(true){
//   case month === 12 || month === 1 || month === 2: return "Winter"
//   case month >= 3 && month <= 5: return "Spring"
//   case month >= 6 && month <= 8: return "Summer"
//   case month >= 9 && month <= 11: return "Autumn"
//   default: break
// }






function menuSelection(option){   //can use 'selection' as parameter
  switch(option){
  case 1: return "Option 1 selected"
  case 2: return "Option 2 selected"
  case 3: return "Option 3 selected"
  default: return "Invalid choice"
}
}

//Not best practice, if you see this below --> write an if statement (below solution)
// switch(true){
//   case selection >= 1 && selection <= 3: return `Option ${selection} selected`
//   default: return "Invalid Choice"
// }


// if(selection >= 1 && selection <= 3){
//   return `Option ${selection} selected`
// }else{
//   return "Invalid Choice"
// }

// `${}`

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
  