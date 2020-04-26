let tree = {
  "tagName": "ul",
  "props": {
  "className": "list",
    "data-name": "jsontree"
  },
  "children": [
    {
      "tagName": "li",
      "children": [
        {
          "tagName": "img",
          "props": {
            "src": "//img.alicdn.com/tps/TB1HwXxLpXXXXchapXXXXXXXXXX-32-32.ico",
            "width": "16px"
          }
        }
      ]
    },
    {
      "tagName": "li",
      "children": [
        {
          "tagName": "a",
          "props": {
            "href": "https://www.aliyun.com",
            "target": "_blank"
          },
          "children": "阿里云"
        }
      ]
    }
  ]
};
function getStr(tree){
  const {tagName,props,children} = tree;
  const element = document.createElement(tagName);
  for(let key in props){
    element[key]=props[key];
  }
  if(children && typeof(children)==="object"){
    for(let i=0;i<children.length;i++){
      element.appendChild(getStr(children[i]));
    }
  }else{
    if(children){
      element.appendChild(document.createTextNode(children));
    }
  }
  return element;
}
console.log(getStr(tree));

