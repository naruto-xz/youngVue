const moduleBoy = {
  //控制基础数据
  state: {
    count: 0
  },
  //控制同步事件操作
  mutations: {
    increment(state,n){
      n = n || 1;
      state.count += n;
    },
    decrease(state){
      state.count--;
    }
  },
  //处理异步事件操作 （mutations与actions看起来很相似，涉及改变数据的就用mutations,涉及业务逻辑的就用actions）
  actions: {
    //context是提个对象，里面包含了vuex的一系列方法
    asyncIncrement(context){
      return new Promise(resolve => {
        setTimeout(()=>{
          context.commit("increment");
          resolve();
        },3000);
      });
    }
  }
};
export default moduleBoy;
