console.log('a');
new Promise(resolve => {
  console.log('b');
  resolve();
}).then(()=>{
  console.log('c');
});
setTimeout(()=>{
  console.log('d')
}, 1000);
function f() {
  console.log('e');
}
f();

//abecd
