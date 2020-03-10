<template>

</template>

<script>
export default {
  methods: {
    operator(){
      let arr = [2,8,16,4,7,3,9];
      for(let i = 0; i<arr.length; i++){  //2。控制一共需要的轮数
        for (let j = 0; j<arr.length - i - 1; j++) {  //1.循环一轮找出当前最大的 (已经确定的就没必要再循环进来了)
          if (arr[j]>arr[j+1]) {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
          }
        }
      }
      console.log(arr);
    }
  },
  mounted() {
    this.operator();
  }
}
</script>

<style scoped>

</style>
