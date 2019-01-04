<template>
   <span ref="countup"></span>
</template>

<script>
  /**
   * countup.js API中的方法 var CountUp = function(target, startVal, endVal, decimals, duration, options)
     self.options = {
      useEasing: true, // toggle easing
      useGrouping: true, // 1,000,000 vs 1000000
      separator: ',',
      decimal: '.',
      easingFn: easeOutExpo,
      formattingFn: formatNumber,
      prefix: '',
      suffix: '',
      numerals: []
    };
   */
    import CountUp from "countup.js"
    export default {
      props:{
        start: {
          type: Number,
          default: 0
        },
        end: {
          type: Number,
          default: 2018
        },
        decimals: {
          type: Number,
          default: 0
        },
        duration: {
          type: Number,
          default: 2.5
        },
        options: {
          type: Object
        },
        autoplay: {
          type: Boolean,
          required: false,
          default: true
        }
      },
      data () {
        return {
          numAnim:null
        }
      },
      mounted(){
        this.initCountUp();
      },
      watch:{
        start(){
          if(this.autoplay){
            this.initCountUp();
          }
        },
        end(){
          if(this.autoplay){
            this.initCountUp();
          }
        }
      },
      methods:{
        initCountUp(){
          // this.numAnim = new CountUp(this.$refs.countup,0, 2019);   //最原始，未封装前的
          this.numAnim = new CountUp(this.$refs.countup,this.start,this.end,this.decimals,this.duration,this.options);   //简单封装后的
          this.numAnim.start();
        }
      }
    }
</script>

<style scoped>

</style>
