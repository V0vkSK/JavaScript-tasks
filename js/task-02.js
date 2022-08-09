// Задание 2
// Исправь ошибки которые будут в консоли, чтобы скрипт заработал.

const inventory = {
  items: ['Knife', 'Gas mask'],
  
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    
    this.items.push(itemName);
    
    
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter(item => item !== itemName);
    // console.log(this.items);
    
  },
};

const invokeInventoryAction = function (itemName, action) {
//   console.log(itemmName);
// console.log(addingFn);  
  
  console.log(`Invoking action on ${itemName}, ${action}`);
  console.log(action);
  

  // action(itemName);
};

const itemmName = 'Medkit' 
const addingFn = inventory.add(itemmName);
// console.log(itemmName);



invokeInventoryAction(itemmName, inventory.add(itemmName));
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction('Gas mask', inventory.remove('Gas mask'));
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']