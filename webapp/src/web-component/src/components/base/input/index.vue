<template>
<!--	<div style="position:relative;" class="xui-input xui-input-style">
		<element-input :class="[(prependSelect||appendSelect)?'input-with-select':'',safeOptions.className]"
		@blur="blurMethod" @on-blur="blur" @focus="focusMethod" :type="type" v-model="inputValue" :maxlength="cmaxlength"
		:disabled="cdisabled" :clearable="safeOptions.clearable" :readonly="safeOptions.readonly" :placeholder="cplaceholder"
		:icon="safeOptions.icon" :size="safeOptions.size" :style="safeOptions.style">
			&lt;!&ndash; prepend &ndash;&gt;
			<span v-if="prependText" style="cursor:pointer;" slot="prepend" v-html="prependText" @click="prependClick"></span>
			<input-attach-select v-if="prependSelect" slot="prepend" v-model="prependValue" :options="safeOptions.prepend"></input-attach-select>
			&lt;!&ndash; append &ndash;&gt;
			<span v-if="appendText" style="cursor:pointer;" @click="clickButton" slot="append" v-html="appendText"></span>
			<input-attach-select v-if="appendSelect" slot="append" v-model="appendValue" :options="safeOptions.append"></input-attach-select>
			<el-button slot="append" :class="safeOptions.icon" v-if="safeOptions.icon" @click="clickButton" class='inputIcon'></el-button>
		</element-input>
		&lt;!&ndash; tips &ndash;&gt;
		<div class="xui-tips" v-show="showTips" v-if="tips" v-html="tips"></div>
	</div>-->


  <div>
    <!--不用注册组件，直接用element-ui的el的内置名。-->
    <el-input :class="[(prependSelect||appendSelect)?'input-with-select':'',safeOptions.className]"
              :size="safeOptions.size" :style="safeOptions.style" :icon="safeOptions.icon"
              :type="type" v-model="inputValue" :placeholder="cplaceholder" :disabled="cdisabled" :readonly="safeOptions.readonly" :maxlength="cmaxlength"
              @focus="focusMethod" @blur="blurMethod">
      <!-- prepend -->
      <!--具名插槽slot，给具体要替换的子＜slot>元素指定一个name，那么替换时就只会替换那个子的div内容。-->
      <span v-if="prependText" style="cursor:pointer;" slot="prepend" v-html="prependText" @click="prependClick"></span>
      <!--<input-attach-select v-if="prependSelect" slot="prepend" v-model="prependValue" :options="safeOptions.prepend"></input-attach-select>-->
    </el-input>



    <!--<element-input-->
      <!-- prepend -->
      <!--<span v-if="prependText" style="cursor:pointer;" slot="prepend" v-html="prependText" @click="prependClick"></span>-->
      <!--<input-attach-select v-if="prependSelect" slot="prepend" v-model="prependValue" :options="safeOptions.prepend"></input-attach-select>-->
      <!-- append -->
      <!--<span v-if="appendText" style="cursor:pointer;" @click="clickButton" slot="append" v-html="appendText"></span>-->
      <!--<input-attach-select v-if="appendSelect" slot="append" v-model="appendValue" :options="safeOptions.append"></input-attach-select>-->
      <!--<el-button slot="append" :class="safeOptions.icon" v-if="safeOptions.icon" @click="clickButton" class='inputIcon'></el-button>-->
    <!--</element-input>-->
    <!-- tips -->
    <!--<div class="xui-tips" v-show="showTips" v-if="tips" v-html="tips"></div>-->
  </div>


</template>
<script>
// import { Input } from "element-ui";
// import Sunset from "../../../common/sunset";

// import inputAttachSelect from "../select";

export default {
	// components: {
	// 	elementInput: Input,
	// 	// inputAttachSelect
	// },
	model: {
		prop: "value",
		event: "input"
	},
	props: {
		options: {
			type: Object
		},
		// formOptions: {
		// 	type: Object
		// },
		value: {},
		placeholder: {},
    disabled: {},
    maxlength: {}
	},
	data() {
		return {
			// prependItems: [],
			// appendItems: [],
			inputValue: "",
			// prependValue: void 0,
			// appendValue: void 0,
			// lock: false,
			// valueLock: false,
			inited: false,
			showTips: false
		};
	},
	computed: {
		safeOptions() {
			return this.options || {};    //提供一个安全的配置处理，当最外层没配options时，返回一个空对象，其它对象取得时候就不会报错了.
		},
		type() {
			return (this.safeOptions.type == "input" || this.safeOptions.type == "number" ? "text" : this.safeOptions.type) || "text";
		},
	// 	isNumber() {
	// 		return this.safeOptions.widget == "number" || this.safeOptions.type == "number";
	// 	},
	// 	digits() {
	// 		return this.safeOptions.digits || 0;
	// 	},
		cplaceholder() {
			return this.placeholder || this.safeOptions.placeholder || "";
		},
    cdisabled() {
      return this.disabled === true || this.safeOptions.disabled === true;
    },
		cmaxlength() {
			return this.maxlength || this.safeOptions.maxlength;
		},
		prependText() {
			return this.safeOptions.prepend && $toolkit.isString(this.safeOptions.prepend) ? this.safeOptions.prepend : false;
		},
		prependSelect() {
			return this.safeOptions.prepend && $toolkit.isObject(this.safeOptions.prepend) ? this.safeOptions.prepend : false;
		},
	// 	prependSpliter() {
	// 		return (this.prependSelect && this.prependSelect.spliter) || ",";
	// 	},
	// 	appendText() {
	// 		return this.safeOptions.append && Sunset.isString(this.safeOptions.append)
	// 			? this.safeOptions.append
	// 			: false;
	// 	},
		appendSelect() {
			return this.safeOptions.append && $toolkit.isObject(this.safeOptions.append) ? this.safeOptions.append : false;
		},
	// 	appendSpliter() {
	// 		return (this.appendSelect && this.appendSelect.spliter) || ",";
	// 	},
	// 	defaultPrependValue() {
	// 		if (this.prependSelect) {
	// 			return this.prependSelect.default == null ? null : this.prependSelect.default;
	// 		}
	// 		return null;
	// 	},
	// 	defaultAppendValue() {
	// 		if (this.appendSelect) {
	// 			return this.appendSelect.default == null ? null : this.appendSelect.default;
	// 		}
	// 		return null;
	// 	},
	// 	tips() {
	// 		return this.safeOptions.tips && Sunset.isString(this.safeOptions.tips) ? this.safeOptions.tips : false;
	// 	}
	},
	methods: {

		// clickButton() {
		// 	if (this.safeOptions.appendClick) {
		// 		var res = this.safeOptions.appendClick(this.value, this.safeOptions, this.formOptions);
		// 		if (Sunset.isString(res)) {
		// 			this.valueToInputValue(res);
		// 		}
		// 	}
		// },
		prependClick() {
			if (this.safeOptions.prependClick) {
				this.safeOptions.prependClick(this.value, this.safeOptions);
			}
		},
		init() {
			// this.inited = false;
			this.valueToInputValue(this.value);
			this.inited = true;
		},
		slientRefreshValue() {
			this.$nextTick(() => {
				// this.lock = true;
				// var value = this.inputValue ? `${this.prependSelect ? `${(this.prependValue || "") + this.prependSpliter}` : ""}${this.inputValue}${this.appendSelect ? `${(this.appendSpliter || "") + this.appendValue}` : ""}`
				// 		: this.inputValue;
				this.$emit("input", this.inputValue);
				// if (value != this.value) {
				// 	this.$emit("change", value);
				// }
				// this.$nextTick(() => {
				// 	this.lock = false;
				// });
			});
		},
		blurMethod() {
			this.showTips = false;
			this.$emit("blur");
		},
		focusMethod() {
			this.showTips = true;
			this.$emit("focus");
		},
		// changePrepend(v) {
		// 	if (!this.valueLock) {
		// 		var change = this.prependSelect && this.prependSelect.onChange;
		// 		if (change === "CLEAR") {
		// 			this.inputValue = "";
		// 		} else if (Sunset.isFunction(change)) {
		// 			change.apply(null, [v, this.value]);
		// 		}
		// 	}
		// },
		// changeAppend(v) {
		// 	if (!this.valueLock) {
		// 		var change = this.appendSelect && this.appendSelect.onChange;
		// 		if (change === "CLEAR") {
		// 			this.inputValue = "";
		// 		} else if (Sunset.isFunction(change)) {
		// 			change.apply(null, [v, this.value]);
		// 		}
		// 	}
		// },
		valueToInputValue(v) {
			v = v === undefined || v === null ? "" : v + "";
			// if (!this.lock) {
				// this.valueLock = true;
				//拆出前缀
				// if (this.defaultPrependValue != null) {
				// 	this.prependValue = this.defaultPrependValue;
				// }
				// if (this.prependSelect && ~v.indexOf(this.prependSpliter)) {
				// 	this.prependValue = v.substring(0, v.indexOf(this.prependSpliter));
				// 	v = v.substring(v.indexOf(this.prependSpliter) + this.prependSpliter.length, v.length);
				// }
				//拆出后缀
				// if (this.defaultAppendValue != null) {
				// 	this.appendValue = this.defaultAppendValue;
				// }
				// if (this.appendSelect && ~v.indexOf(this.appendSpliter)) {
				// 	this.appendValue = v.substring(
				// 		v.indexOf(this.appendSpliter) + this.prependSpliter.length,
				// 		v.length
				// 	);
				// 	v = v.substring(0, v.indexOf(this.appendSpliter));
				// }
				this.inputValue = v;
				// this.$nextTick(() => {
				// 	this.valueLock = false;
				// });
			// }
		}
	},
	mounted() {
		this.init();
	},
	watch: {
		inputValue() {
			this.slientRefreshValue();    //监测到当前inputValue值变化，就广播给外面的父组件来用,变相实现了双向数据绑定
		},
		// prependValue(v, oldv) {
		// 	this.changePrepend(v);
		// 	this.slientRefreshValue();
		// },
		// appendValue(v, oldv) {
		// 	this.changeAppend(v);
		// 	this.slientRefreshValue();
		// },
		value(v) {
			this.valueToInputValue(v);      //监测到外面传进来的value值变化，就赋值给当前inputValue,变相实现了双向数据绑定
		}
	}
};
</script>

<style lang="less">
/*inputIcon {*/
	/*[class*=" el-icon-"],*/
	/*[class^="el-icon-"] {*/
		/*font-size: 28px;*/
		/*font-weight: bold;*/
		/*color: #20a0ff;*/
	/*}*/
/*}*/
/*.el-input-group__append {*/
	/*.el-button {*/
		/*background: #fff;*/
		/*padding: 5px 20px;*/
		/*vertical-align: top;*/
	/*}*/
/*}*/
.el-input {
	.el-input__inner {    //默认设置input的高度为30
		height: 30px;
		line-height: 30px;
	}
}
/*.el-select .el-input .el-select__caret {*/
	/*line-height: 1;*/
/*}*/
</style>
