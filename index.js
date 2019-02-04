// Code your solution in this file!
function distanceFromHqInBlocks(d){
  return Math.abs(d - 42)
}

function distanceFromHqInFeet(d){
  return distanceFromHqInBlocks(d)*264
}

function distanceTravelledInFeet(startBlock,endBlock){
 return Math.abs(startBlock - endBlock)*264
}

function calculatesFarePrice(startBlock,endBlock){
   const d = distanceTravelledInFeet(startBlock,endBlock);
   let fare=0
   if(d>400 && d<=2000){
     flare=d*2
   }else if(d >= 2000){
     flare=d*25
   }
  return fare;
}
