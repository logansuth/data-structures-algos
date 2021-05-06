function invertBinaryTree(tree) {
  if (tree.left) invertBinaryTree(tree.left);

  if (tree.right) invertBinaryTree(tree.right);

  const placeholder = tree.left;
  tree.left = tree.right;
  tree.right = placeholder;
}

invertBinaryTree(new Tree(3));

class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
