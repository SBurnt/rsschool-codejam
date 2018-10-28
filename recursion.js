function recursion(tree) {
  if (!tree) {
    return "Error. Repeat pliz";
  }

  const rezArr = [];

  function traverse(node, lvl) {
    if (!rezArr[lvl]) rezArr[lvl] = [];
    rezArr[lvl].push(node.value);
    const level = lvl + 1;
    if (node.left) traverse(node.left, level);
    if (node.right) traverse(node.right, level);
  }
  traverse(tree, 0);
  console.log(rezArr);
  return rezArr;
}
const tree = {
  value: 100,
  left: {
    value: 90,
    left: { value: 70 },
    right: { value: 99 }
  },
  right: {
    value: 120,
    left: { value: 110 },
    right: { value: 130 }
  }
};
recursion(tree);
