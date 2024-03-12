export default function updateUniqueItems(groceries) {
  if (!(groceries instanceof Map)) {
    throw new Error('Cannot process');
  }

  const updatedMap = new Map();

  groceries.forEach((quantity, item) => {
    if (item !== 'name' && item !== 'quantity') {
      if (quantity === 1) {
        updatedMap.set(item, 100);
      } else {
        updatedMap.set(item, quantity);
      }
    }
  });

  if (groceries.has('name')) {
    updatedMap.set('name', groceries.get('name'));
  }
  if (groceries.has('quantity')) {
    updatedMap.set('quantity', groceries.get('quantity'));
  }
  return updatedMap;
}
