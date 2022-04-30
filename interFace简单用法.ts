// 接口是对象的形状进行描述
// interface用来作为对象的静态检查
interface Person {
  readonly id: number,
  name: string,
  age?: number //可有可无
}
let wiking: Person ={
  age: 2,
  name: '八个',
  id: 90
}
// wiking.id = 100 会报错