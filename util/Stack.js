function Stack() {
  let data = [];

  function push(item) {
    data.push(item);
  }

  function pop() {
    return data.pop();
  }

  function peek() {
    return data[data.length - 1];
  }

  return { push: push, pop: pop, peek: peek };
}

module.exports = Stack;
