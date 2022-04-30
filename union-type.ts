// 联合类型
let str = 'str'
let numberString: number | string //可以是字符串或者string
numberString = 1
numberString = 'string'
// 只能访问他们共有的方法和属性
numberString.toString()
// number无length属性
function getLength(ipt: number | string): number {
  const str = ipt as string // as为类型断言 并不是类型转换 把它断言为联合类型不存在的类型是会出错的
  if(str.length) {
    return str.length
  } else {
    return str.toString().length
  }
}
getLength(3)

// type guard 智能缩小范围方法也可以实现
function getLength2(ipt: number | string): number {
  if(typeof ipt === 'string') {
    return ipt.length
  } else {
    return ipt.toString().length
  }
}