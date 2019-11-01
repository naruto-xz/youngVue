<template>
    <div>loading</div>
</template>

<script>
    export default {
        name: "loading"


    // {
    //   "simple": {
    //   "abstract": {
    //     "contents": "待标注数据"
    //   },
    //   "contents": {
    //     "name": "右上肢感觉减退",  //表示要标注的医学术语
    //     "config": {
    //       "api": {  //表示远程搜索时对应的url
    //         "search": "url1",
    //         "relation": "url2",
    //         "type": 'url3'
    //       },
    //       "recommendOptions": [ //表示机器推荐的选项
    //         {
    //           "id": 1,
    //           "entityName": "咽扁桃体",
    //           "entityCode": "001",
    //           "directionName": "上位",
    //           "directionVal": "top",
    //           "typeName": "hasComponent",
    //           "typeVal": "type"
    //         },
    //         {
    //           "id": 2,
    //           "entityName": "增殖体",
    //           "entityCode": "002",
    //           "directionName": "下位",
    //           "directionVal": "bottom",
    //           "typeName": "noComponent",
    //           "typeVal": "type"
    //         }
    //       ]
    //     }
    //   }
    //  }
    // }


    // {
    //   "simple": {
    //   "abstract": {
    //     "contents": "待标注数据"
    //   },
    //   "contents": "右上肢感觉减退",
    //     "schema": {
    //     "data_type": "object",
    //       "properties": [
    //       {
    //         "data_type": "object",
    //         "input_type": "checkbox",
    //         "options": [
    //           {
    //             "entityName": "咽扁桃体",
    //             "entityCode": "001",
    //             "directionName": "上位",
    //             "directionVal": "top",
    //             "typeName": "hasComponent",
    //             "typeVal": "type"
    //           },
    //           {
    //             "entityName": "增殖体",
    //             "entityCode": "002",
    //             "directionName": "下位",
    //             "directionVal": "bottom",
    //             "typeName": "noComponent",
    //             "typeVal": "type"
    //           }
    //         ]
    //       }
    //     ]
    //   }
    //  }
    // }



      // result: [
      //   {
      //     id: 1, //有id代表是推荐数据
      //     entityName: 'name',  //实体名称值
      //     entityCode: '001', //实体名称对应的字典编码
      //     directionName: "上位",  //关系方向名称
      //     directionVal: "top",  //关系方向值
      //     typeName: "hasComponent", //关系类型名称
      //     typeVal: "typeVal" //关系类型值
      //   },
      //   {
      //     entityName: "脊椎",  //实体名称值
      //     entityCode: "002", //实体名称对应的字典编码
      //     entityType: "dict", //字典类型
      //     directionName: "同义词", //关系方向名称
      //     directionVal: "some", //关系方向值
      //     typeName: "全称", //关系类型名称
      //     typeVal: "s:hasFullSpecifiedName" //关系类型值
      //   },
      //   {
      //     entityName: "自定义名称",  //实体名称值
      //     entityCode: "",   //实体名称对应的字典编码,自定义下为空
      //     entityType: "definite", //自定义类型
      //     directionName: "上位词", //关系方向名称
      //     directionVal: "parent", //关系方向值
      //     typeName: "全称", //关系类型名称
      //     typeVal: "s:hasFullSpecifiedName" //关系类型值
      //   }
      // ]


      // result: {
      //     recommendVal: ['value1', 'value2'],
      //     otherVal: [
      //       {
      //         entityName: 'name1',  //实体名称值
      //         entityType: "dictionary", //dictionary代表是字典检索出来的值
      //         direction: "direction1",  //关系方向值
      //         type: "type1" //关系类型值
      //       },
      //       {
      //         entityName: 'name2',  //实体名称值
      //         entityType: "definite", //definite代表是自定义出来的值
      //         direction: "direction2",  //关系方向值
      //         type: "type2" //关系类型值
      //       }
      //     ]
      // }


    // {
    //   "simple": {
    //   "abstract": {
    //     "contents": "待标注数据"
    //   },
    //   "contents": "右上肢感觉减退",
    //   "schema": {
    //     "data_type": "object",
    //       "properties": [
    //       {
    //         "data_type": "array",
    //         "input_type": "checkbox",
    //         "options": [
    //           {
    //             "name": "咽扁桃体-同义",
    //             "value": ["name1","dictionary1","direction1","type1"]
    //           },
    //           {
    //             "name": "增殖体-下位-hasComponent",
    //             "value": ["name2","dictionary2","direction2","type2"]
    //           }
    //         ]
    //       }
    //     ]
    //   }
    //  }
    // }


    }
</script>

<style scoped>

</style>
