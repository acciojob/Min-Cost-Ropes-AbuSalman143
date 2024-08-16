function mincost(arr)
{ 
//write your code here
// return the min cost

	arr.sort((a, b) => a - b);
    let totalCost = 0;
    
    while (arr.length > 1) {
        // Extract the two smallest ropes
        let first = arr.shift();  // Removes the first element
        let second = arr.shift(); // Removes the second element
        
        // The cost to connect them
        let cost = first + second;
        totalCost += cost;
        
        // Insert the new rope back into the heap
        arr.push(cost);
        arr.sort((a, b) => a - b);
    }
    
    return totalCost;
  
}

module.exports=mincost;
