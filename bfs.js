function bfs(node) {
  const queue = [node];
  const finalArray = [];

  while (queue.length) {
    const currNode = node.shift();
    finalArray.push(currNode.name);

    for (const child of currNode.children) {
      queue.push(child);
    }
  }

  return finalArray;
}

console.log(bfs());
