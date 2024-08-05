// question 18// placec
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Islamabad", "Beijing", "Sydney", "United Kingdom", "London"];
// print your array in its original order
console.log("original " + places);
// print your array in alphabetical order without modifying the actual list
console.log("copy" + __spreadArray([], places, true).sort());
// show that your array is still in its original order by printing it
console.log("original " + places);
// print your array in reverse alphabetical without changing the order of the original list
console.log("copy " + __spreadArray([], places, true).sort().reverse());
// show that your array is still in its original order by printing it again
console.log("copy " + __spreadArray([], places, true).sort().reverse());
// reverse yhe order of your list.print the array to show that its order has changed
console.log("copy " + __spreadArray([], places, true).sort());
// reverse the order of your list again.print the list to show it's back to its original order
console.log("copy " + __spreadArray([], places, true).sort().reverse());
//sort your array so it'stored in alphabetical order.print the array to show that its order has been changed
console.log("copy " + __spreadArray([], places, true).sort());
