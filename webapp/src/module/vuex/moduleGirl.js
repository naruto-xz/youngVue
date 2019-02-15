const moduleGirl = {
  //控制基础数据
  state: {
    count: 0
  },
  //控制同步事件操作
  mutations: {
    increment1(state,n){
      n = n || 1;
      state.count += n;
    },
    decrease1(state){
      state.count--;
    }
  },
  //处理异步事件操作
  actions: {
    //context是提个对象，里面包含了vuex的一系列方法
    asyncIncrement(context){
      return new Promise(resolve => {
        setTimeout(()=>{
          context.commit("increment1");
          resolve();
        },3000);
      });
    }
  }
};
export default moduleGirl;
