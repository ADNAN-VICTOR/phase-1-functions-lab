function distanceFromHqInBlocks(currentBlock){
 if(currentBlock>42){
    return currentBlock - 42 ;
 }
 else {
    return 42 - currentBlock
 }
}
 function distanceFromHqInFeet(currentBlock){
    return distanceFromHqInBlocks(currentBlock)*264 ;
 }

function distanceTravelledInFeet(start, end){
    if (start>end){
    return (start - end)*264 ;
    }
    else{
    return (end - start)*264 ;
    }
}

function calculatesFarePrice(start, end, fare){
   const distance = distanceTravelledInFeet(start, end)
   if (distance<=400){
    return fare = 0 ;
   }
   else if (distance<=2000 && distance>400){
    return fare = (distance-400) * 0.02 ;
   }
   else if (distance>2000 && distance<2500){
    return 25 ;
   }
   else {
    return 'cannot travel that far'
   }
}
