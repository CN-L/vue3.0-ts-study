// 场景：定义echo函数，接收一个参数并返回那个参数，如果不定义类型，返回any，则失去ts的作用
// 如果定义传入number类型 返回number类型 则传入字符串会报错
//泛型就来解救我们了 --在定义函数的时候不指定类型 而是在使用的时候定义类型
// <T>是名称 叫啥都行
function echo<T>(arg: T): T {
  return arg
}
const result: string = echo('123')

// 元祖 -- 例如想破坏元祖的顺序类型
function swap<U, T>(arg: [U, T]): [T, U] {
  return [arg[1], arg[0]]
}
const result2 = swap([1, '2'])

// 泛型深入 不包含length属性怎么办 （约束泛型 约定条件extends关键词）
// 只要包含length属性就可以了
interface LAndKey {
  length: number
}
function echoWithLength<T extends  LAndKey>(arg: T): T {
  console.log(arg.length)
  return arg
}
const arrs = echoWithLength('234')
const arrs1 = echoWithLength({length: 90})

// 泛型在类的使用
class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}
const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())
// 接口的灵活运用 不确定是什么类型时 也可以使用泛型约束
interface KeyPair<T, U> {
  key: T
  value: U 
}
let kp1: KeyPair<number, string> = {
  key: 1,
  value: '大家好'
}
let kp2: KeyPair<string, number>= {
  key: '9',
  value: 9
}
let arr:Array<number> = [1, 9]
let arr1: number[] = [1, 3]