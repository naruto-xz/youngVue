
  //1.debounce 方法
  function debounce(fn, delay){
    var timer;
    return function(){
      var context = this;
      var args = arguments;
      //下面这句是核心作用，就是就清除定时器，以保证不执行 fn，从而起到函数防抖的作用；我们项目中时常用函数节流的方式，声明一个变量当标志位，判断是否执行，然后直接return掉。
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args)
      }, delay)

    }
  }

  // 2.实现类的继承
  // 实现 Animal 类，具备 `sleep` 方法
  // 实现 Person 类继承自 Animal, 具备 `sayHello` 方法

  //直接先用es6的class类写了，比es5继承写起来要顺手的多。（一：子类可以继承父类的静态方法;二：父类的属性和方法没有显示声明，其实都是定义在了原型上）
  class Animal {
    sleep(){
      console.log('Sleep Zzz~');
    }
    static sayHello(){
      console.log('Hello, I\'m John, I\'m 18 ages old.');
    }
  }
  class Person extends Animal{};
  var person = new Person();
  person.sleep();
  Person.sayHello();
  console.log(person instanceof Animal);
  console.log(person instanceof Person);


  // 3.编写一个简单的事件监听处理器  (这个直接想，暂时没想出来，下来花半个小时琢磨研究一下)
  // 1. 具备 on 方法绑定事件
  // 2. 具备 off 方法解绑事件
  // function EventEmitter () {
  //
  // }
  // var emitter = new EventEmitter();
  // emitter.on('foo', function (e) {
  //   console.log('foo event: ', e);
  // });
  // emitter.on('*', function (e, type) {
  //   console.log('some event: ', e, type);
  // });
  // function onBar (e) {
  //   console.log('bar event: ', e);
  // }
  // emitter.on('bar', onBar);
  // emitter.emit('foo', { name: 'John' });
  // emitter.emit('bar', { name: 'John' });
  // emitter.off('bar', onBar);
  // emitter.emit('foo', { name: 'John' });
  // emitter.emit('bar', { name: 'John' });


  // 4.请写出快速排序  (第一个想到的就是冒泡排序，所以快快的写了一个冒泡排序，最早了解java算法的时候还有插入排序，选择排序，二分查找等)

  //冒泡排序
  function quick(arr) {
    for(var i=0; i<arr.length-1; i++){
      for(var j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
          var temp=arr[i];
          arr[i]=arr[j];
          arr[j]=temp;
        }
      }
    }
    return arr;
  }
  var arr = [4, 7, 87, 34, 56, 69, 19, 26, 7, 9, 33];
  var res = quick(arr);
  console.log(res);

  //快速排序
  function quicksort(arr) {
    if (arr.length <= 1){
      return arr;
    }
    var index = Math.floor(arr.length / 2);
    var flag = arr.splice(index,1)[0]; //找基准这步很重要
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] <= flag) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quicksort(left).concat([flag], quicksort(right));
  }
  var array = [4, 7, 87, 34, 56, 69, 19, 26, 7, 9, 33];
  var result = quicksort(array);
  console.log(result);


