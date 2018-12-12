<template>
  <div class="xui-checkbox-group xui-checkbox-style">
    <label v-for="(item,index) in items" :key="item.value" class="xui-checkbox" :class="[safeOptions.size?('xui-checkbox-'+safeOptions.size):'',{'is-disabled': cdisabled || item.disabled,'is-checked': item.checked}]">
          <span class="xui-checkbox-inner">
              <input type="checkbox" :name="name+index" :value="item.value" v-model="item.checked" @change="change(items)" :disabled="cdisabled || item.disabled" class="xui-checkbox-original"/>
          </span>
          <span class="xui-checkbox-label" v-if="item.text">{{item.text}}</span>
    </label>
  </div>

</template>
<script>
export default {
	model: {
		prop: "value",
		event: "input"
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
			name: "xui-checkbox",
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
			  this.items = $help.generateItems(this.safeOptions.data);
        this.items = this.items.map(item=>{
          var value = this.value.split(",");
          for(var i =0; i<value.length; i++){
            if(item.value == value[i]){
              item.checked = true;
            }
          }
          return item;
        });
		},
    change(items){
      var v = [];
      items.forEach((item)=>{
		    if(item.checked){
		      v.push(item.value);
        }
      });
		  v = v.join(",");
      this.$emit("input",v);  //这个地方抛父组件input能接收到的值,从而改变父组件的值
      this.$emit("change", v);  //这个抛一个触发事件
    }
	},
	mounted() {
		this.init();
    this.$watch("value", function() {   //监听选中值的变化，重现初始化并渲染界面
      this.init();
    });
		// this.$watch("options.data", function() {
		// 	this.init();
		// });
	}
};
</script>
<style lang="scss">
.xui-checkbox-group {
	$borderColor: #dcdfe6;
	$sizes: (
		(
			name: "mini",
			font: 12
		),
		(
			name: "small",
			font: 14
		),
		(
			name: "normal",
			font: 16
		)
	);
  .xui-checkbox {
    display: inline-block;
    margin: 5px 15px 5px 0px;
    &.xui-checkbox-single {
      margin: 0px;
    }
  }
	.xui-checkbox.is-checked .xui-checkbox-inner {
		background-color: #409eff;
		border-color: #409eff;
	} //禁用
	.xui-checkbox.is-disabled .xui-checkbox-inner {
		background-color: #edf2fc;
		border-color: $borderColor;
		cursor: not-allowed;
	} //禁用
	.xui-checkbox.is-disabled span.xui-checkbox-label {
		color: #c0c4cc;
		cursor: not-allowed;
	}
	.xui-checkbox.is-disabled.is-checked .xui-checkbox-inner {
		background-color: #f2f6fc;
		border-color: $borderColor;
	}
	.xui-checkbox.is-disabled.is-checked .xui-checkbox-inner:after {
		border-color: #c0c4cc;
	}
	.xui-checkbox-inner {
		vertical-align: middle;
		display: inline-block;
		position: relative;
		border: 1px solid $borderColor;
		border-radius: 2px;
		box-sizing: border-box;
		width: 14px;
		height: 14px;
		background-color: #fff;
		z-index: 1;
		transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
			background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
		-webkit-transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
			background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
	}
	.xui-checkbox-label {
		display: inline-block;
		vertical-align: middle;
	}
	.xui-checkbox-original {
		opacity: 0;
		outline: none;
		position: absolute;
		margin: 0;
		width: 0;
		height: 0;
		z-index: -1;
	}
	.xui-checkbox-inner:after {
		box-sizing: content-box;
		content: "";
		border: 1px solid #fff;
		border-left: 0;
		border-top: 0;
		height: 7px;
		left: 4px;
		position: absolute;
		top: 1px;
		transform: rotate(45deg) scaleY(0);
		width: 3px;
		transition: transform 0.15s cubic-bezier(0.71, -0.46, 0.88, 0.6) 0.05s;
		-webkit-transition: transform 0.15s cubic-bezier(0.71, -0.46, 0.88, 0.6) 0.05s;
		transform-origin: center;
	}
	.xui-checkbox.is-checked .xui-checkbox-inner:after {
		transform: rotate(45deg) scaleY(1);
		-webkit-transform: rotate(45deg) scaleY(1);
	}
	//size
	@for $i from 1 through length($sizes) {
		$item: nth($sizes, $i);
		.xui-checkbox-#{map-get($item, name)} {
			.xui-checkbox-label {
				font-size: map-get($item, font) + px;
			}
			.xui-checkbox-inner {
				width: map-get($item, font) + px;
				height: map-get($item, font) + px;
			}
			.xui-checkbox-inner:after {
				box-sizing: content-box;
				content: "";
				border: 1px solid #fff;
				border-left: 0;
				border-top: 0;
				height: map-get($item, font) / 2 + px;
				left: map-get($item, font) / 4 + px;
				position: absolute;
				top: 1px;
				transform: rotate(45deg) scaleY(0);
				width: map-get($item, font) / 2-3 + px;
				transform-origin: center;
			}
		}
	}
}
</style>
