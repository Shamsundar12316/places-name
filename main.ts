// question 18// placec

let places: string[] = ["Islamabad","Beijing","Sydney","United Kingdom","London"];

// print your array in its original order
console.log(`original ` + places);
// print your array in alphabetical order without modifying the actual list
 console.log(`copy` + [...places].sort());
// show that your array is still in its original order by printing it
 console.log(`original ` + places);
// print your array in reverse alphabetical without changing the order of the original list
console.log(`copy ` + [...places].sort().reverse());
// show that your array is still in its original order by printing it again
console.log(`copy ` + [...places].sort().reverse());
// reverse yhe order of your list.print the array to show that its order has changed
console.log(`copy ` + [...places].sort());
// reverse the order of your list again.print the list to show it's back to its original order
console.log(`copy ` + [...places].sort().reverse());
//sort your array so it'stored in alphabetical order.print the array to show that its order has been changed
console.log(`copy ` + [...places].sort());


