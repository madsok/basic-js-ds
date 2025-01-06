const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    this.treeRoot = addNode(this.treeRoot, data);

    function addNode(node, value) {
      if (node === null) {
        return new Node(value);
      }

      if (value < node.data) {
        node.left = addNode(node.left, value);
      } else {
        node.right = addNode(node.right, value);
      }
    
      return node;
    }
  }

  has(data) {
    return hasNode(this.treeRoot, data);

    function hasNode(node, value) {
      if (node === null) {
        return false;
      }

      if (node.data === value) {
        return true;
      }

      if (value < node.data) {
        return hasNode(node.left, value);
      } else {
        return hasNode(node.right, value);
      }
    }
  }

  find(data) {
    return findNode(this.treeRoot, data);

    function findNode(node, value) {
      if (node === null) {
        return null;
      }

      if (value === node.data) {
        return node;
      }

      if (value < node.data) {
        return findNode(node.left, value);
      } else {
        return findNode(node.right, value);
      }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let current = this.treeRoot;
    

    while (current) {
      if (current.left === null) {
        return current.data;
      } else {
        current = current.left;
      }
    }
  }

  max() {
    let current = this.treeRoot;
    
    while (current) {
      if (current.right === null) {
        return current.data;
      } else {
        current = current.right;
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};