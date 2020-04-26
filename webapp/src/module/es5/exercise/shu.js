let tree = [
  {
    title: 'parent 1',
    expand: true,
    children: [
      {
        title: 'parent 1-1',
        expand: true,
        children: [
          {
            title: 'leaf 1-1-1'
          },
          {
            title: 'leaf 1-1-2'
          }
        ]
      },
      {
        title: 'parent 1-2',
        expand: true,
        children: [
          {
            title: 'leaf 1-2-1'
          },
          {
            title: 'leaf 1-2-1'
          }
        ]
      }
    ]
  }
];
//获取该树形结构里面所有的title
let arr = [];
tree.forEach(item=>{
  arr.push(item.title);
  loop(item);
});
function loop(item) {
  if (!item.children || !item.children.length) {
    return;
  }
  item.children.forEach(val => {
    arr.push(val.title);
    loop(val);
  });
}
console.log(arr);


