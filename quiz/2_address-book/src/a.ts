// function fetchItems(): string[] {
//   let items = ['a', 'b', 'c'];
//   return items;
// }

// const api = fetchItems();
// console.log(api);

function fetchItems(): Promise<string[]> {
  let items = ['a', 'b', 'c'];
  return new Promise((resolve) => {
    resolve(items);
  });
}
