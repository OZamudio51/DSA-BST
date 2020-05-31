class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
    }
    else if (key < this.key) {

      if(this.left === null) {
        this.left = new BinarySearchTree(key, value, this);
      }
      else {
        this.left.insert(key, value);
      }
    }
    else {
      if (this.right === null) {
        this.right = new BinarySearchTree(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    if (this.key === key) {
      return this.value;
    }
    else if (key < this.key && this.left) {
      return this.left.find(key);
    }
    else if(key > this.key && this.right) {
      return this.right.find(key);
    }
    else {
      throw new Error('Key Error');
    }
  }

  remove(key) {
    if (this.key === key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      else if (this.left) {
        this._replaceWith(this.left);
      }
      else if (this.right) {
        this._replaceWith(this.right);
      }
      else {
        this._replaceWith(null);
      }
    }
    else if (key < this.key && this.left) {
      this.keft.remove(key);
    }
    else if (key > this.key && this.right) {
      this.right.remove(key);
    }
    else {
      throw new Error('Key error');
    }
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this === this.parent.left) {
        this.parent.left = node;
      }
      else if (this === this.parent.right) {
        thisthis.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    }
    else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }

}

function main() {
  const BST = new BinarySearchTree();

  BST.insert(3);
  BST.insert(1);
  BST.insert(4);
  BST.insert(6);
  BST.insert(9);
  BST.insert(2);
  BST.insert(5);
  BST.insert(7);

  console.log(BST);
}

// console.log(main());

// 4. What does this program do?
// Without running this code in your code editor, explain what the following 
// program does. Show with an example the result of executing this program. 
// What is the runtime of this algorithm?

function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

// adds all of the values of a tree recursively.

// this function will run O(n) since it iterates through everything.
function heightOfBST(bst) {
  let leftHeight = 0;
  let rightHeight = 0;

  if(!bst) {
    return 0;
  }
  else {
    leftHeight = heightOfBST(bst.left);
    rightHeight = heightOfBST(bst.right);
  if (leftHeight > rightHeight) {
    return leftHeight++;
  }
    else {
      return rightHeight++;
    }
  }
}

const isBst = (bst) => {
  if(!bst.key) {
    return false;
  }
  if (bst.left) {
    if (bst.left > bst.key){
      return false;
    }
    else {
      return isBst(bst.left);
    }
  }
  if (bst.right) {
    if (bst.right < bst.key) {
      return false;
    }
    else {
      return isBst(bst.right);
    }
  }
  if(bst.left && bst.right) {
    isBst(bst.left);
    isBst(bst.right);
  }
  if (!bst.left && !bst.right) return true;
}

const thirdLargestNode = tree => {
  let results = [];
  let arr = tree.split('_');

  for(let i = 0; i < arr.length - 1; i++) {
    results.push(arr[i]);
  }
  return results.sort()[results.length - 3];
}

const balanced = (bst) => {
  let leftHeight = heightOfBST(bst.left);
  let rightHeight = heightOfBST(bst.right);

  if (Math.abs(rightHeight - leftHeight) <= 1) {
    return true;
  } else if (Math.abs(rightHeight - leftHeight) > 1) {
    return false;
  }
}

// 9. Are they the same BSTs?
// You are given two arrays which represent two sequences of keys that are used 
// to create two binary search trees. Write a program that will tell whether the 
// two BSTs will be identical or not without actually constructing the tree. 
// You may use another data structure such as an array or a linked list but don't 
// construct the BST. What is the time complexity of your algorithm? 
// E.g., 3, 5, 4, 6, 1, 0, 2 and 3, 1, 5, 2, 4, 6, 0 are two sequences of arrays 
// but will create the exact same BSTs and your program should return true.

/* will consult with mentor to get clarification on final question */