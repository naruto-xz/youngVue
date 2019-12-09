<template>
  <div>
    <button @click="a">sessionStorage</button>
    <button @click="b">localStorage</button>
  </div>
</template>

<script>
    export default {
      methods: {
        a(){
          sessionStorage.setItem('userInfo1',JSON.stringify({name: 'zs'}));
          console.log(JSON.parse(sessionStorage.getItem('userInfo1')));
          sessionStorage.removeItem('userInfo1');
        },
        b(){
          localStorage.setItem('userInfo2',JSON.stringify({age: 23}));
          console.log(JSON.parse(localStorage.getItem('userInfo2')));
          localStorage.removeItem('userInfo2');
        }
      }
    }
</script>

<style scoped>

</style>
