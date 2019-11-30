<template>

</template>

<script>
export default {
  methods: {
    operator () {
      let obj = {
        name: 'zs',
        age: 23
      };
      //获取数据属性信息
      let res = Object.getOwnPropertyDescriptor(obj, 'name');
      console.log(res);
      //修改数据属性信息
      Object.defineProperty(obj, 'name', {
        configurable: false,
        writable: false,
        enumerable: false,
        value: 'lulu'
      });
      console.log(Object.getOwnPropertyDescriptor(obj, 'name')); //lulu
      delete obj.name;  //删除无效
      obj.name = 'ls';  //修改无效
      for (let key in obj) {
        console.log(key); //age
      }
      console.log(obj.name);  //lulu
    },
    operator1 () {
      // let obj = {
      //   name: 'zs',
      //   _age: 23
      // };
      // //方式一
      // Object.defineProperty(obj, 'age', {
      //   set(age) {
      //     if (this._age !== age) {
      //       this._age = age;
      //     }
      //   },
      //   get() {
      //     return this._age;
      //   }
      // });
      // obj.age = 25;
      // console.log(obj.age); //25

      let obj1 = {
        _age: 23,
        set age(v){
          this._age = v;
        },
        get age() {
          return this._age;
        }
      };
      obj1.age = 25;
      console.log(obj1);
      console.log(obj1.age);

    }
  },
  mounted () {
    // this.operator();
    this.operator1();
  }
}
</script>

<style scoped>

</style>
