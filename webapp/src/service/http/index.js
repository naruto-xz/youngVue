import axios from "axios";
window.$http = function (options) {
  var url = options.url;
  var method = (options.type || options.method || "get").toLowerCase();
  var data = options.data;
  var config = {
    url: url,
    method: method,
    data: data
  };
  if (method == "get") {
    config.params = data;   //get使用的是params, post使用的是data
  }
  var headers = {};
  if (options.formdata) {
    headers["Content-Type"] = "application/x-www-form-urlencoded";
  }else {
    headers["Content-Type"] = "application/json;charset=UTF-8";
  }
  // headers.tokenId = Sunset.getCookie("tokenId"); //获取tokenId 请求的时候要带上
  config.headers = headers;
  if(options.responseType){
    config.responseType = options.responseType;
  }
  return axios(config).then(res=>{
    var result = res.data;
    if (result.code) {
      if (result.code == 200) {
        return result.data ? result.data : result;
      } else if (result.code === 401) {
        // $tip("登录超时");
        // $router.push("/login");
      } else {
        // var err = new Error(result.data && result.data.message);
        // $tip(err.message, "error");
        // throw err;
      }
    } else {
      return result;  //不调用接口请求时返回这里
    }
  })
};
export default window.$http;
