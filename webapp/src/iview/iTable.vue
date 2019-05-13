<template>
    <div>
      <h3>{{title}}</h3>
<!--      <div>-->
<!--        <h4>基础表格</h4>-->
<!--        <Table :columns="columns" :data="data"></Table>-->
<!--      </div>-->
<!--      <div>-->
<!--        <h4>带边框</h4>-->
<!--        <Table :columns="columns" :data="data" border></Table>-->
<!--      </div>-->
      <div>
        <h4>特定样式</h4>
        <Table :columns="columns" :data="data"></Table>
      </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          title: 'table',
          columns: [
            {
              title: 'Name',
              key: 'name'
            },
            {
              title: 'Age',
              key: 'age',
              // className: 'demo-columns-class-name'
              className: 'demo-table-info-column'
            },
            {
              title: 'Address',
              key: 'address'
            }
          ],
          data: [
            {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              date: '2016-10-03',
              // rowClassName: 'demo-row-class-name'
            },
            {
              name: 'Jim Green',
              age: 24,
              address: 'London No. 1 Lake Park',
              date: '2016-10-01'
            },
            {
              name: 'Joe Black',
              age: 30,
              address: 'Sydney No. 1 Lake Park',
              date: '2016-10-02'
            }
          ]
        }
      }
    }
</script>

<style lang="less">
  /*.demo-row-class-name{*/
  /*  background-color: #2db7f5;*/
  /*  color: #fff*/
  /*}*/
  /*.ivu-table .demo-columns-class-name{*/
  /*  background-color: #2db7f5;*/
  /*  color: #fff;*/
  /*}*/
  .ivu-table td.demo-table-info-column{
    background-color: #2db7f5;
    color: #fff;
  }
</style>
