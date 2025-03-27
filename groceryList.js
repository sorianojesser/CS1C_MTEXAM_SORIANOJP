//Grocery list

if (prompt("Create a grocery list? (y/n)") === "y") {
  let list = [], n = parseInt(prompt('Item ${i + 1}:'));
  for (let i = 0; i < n; i++) list.push(prompt('Item ${i + 1}:'));
  let sortedList = [...list].sort(), reversed = [...list].reverse();
  alert('list: ${list}\nSorted: ${sortedList}\nReversed: ${reversedList}');
}
