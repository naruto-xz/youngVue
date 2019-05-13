<template>
    <div class="i-table">
      <h3>{{title}}</h3>
      <p>基础表格</p>
      <Table :columns="columns1" :data="data1"></Table>
      <p>斑马线</p>
      <Table :columns="columns1" :data="data1" stripe></Table>
      <p>带边框</p>
      <Table :columns="columns1" :data="data1" border></Table>
      <h4>特殊样式</h4>
      <p>行样式</p>
      <Table :columns="columns1" :data="data1" :row-class-name="rowClassName"></Table>
      <p>列样式</p>
      <Table :columns="columns2" :data="data2"></Table>
      <p>单元格样式</p>
      <Table :columns="columns3" :data="data3"></Table>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          title: 'table',
          columns1: [
            {
              title: 'Name',
              key: 'name'
            },
            {
              title: 'Age',
              key: 'age'
            },
            {
              title: 'Address',
              key: 'address'
            }
          ],
          data1: [
            {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              date: '2016-10-03'
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
            },
            {
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              date: '2016-10-04'
            }
          ],
          columns2: [
            {
              title: 'Name',
              key: 'name'
            },
            {
              title: 'Age',
              key: 'age',
              className: 'table-info-columns'
            },
            {
              title: 'Address',
              key: 'address'
            }
          ],
          data2: [
            {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              date: '2016-10-03'
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
            },
            {
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              date: '2016-10-04'
            }
          ],
          columns3: [
            {
              title: 'Name',
              key: 'name'
            },
            {
              title: 'Age',
              key: 'age',
            },
            {
              title: 'Address',
              key: 'address'
            }
          ],
          data3: [
            {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              date: '2016-10-03'
            },
            {
              name: 'Jim Green',
              age: 24,
              address: 'London No. 1 Lake Park',
              date: '2016-10-01',
              cellClassName: {
                age: 'table-info-cell-age',
                address: 'table-info-cell-address'
              }
            },
            {
              name: 'Joe Black',
              age: 30,
              address: 'Sydney No. 1 Lake Park',
              date: '2016-10-02'
            },
            {
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              date: '2016-10-04'
            }
          ]


        }
      },
      methods:{
        rowClassName(row,index){
          if(index == 1){
            return 'table-info-row';
          }
        }
      }
    }
</script>

<style scoped lang="less">
  .i-table{
    p{
      margin-top: 10px;
    }
    /*为了vue页面样式模块化，不对全局造成污染，建议每个页面的style标签加上scoped，表示他的样式只属于当前的页面，父组件的样式不会泄漏到子组件中。*/
    /*但是scoped也会造成一些额外的负担，如无法覆盖原有组件的样式。 可以加 /deep/  。*/
    /deep/ .table-info-row td{
      background-color: #2db7f5;
      color: #fff;
    }
    /deep/ td.table-info-columns{
      background-color: #ff6600;
      color: #fff;
    }
    /deep/ .table-info-cell-age{
      background-color: #2db7f5;
      color: #fff;
    }
    /deep/ .table-info-cell-address {
      background-color: #187;
      color: #fff;
    }


  }
</style>
