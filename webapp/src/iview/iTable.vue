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
    <p>固定表头</p>
    <Table height="200"  :columns="columns4" :data="data4"></Table>
    <p>固定列</p>
    <Table width="500" :columns="columns5" :data="data5"></Table>
    <p>单选</p>
    <Table :columns="columns6" :data="data6" highlight-row @on-current-change="selectCurrent"></Table>
    <p>多选</p>
    <Table :columns="columns7" :data="data7" @on-select="selectSingle" @on-select-all="selectAll" @on-selection-change="selectChange"></Table>
    <p>排序</p>
    <Table :columns="columns8" :data="data8"></Table>
    <p>帅选</p>
    <Table :columns="columns9" :data="data9"></Table>
    <p>自定义列模板</p>
    <Table :columns="columns10" :data="data10"></Table>
    <p>slot-scope用法</p>
    <Table :columns="columns11" :data="data11">
      <template slot-scope="{ row }" slot="name">
        <strong>{{row.name}}</strong>
      </template>
      <template slot-scope="{row,index}" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show1(index)">view</Button>
        <Button type="error" size="small" @click="remove1(index)">delete</Button>
      </template>
    </Table>
    <p>可展开</p>
    <Table :columns="columns12" :data="data12"></Table>

  </div>
</template>

<script>
    import iTbableRow from './iTbableRow';
    export default {
      components:{
        iTbableRow
      },
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
          ],
          columns4: [
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
          data4: [
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
            },
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
          columns5: [
            {
              title: 'Name',
              key: 'name',
              width: 100,
              fixed: 'left'
            },
            {
              title: 'Age',
              key: 'age',
              width: 100
            },
            {
              title: 'Province',
              key: 'province',
              width: 100
            },
            {
              title: 'City',
              key: 'city',
              width: 100
            },
            {
              title: 'Address',
              key: 'address',
              width: 200
            },
            {
              title: 'Postcode',
              key: 'zip',
              width: 100,
              fixed: "right"
            }
          ],
          data5: [
            {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              province: 'America',
              city: 'New York',
              zip: 100000
            },
            {
              name: 'Jim Green',
              age: 24,
              address: 'Washington, D.C. No. 1 Lake Park',
              province: 'America',
              city: 'Washington, D.C.',
              zip: 100000
            },
            {
              name: 'Joe Black',
              age: 30,
              address: 'Sydney No. 1 Lake Park',
              province: 'Australian',
              city: 'Sydney',
              zip: 100000
            },
            {
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              province: 'Canada',
              city: 'Ottawa',
              zip: 100000
            },
            {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              province: 'America',
              city: 'New York',
              zip: 100000
            },
            {
              name: 'Jim Green',
              age: 24,
              address: 'Washington, D.C. No. 1 Lake Park',
              province: 'America',
              city: 'Washington, D.C.',
              zip: 100000
            },
            {
              name: 'Joe Black',
              age: 30,
              address: 'Sydney No. 1 Lake Park',
              province: 'Australian',
              city: 'Sydney',
              zip: 100000
            },
            {
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              province: 'Canada',
              city: 'Ottawa',
              zip: 100000
            }
          ],
          columns6: [
            {
              type: 'index',
              title: '序号',
              width: 60,
              align: 'center'
              // indexMethod(row){
              //   return row._index;  //自定义序号
              // }
            },
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
          data6: [
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
              // _highlight: true 默认选中高亮
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
          columns7: [
            {
              type: 'selection',
              width: 60,
              align: 'center'
            },
            {
              title: 'Name',
              key: 'name',
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
          data7: [
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
              _checked: true  //可以默认选中当前项
            },
            {
              name: 'Joe Black',
              age: 30,
              address: 'Sydney No. 1 Lake Park',
              date: '2016-10-02',
              _disabled: true //可以禁止选择当前项。
            },
            {
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              date: '2016-10-04'
            }
          ],
          columns8: [
            {
              title: 'Date',
              key: 'date',
            },
            {
              title: 'Name',
              key: 'name'
            },
            {
              title: 'Age',
              key: 'age',
              sortable: true  //开启排序
            },
            {
              title: 'Address',
              key: 'address'
            }
          ],
          data8: [
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
          columns9: [
            {
              title: 'Date',
              key: 'date',
            },
            {
              title: 'Name',
              key: 'name'
            },
            {
              title: 'Age',
              key: 'age',
              filters: [
                {
                  label: '小于25',
                  value: 1
                },
                {
                  label: '大于等于25',
                  value: 2
                }
              ],
              filterMultiple: false,  //是否开启多选筛选模式
              filterMethod(val, row){
                if(val == 1){
                  return row.age<25
                }
                if(val == 2){
                  return row.age>=25;
                }
              }
            },
            {
              title: 'Address',
              key: 'address'
            }
          ],
          data9: [
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
          columns10: [
            {
              title: 'Name',
              key: 'name',
              render: (h, params) => {
                return h('div', [
                  h('Icon', {
                    props: {
                      type: 'md-arrow-down'
                    }
                  }),
                  h('strong', params.row.name)
                ]);
              }
            },
            {
              title: 'Age',
              key: 'age'
            },
            {
              title: 'Address',
              key: 'address'
            },
            {
              title: 'Action',
              key: 'action',
              width: 150,
              align: 'center',
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        this.show(params.index)
                      }
                    }
                  }, 'View'),
                  h('Button', {
                    props: {
                      type: 'error',
                      size: 'small'
                    },
                    on: {
                      click: () => {
                        this.remove(params.index)
                      }
                    }
                  }, 'Delete')
                ]);
              }
            }
          ],
          data10: [
            {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park'
            },
            {
              name: 'Jim Green',
              age: 24,
              address: 'London No. 1 Lake Park'
            },
            {
              name: 'Joe Black',
              age: 30,
              address: 'Sydney No. 1 Lake Park'
            },
            {
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park'
            }
          ],
          columns11: [
            {
              title: 'Name',
              slot: 'name'
            },
            {
              title: 'Age',
              key: 'age'
            },
            {
              title: 'Address',
              key: 'address'
            },
            {
              title: 'action',
              slot: 'action'
            }
          ],
          data11: [
            {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park'
            },
            {
              name: 'Jim Green',
              age: 24,
              address: 'London No. 1 Lake Park'
            },
            {
              name: 'Joe Black',
              age: 30,
              address: 'Sydney No. 1 Lake Park'
            },
            {
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park'
            }
          ],
          columns12: [
            {
              type: 'expand',
              width: 50,
              render: (h, params) => {
                return h(iTbableRow, {
                  props: {
                    row: params.row
                  }
                })
              }
            },
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
          data12: [
            {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              job: 'Data engineer',
              interest: 'badminton',
              birthday: '1991-05-14',
              book: 'Steve Jobs',
              movie: 'The Prestige',
              music: 'I Cry'
            },
            {
              name: 'Jim Green',
              age: 25,
              address: 'London No. 1 Lake Park',
              job: 'Data Scientist',
              interest: 'volleyball',
              birthday: '1989-03-18',
              book: 'My Struggle',
              movie: 'Roman Holiday',
              music: 'My Heart Will Go On',
              _expanded: true
            },
            {
              name: 'Joe Black',
              age: 30,
              address: 'Sydney No. 1 Lake Park',
              job: 'Data Product Manager',
              interest: 'tennis',
              birthday: '1992-01-31',
              book: 'Win',
              movie: 'Jobs',
              music: 'Don’t Cry'
            },
            {
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              job: 'Data Analyst',
              interest: 'snooker',
              birthday: '1988-7-25',
              book: 'A Dream in Red Mansions',
              movie: 'A Chinese Ghost Story',
              music: 'actor'
            }
          ]
        }
      },
      methods:{
        rowClassName(row,index){    //行样式
          if(index == 1){
            return 'table-info-row';
          }
        },
        selectCurrent(currentRow,oldCurrentRow){
          console.log(currentRow);  //当前行数据
          console.log(oldCurrentRow); //上一行数据
        },
        //多选
        //选中时才触发
        selectSingle(selection,currentRow){
          console.log(selection);  //已选行数据
          console.log(currentRow); //当前行数据
        },
        //全选
        selectAll(selection){
          console.log(selection);  //所有行数据
        },
        //只要点选
        selectChange(selection){
          console.log(selection); //在多选模式下有效，只要选中项发生变化时就会触发
        },
        //自定义模板
        show (index) {
          let str = `Name：${this.data10[index].name}\rAge：${this.data10[index].age}\rAddress：${this.data10[index].address}`;
          alert(str);
        },
        remove (index) {
          this.data10.splice(index, 1);
        },
        //slot-scope用法
        show1 (index) {
          let str = `Name：${this.data11[index].name}\rAge：${this.data11[index].age}\rAddress：${this.data11[index].address}`;
          alert(str);
        },
        remove1 (index) {
          this.data11.splice(index, 1);
        }
      }
    }
</script>

<style scoped lang="less">
  .i-table{
    p{
      margin-top: 10px;
      color: green;
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
