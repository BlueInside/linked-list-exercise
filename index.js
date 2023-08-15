function linkedList() {
  let _head = null;
  let _tail = null;
  function append(value) {
    if (!_head) {
      _head = node(value);
      _tail = _head;
      return _tail;
    }
    const newNode = node(value);
    _tail.nextNode = newNode;
    _tail = newNode;
    return _tail;
  }
  function prepend(value) {
    if (!_head) {
      _head = node(value);
      _tail = _head;
      return _head;
    }
    const newNode = node(value, _head);
    _head = newNode;
    return _head;
  }
  function size() {
    let count = 0;
    let currentNode = _head;
    if (!currentNode || !currentNode.nextNode) return count;
    while (currentNode.nextNode) {
      count += 1;
      currentNode = currentNode.nextNode;
    }
    return count + 1;
  }
  function head() {
    return _head;
  }
  function tail() {
    return _tail;
  }
  function at(index) {
    let count = 0;
    let currentNode = _head;
    const listSize = size();

    if (index >= listSize)
      return `Current index is out of list length. List Contains ${listSize} elements`;
    while (count < index) {
      currentNode = currentNode.nextNode;
      count += 1;
    }
    return currentNode;
  }
  function pop() {
    let currentNode = _head;
    if (!currentNode || !currentNode.nextNode) {
      _head = null;
      _tail = null;
      return;
    }
    while (currentNode.nextNode !== _tail) {
      currentNode = currentNode.nextNode;
    }
    let deletedNode = currentNode.nextNode;
    currentNode.nextNode = null;
    _tail = currentNode;
    return deletedNode;
  }
  function contains(value) {
    let currentNode = _head;
    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }
  function find(value) {
    // return index of the node containing value
    let index = 0;
    let currentNode = _head;

    while (currentNode) {
      if (currentNode.value === value) return index;
      currentNode = currentNode.nextNode;
      index += 1;
    }
    return -1;
  }
  function insertAt(value, index) {
    let count = 0;
    let listSize = size();
    let currentNode = _head;
    let previousNode = null;

    if (index === 0) return prepend(value);

    if (listSize <= index) return `Index out of list range`;
    while (currentNode) {
      if (count === index - 1) previousNode = currentNode;
      if (count === index) {
        const newNode = node(value, currentNode);
        previousNode.nextNode = newNode;
        break;
      }
      currentNode = currentNode.nextNode;
      count += 1;
    }
    return previousNode.nextNode;
  }
  function removeAt(index) {
    let count = 0;
    let listSize = size();
    let currentNode = _head;
    let previousNode = null;
    let deletedNode = null;

    if (listSize <= index) return `Index out of list range`;
    if (index === 0) {
      const removedNode = _head;
      _head = _head.nextNode || null;
      return removedNode;
    }

    while (currentNode) {
      if (count === index - 1) previousNode = currentNode;

      if (count === index) {
        deletedNode = currentNode;
      }
      if (index === listSize - 1) _tail = previousNode;
      currentNode = currentNode.nextNode;
      count += 1;
    }
    return deletedNode;
  }

  function toString() {
    // represent linked list objects as strings
    let currentNode = _head;
    let result = ``;
    while (currentNode) {
      result = result.concat(`(${currentNode.value}) -> `);
      currentNode = currentNode.nextNode;
    }
    result = result.concat(`null`);
    return result;
  }
  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    insertAt,
    removeAt,
    toString,
  };
}

function node(value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
}
