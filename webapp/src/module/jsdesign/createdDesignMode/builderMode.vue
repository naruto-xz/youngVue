<template>
    
</template>

<script>
    export default {
      methods: {
        test1(){
          let Human = function (params) {
            this.skill = params.skill;
            this.hobby = params.hobby;
          };
          Human.prototype = {
            getSkill: function() {
              return this.skill;
            },
            getHobby: function () {
              return this.hobby;
            }
          };

          let Factory = function () {

            let o = new Object();

          }


        }
      },
      mounted() {
        this.test1();
      }
    }
</script>

<style scoped>

</style>
