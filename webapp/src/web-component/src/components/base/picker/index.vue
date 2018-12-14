<template>
	<!--<div v-show="visible" :class="['xui-picker xui-picker-style']" @click.stop="emptyClick">-->
		<!--<picker-scroll ref="scroll">-->
			<!--<slot></slot>-->
		<!--</picker-scroll>-->
	<!--</div>-->

  <div v-if="inited">

  </div>

</template>
<script>
// import Popper from "./popper.js";
// import pickerScroll from "../scroll";
// import offset from "src/tools/offset";

export default {
	// components: {
	// 	pickerScroll
	// },
	props: {
		// placement: {
		// 	type: String,
		// 	default: "bottom-start"
		// },
		fixed: {}
	},
	data() {
		return {
			inited: false,
			visible: false,
			popper: null
		};
	},
	methods: {
		init() {
			if (!this.$parent.$refs.reference) {
				console.error(`未找到picker挂载目标，请在父组件中指定：ref="reference"`);
			}
			// this.$el.style.width = this.$el.parentNode.clientWidth + "px";
			if (this.popper) {
				this.$nextTick(() => {
					this.popper.update();
					this.popperStatus = true;
				});
			} else {
				this.$nextTick(() => {
					this.popper = new Popper(this.$parent.$refs.reference, this.$el, {
						placement: this.placement,
						modifiers: {
							computeStyle: {
								gpuAcceleration: false
							},
							preventOverflow: {
								boundariesElement: "window"
							}
						},
						onCreate: () => {
							this.resetTransformOrigin();
							this.$nextTick(() => {
								this.popper.update();
							});
						},
						onUpdate: () => {
							this.resetTransformOrigin();
						}
					});
					this.$nextTick(() => {
						this.visible = true;
					});
				});
			}
		},
		update() {
			this.popper && this.popper.update();
		},
		resetTransformOrigin() {
			if (this.popper && this.popper.popper) {
				let x_placement = this.popper.popper.getAttribute("x-placement");
				console.log(x_placement);
				// let placementStart = x_placement.split("-")[0];
				// let placementEnd = x_placement.split("-")[1];
				// const leftOrRight = x_placement === "left" || x_placement === "right";
				// if (!leftOrRight) {
				// 	this.popper.popper.style.transformOrigin =
				// 		placementStart === "bottom" || (placementStart !== "top" && placementEnd === "start")
				// 			? "center top"
				// 			: "center bottom";
				// }
				// var el = this.$parent.$refs.reference;
				// var of = offset(el);
				// var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
				// var windowTop = $(el).offset().top;
				// console.log(`${windowTop} --- ${el.clientHeight} --- ${window.innerHeight}`)
				// if(windowTop+el.clientHeight>=window.innerHeight){
				// 	el.style.bottom = "0"
				// 	el.style.top = "auto"
				// }else{
				// 	el.style.bottom = "auto"
				// 	el.style.top = "0px"
				// }
			}
			// this.popper.popper.style.top = "0px";
		},
		toggle() {
			if ((this.inited = !this.inited)) {
				this.$nextTick(() => {
					this.init();
					document.addEventListener("click", this.closeDropdown);
				});
				return true;
			} else {
				document.removeEventListener("click", this.closeDropdown);
				this.popper = null;
				this.visible = false;
				return false;
			}
		},
		closeDropdown() {
			this.inited = false;
			this.visible = false;
			document.removeEventListener("click", this.closeDropdown);
			this.popper = null;
		},
		emptyClick() {}
	},
	mounted() {
		if (this.fixed) {
		  debugger;
			document.body.appendChild(this.$el);
		}
	},
	beforeDestroy() {
		var el = this.$el;
		if(el){
			if(el.remove){
				el.remove();
			}
		}
	},
	// watch: {
	// 	visible(v) {
	// 		this.$emit("visible", v);
	// 	}
	// }
};
</script>
<style lang="scss">
/*@import "~style/variable.scss";*/

.xui-picker {
	min-width: inherit;
	overflow: auto;
	margin-top: 2px;
	padding: 0px;
	background-color: #fff;
	box-sizing: border-box;
	border-radius: 4px;
	box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
	position: absolute;
	z-index: 1000;
}
</style>

