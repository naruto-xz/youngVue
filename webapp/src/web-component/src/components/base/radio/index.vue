<template>
  <!--两个disabled,外面的是控制样式的，里面的是控制功能不可用的-->
  <div :class="['xui-radio-group xui-radio-group-style',safeOptions.size?('xui-radio-'+safeOptions.size):'',safeOptions.manner?('xui-radio-manner-'+safeOptions.manner):'',cdisabled?'disabled':'']">
    <!--单选按钮name是必须的，且不同单选按钮的name值要是一样的,这样才可以来回切换,value值是最终取得给后台的值-->
    <label v-for="(item,index) in items" :key="index" :class="['xui-radio']">
      <input type="radio" :name="name"  :value="item.value" :checked="value==item.value" @change="change(item.value)" :disabled="cdisabled"/>
      <!--i标签是必须的，隐藏了原来的原生单选按钮，用i便签重画一个自己想要的单选按钮样式.-->
      <i></i>
      <span v-html="item.text"></span>
    </label>
  </div>
</template>
<script>
export default {
	model: {
		prop: "value",  // 这个地方就是重新定义了外面传进来的值
		event: "input"  //这个地方就是重新定义了外面的接收事件
	},
	props: {
		options: {
			type: Object
		},
		disabled: {},
		value: {}
	},
	data() {
		return {
			name: "xui-radio",
			items: []
		};
	},
	computed: {
		safeOptions() {
			return this.options || {};
		},
		cdisabled() {
			return this.disabled === true || this.safeOptions.disabled === true;
		},
	},
	methods: {
		init() {
      this.items = $help.generateItems(this.options.data);
		},
    change(v){
       this.$emit("input",v);  //这个地方抛父组件input能接收到的值,从而改变父组件的值
       this.$emit("change", v);  //这个抛一个触发事件
    }
	},
	mounted() {
		this.init();
		// this.$watch("options.data", function() {
		// 	this.init();
		// });
		// this.$watch("options.enum", function() {
		// 	this.init();
		// });
	}
};
</script>
<style lang="scss">
  .xui-radio-group {
    display: inline-block;
    vertical-align: middle;
    $color: #409eff;
    $borderColor: #cdcdcd;
    line-height: 1;

    $sizes: (
      (name: "mini", font: 12px, circle: 12px),
      (name: "small", font: 14px, circle: 14px),
      (name: "normal", font: 16px, circle: 16px)
    );

    .xui-radio {
      padding-right: 5px;
      cursor: pointer;
      & > span {
        font-size: 14px;
        display: inline-block;
        vertical-align: middle;
      }
      input[type="radio"] {
        display: none;
      }
      input[type="radio"] + i {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        border: 1px solid $borderColor;
      }
      input[type="radio"]:checked + i {
        border: 1px solid $color;
      }
      input[type="radio"] + i:hover {
        border: 1px solid $color;
      }
      input[type="radio"] + i:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        width: 0;
        height: 0;
        border-radius: 50%;
        background: $color;
        transition: all 0.1s ease;
        -webkit-transition: all 0.1s ease;
        -moz-transition: all 0.1s ease;
      }
      input[type="radio"]:checked + i:before {
        width: 70%;
        height: 70%;
      }
    }
    // disabled
    &.disabled {
      .xui-radio {
        cursor: not-allowed;
        & > span {
          color: $borderColor;
        }
        input[type="radio"] + i:hover {
          border: 1px solid $borderColor;
        }
      }
    }
    //size
    @for $i from 1 through length($sizes) {
      $item: nth($sizes, $i);
      &.xui-radio-#{map-get($item, name)} {
        .xui-radio {
          & > span {
            font-size: map-get($item, font);
          }
          input[type="radio"] + i {
            width: map-get($item, circle);
            height: map-get($item, circle);
          }
        }
      }
    }
    //manner
    &.xui-radio-manner-button {
      .xui-radio {
        & > input[type="radio"] + i {
          display: none;
        }
        & > span {
          padding: 2px 5px;
          border-radius: 2px;
        }
        &.checked > span {
          background: $color;
          color: #fff;
        }
      }
    }
  }
</style>
