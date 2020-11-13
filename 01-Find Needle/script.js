/* 
  You are given an arrays.
*/

var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];


function findNeedle (arr) {
  if(arr.find(element => element === "needle")){
    return `found the ${arr.find(element => element === "needle")} at position ${arr.indexOf("needle")}`
  } else {
    return "didn't found needle, sorry!"
  }  
}

console.log(findNeedle(haystack_3));

function findItem (arr, item) {
  foundelement = arr.find(element => element.includes(item));
  if(foundelement){
    return `found the ${item} at position ${arr.indexOf(foundelement)}`
  } else {
    return `didn't found ${item}, sorry!`;
  }
  
}

console.log(findItem(haystack_2, "cat"));



function findItem2 (arr, item) {
  for(i=0; i<arr.length ; i++){
    
    if(arr[i].includes(item)){
      return `found the ${item} at position ${i}`
    } 
  }
  return `didn't found ${item}, sorry!`;
}

console.log(findItem2(haystack_2, "cat"));


/* EXPECTED OUTPUT */

