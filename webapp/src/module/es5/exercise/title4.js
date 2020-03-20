//手撕一个跨域jsonp
function jsonp({url, params, cb}) {
  return new Promise(resolve => {
    let script = document.createElement('script');  //1.创建标签
    window[cb] =  function(data){ //6.执行绑定的全局函数
      resolve(data);
      document.body.removeChild(script); //7.删除创建的跨域标签
    };
    params = {...params, cb}; //2.这一步要把回掉函数拼接进去用来执行
    let arr = [];
    for(key in params){
      arr.push(`${key}=${params[key]}`) //3.处理参数
    }
    script.src = `${url}?${arr.join('&')}`; //4.拼接src   //最后想要的链接是:www.baidu.com?prod=pc&wd=b&cb=show
    document.body.appendChild(script);  //5.插入到页面
  });
}
jsonp({
  url: 'https://www.baidu.com/sugrec',
  params: {prod: 'pc', wd: 'b'},
  cb: 'show'
}).then(data => {
  console.log(data);  //{q: "b"}
});

