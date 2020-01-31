function Stack() {
  let data = {};
  let counter = 0;

  function push(item) {
    data[counter] = item;
    counter++;
  }

  function pop() {
    const value = data[counter - 1];
    delete data[counter];
    counter--;
    return value;
  }

  function peek() {
    return data[counter - 1];
  }

  return { push, pop, peek };
}

module.exports = Stack;
