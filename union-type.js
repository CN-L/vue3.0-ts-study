// 联合类型
var str = 'str';
var numberString; //可以是字符串或者string
numberString = 1;
numberString = 'string';
// 只能访问他们共有的方法和属性
numberString.toString();
// number无length属性
function getLength(ipt) {
    var str = ipt; // as为类型断言 并不是改变起类型
    console.log(str.length);
    return str.length;
}
getLength(3);
