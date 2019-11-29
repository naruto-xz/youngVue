<template>
  <div id="intersectionObserver">
    <div class="one">
      <div v-for="(item, index) in filterData" :key="index" class="test-data">{{item.name}}</div>
      <div class="footer"></div>
    </div>
<!--    <div class="two">-->
<!--      <div v-for="(item, index) in filterData" :key="index" class="test-data">{{item.name}}</div>-->
<!--      <div class="footer"></div>&ndash;&gt;-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
         {_id: 1, area_no: 1, name: "北京大学人民医院"},
         {_id: 14, area_no: 1, name: "中医科学院西苑医院"},
         {_id: 18, area_no: 1, name: "北京世纪坛医院"},
         {_id: 20, area_no: 1, name: "北京首钢医院"},
         {_id: 28, area_no: 1, name: "北京大学肿瘤医院(本院)"},
         {_id: 29, area_no: 1, name: "北京大学肿瘤医院南院"},
         {_id: 36, area_no: 1, name: "首都儿童研究所"},
         {_id: 37, area_no: 1, name: "青云仿真环境"},
         {_id: 38, area_no: 1, name: "卫计委"},
         {_id: 49, area_no: 1, name: "北京协和医院（青云）"},
         {_id: 52, area_no: 1, name: "全国垂体疾病数据中心"},
         {_id: 54, area_no: 1, name: "医渡云演示医院"},
         {_id: 57, area_no: 1, name: "中国人民解放军第302医院"},
         {_id: 58, area_no: 1, name: "北京同仁医院（青云）"},
         {_id: 59, area_no: 1, name: "北京大学肿瘤医院（医联体）"},
         {_id: 101, area_no: 1, name: "北京中医医院"},
         {_id: 106, area_no: 1, name: "IDC1 demo演示环境"},
         {_id: 107, area_no: 1, name: "公有云(专病)"},
         {_id: 108, area_no: 1, name: "DDC(专病)"},
         {_id: 109, area_no: 1, name: "测试环境(专病)"},
         {_id: 118, area_no: 1, name: "idc仿真环境"},
         {_id: 119, area_no: 1, name: "ddc新集群"},
         {_id: 120, area_no: 1, name: "中国医学科学院肿瘤医院（公有云）"},
         {_id: 121, area_no: 1, name: "疾病数据中心adr集群"},
         {_id: 122, area_no: 1, name: "疾病数据中心research集群"},
         {_id: 124, area_no: 1, name: "dbatest"},
         {_id: 128, area_no: 1, name: "egcp数据(公有云)"},
         {_id: 129, area_no: 1, name: "针灸临床研究中心中风项目"},
         {_id: 133, area_no: 1, name: "医疗事业科研开发联调环境"},
         {_id: 134, area_no: 1, name: "首都医科大学附属北京友谊医院"},
         {_id: 135, area_no: 1, name: "ddc开发环境"},
         {_id: 142, area_no: 1, name: "中日友好医院（公有云）"},
         {_id: 143, area_no: 1, name: "DPAP外网应用"},
         {_id: 144, area_no: 1, name: "药企疾病队列中心"},
         {_id: 145, area_no: 1, name: "加速康复外科"},
         {_id: 162, area_no: 1, name: "科研演示平台"},
         {_id: 163, area_no: 1, name: "云his新测试环境"},
         {_id: 168, area_no: 1, name: "中山眼科中心"},
         {_id: 170, area_no: 1, name: "专病库公有云服务集群"},
         {_id: 173, area_no: 1, name: "开放平台测试集群1"},
        {_id: 1, area_no: 1, name: "北京大学人民医院"},
        {_id: 14, area_no: 1, name: "中医科学院西苑医院"},
        {_id: 18, area_no: 1, name: "北京世纪坛医院"},
        {_id: 20, area_no: 1, name: "北京首钢医院"},
        {_id: 28, area_no: 1, name: "北京大学肿瘤医院(本院)"},
        {_id: 29, area_no: 1, name: "北京大学肿瘤医院南院"},
        {_id: 36, area_no: 1, name: "首都儿童研究所"},
        {_id: 37, area_no: 1, name: "青云仿真环境"},
        {_id: 38, area_no: 1, name: "卫计委"},
        {_id: 49, area_no: 1, name: "北京协和医院（青云）"},
        {_id: 52, area_no: 1, name: "全国垂体疾病数据中心"},
        {_id: 54, area_no: 1, name: "医渡云演示医院"},
        {_id: 57, area_no: 1, name: "中国人民解放军第302医院"},
        {_id: 58, area_no: 1, name: "北京同仁医院（青云）"},
        {_id: 59, area_no: 1, name: "北京大学肿瘤医院（医联体）"},
        {_id: 101, area_no: 1, name: "北京中医医院"},
        {_id: 106, area_no: 1, name: "IDC1 demo演示环境"},
        {_id: 107, area_no: 1, name: "公有云(专病)"},
        {_id: 108, area_no: 1, name: "DDC(专病)"},
        {_id: 109, area_no: 1, name: "测试环境(专病)"},
        {_id: 118, area_no: 1, name: "idc仿真环境"},
        {_id: 119, area_no: 1, name: "ddc新集群"},
        {_id: 120, area_no: 1, name: "中国医学科学院肿瘤医院（公有云）"},
        {_id: 121, area_no: 1, name: "疾病数据中心adr集群"},
        {_id: 122, area_no: 1, name: "疾病数据中心research集群"},
        {_id: 124, area_no: 1, name: "dbatest"},
        {_id: 128, area_no: 1, name: "egcp数据(公有云)"},
        {_id: 129, area_no: 1, name: "针灸临床研究中心中风项目"},
        {_id: 133, area_no: 1, name: "医疗事业科研开发联调环境"},
        {_id: 134, area_no: 1, name: "首都医科大学附属北京友谊医院"},
        {_id: 135, area_no: 1, name: "ddc开发环境"},
        {_id: 142, area_no: 1, name: "中日友好医院（公有云）"},
        {_id: 143, area_no: 1, name: "DPAP外网应用"},
        {_id: 144, area_no: 1, name: "药企疾病队列中心"},
        {_id: 145, area_no: 1, name: "加速康复外科"},
        {_id: 162, area_no: 1, name: "科研演示平台"},
        {_id: 163, area_no: 1, name: "云his新测试环境"},
        {_id: 168, area_no: 1, name: "中山眼科中心"},
        {_id: 170, area_no: 1, name: "专病库公有云服务集群"},
        {_id: 173, area_no: 1, name: "开放平台测试集群2"},
        {_id: 1, area_no: 1, name: "北京大学人民医院"},
        {_id: 14, area_no: 1, name: "中医科学院西苑医院"},
        {_id: 18, area_no: 1, name: "北京世纪坛医院"},
        {_id: 20, area_no: 1, name: "北京首钢医院"},
        {_id: 28, area_no: 1, name: "北京大学肿瘤医院(本院)"},
        {_id: 29, area_no: 1, name: "北京大学肿瘤医院南院"},
        {_id: 36, area_no: 1, name: "首都儿童研究所"},
        {_id: 37, area_no: 1, name: "青云仿真环境"},
        {_id: 38, area_no: 1, name: "卫计委"},
        {_id: 49, area_no: 1, name: "北京协和医院（青云）"},
        {_id: 52, area_no: 1, name: "全国垂体疾病数据中心"},
        {_id: 54, area_no: 1, name: "医渡云演示医院"},
        {_id: 57, area_no: 1, name: "中国人民解放军第302医院"},
        {_id: 58, area_no: 1, name: "北京同仁医院（青云）"},
        {_id: 59, area_no: 1, name: "北京大学肿瘤医院（医联体）"},
        {_id: 101, area_no: 1, name: "北京中医医院"},
        {_id: 106, area_no: 1, name: "IDC1 demo演示环境"},
        {_id: 107, area_no: 1, name: "公有云(专病)"},
        {_id: 108, area_no: 1, name: "DDC(专病)"},
        {_id: 109, area_no: 1, name: "测试环境(专病)"},
        {_id: 118, area_no: 1, name: "idc仿真环境"},
        {_id: 119, area_no: 1, name: "ddc新集群"},
        {_id: 120, area_no: 1, name: "中国医学科学院肿瘤医院（公有云）"},
        {_id: 121, area_no: 1, name: "疾病数据中心adr集群"},
        {_id: 122, area_no: 1, name: "疾病数据中心research集群"},
        {_id: 124, area_no: 1, name: "dbatest"},
        {_id: 128, area_no: 1, name: "egcp数据(公有云)"},
        {_id: 129, area_no: 1, name: "针灸临床研究中心中风项目"},
        {_id: 133, area_no: 1, name: "医疗事业科研开发联调环境"},
        {_id: 134, area_no: 1, name: "首都医科大学附属北京友谊医院"},
        {_id: 135, area_no: 1, name: "ddc开发环境"},
        {_id: 142, area_no: 1, name: "中日友好医院（公有云）"},
        {_id: 143, area_no: 1, name: "DPAP外网应用"},
        {_id: 144, area_no: 1, name: "药企疾病队列中心"},
        {_id: 145, area_no: 1, name: "加速康复外科"},
        {_id: 162, area_no: 1, name: "科研演示平台"},
        {_id: 163, area_no: 1, name: "云his新测试环境"},
        {_id: 168, area_no: 1, name: "中山眼科中心"},
        {_id: 170, area_no: 1, name: "专病库公有云服务集群"},
        {_id: 173, area_no: 1, name: "开放平台测试集群3"},
        {_id: 1, area_no: 1, name: "北京大学人民医院"},
        {_id: 14, area_no: 1, name: "中医科学院西苑医院"},
        {_id: 18, area_no: 1, name: "北京世纪坛医院"},
        {_id: 20, area_no: 1, name: "北京首钢医院"},
        {_id: 28, area_no: 1, name: "北京大学肿瘤医院(本院)"},
        {_id: 29, area_no: 1, name: "北京大学肿瘤医院南院"},
        {_id: 36, area_no: 1, name: "首都儿童研究所"},
        {_id: 37, area_no: 1, name: "青云仿真环境"},
        {_id: 38, area_no: 1, name: "卫计委"},
        {_id: 49, area_no: 1, name: "北京协和医院（青云）"},
        {_id: 52, area_no: 1, name: "全国垂体疾病数据中心"},
        {_id: 54, area_no: 1, name: "医渡云演示医院"},
        {_id: 57, area_no: 1, name: "中国人民解放军第302医院"},
        {_id: 58, area_no: 1, name: "北京同仁医院（青云）"},
        {_id: 59, area_no: 1, name: "北京大学肿瘤医院（医联体）"},
        {_id: 101, area_no: 1, name: "北京中医医院"},
        {_id: 106, area_no: 1, name: "IDC1 demo演示环境"},
        {_id: 107, area_no: 1, name: "公有云(专病)"},
        {_id: 108, area_no: 1, name: "DDC(专病)"},
        {_id: 109, area_no: 1, name: "测试环境(专病)"},
        {_id: 118, area_no: 1, name: "idc仿真环境"},
        {_id: 119, area_no: 1, name: "ddc新集群"},
        {_id: 120, area_no: 1, name: "中国医学科学院肿瘤医院（公有云）"},
        {_id: 121, area_no: 1, name: "疾病数据中心adr集群"},
        {_id: 122, area_no: 1, name: "疾病数据中心research集群"},
        {_id: 124, area_no: 1, name: "dbatest"},
        {_id: 128, area_no: 1, name: "egcp数据(公有云)"},
        {_id: 129, area_no: 1, name: "针灸临床研究中心中风项目"},
        {_id: 133, area_no: 1, name: "医疗事业科研开发联调环境"},
        {_id: 134, area_no: 1, name: "首都医科大学附属北京友谊医院"},
        {_id: 135, area_no: 1, name: "ddc开发环境"},
        {_id: 142, area_no: 1, name: "中日友好医院（公有云）"},
        {_id: 143, area_no: 1, name: "DPAP外网应用"},
        {_id: 144, area_no: 1, name: "药企疾病队列中心"},
        {_id: 145, area_no: 1, name: "加速康复外科"},
        {_id: 162, area_no: 1, name: "科研演示平台"},
        {_id: 163, area_no: 1, name: "云his新测试环境"},
        {_id: 168, area_no: 1, name: "中山眼科中心"},
        {_id: 170, area_no: 1, name: "专病库公有云服务集群"},
        {_id: 173, area_no: 1, name: "开放平台测试集群4"}
      ],
      intersectionObserver: null,
      filterData: [],
      listConfig: {
        page: 0,
        size: 10
      },
    }
  },
  methods: {
    loadItems () {
      if (this.filterData.length < this.list.length) {
        let arr = this.list.slice(this.filterData.length, this.filterData.length + this.listConfig.size);
        this.filterData = this.filterData.concat(arr);
      }
    }
  },
  mounted () {
    /**
     * 以浏览器窗口为父节点的无限滚动懒加载
     */
    this.loadItems();
    let el = document.querySelector('.footer');
    let io = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio > 0) {
        this.loadItems();
      }
    });
    io.observe(el);

    /**
     * 多节点的无限滚动懒加载
     */
    // this.loadItems();
    // let els = document.querySelectorAll('.footer');
    // let io = new IntersectionObserver((entries) => {
    //   entries.forEach(item => {
    //     if (item.intersectionRatio > 0) {
    //       this.loadItems();
    //     }
    //   });
    // });
    // Array.from(els).forEach(el => {
    //   io.observe(el);
    // });
  }
}
</script>

<style scoped lang="less">
  #intersectionObserver{
    .one{
      .test-data{
        padding: 20px;
      }
    }
    .two{
      max-height: 500px;
      width: 500px;
      overflow: auto;
      background: rgba(255, 165, 0, 0.2);
      position: absolute;
      left: 50%;
      top: 0;
      .test-data{
        padding: 20px;
      }
    }
  }
</style>
