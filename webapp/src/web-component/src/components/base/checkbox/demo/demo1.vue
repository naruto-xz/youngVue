<template>
	<div>
    <np-checkbox v-model="v" :options="options" @change="change"></np-checkbox>
    {{v}}
	</div>
</template>
<script>
import npCheckbox from "../index.vue";
export default {
  components:{
    npCheckbox
  },
  data() {
    return {
      v: "yy,hx",
      options: {
      	disabled: false,
      	size:"small",  //按钮尺寸(normal / small / mini)
      	// enum: "SEX",
      	data : {
          'zq' : '足球',
          'yy' : '游泳',
          'ps' : '爬山',
          'hx' : '滑雪'
        },
      }
    };
  },
	methods: {
		change(v) {
      console.log("广播出来的值"+v);
		}
	}
};
</script>
