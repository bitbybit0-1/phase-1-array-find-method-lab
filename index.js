// code your solution here
function superbowlWin(array){
    const winner = array.find(item=>item.result === 'W');
    if(!!winner){
       return winner.year 
    }else{
     return undefined
     }
    
}

  
 
  