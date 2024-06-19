

const Jay = require("lodash");
const items = [1,[2, [3, [4,[5]]]]]

const newItems = Jay.flattenDeep(items);
console.log(newItems);