export default {
  data(){
    return {
      text: "混入数据",
      title: "谁优先，原数据优先"
    }
  },
  methods: {
    eat(){
      console.log("吃香蕉");
    },
    drink(){
      console.log("喝饮料");
      console.log(this.title);  //用的是原组件的数据源
    },
  },
  created(){
    console.log("先调用混入的钩子函数");
  }
}
