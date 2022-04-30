// x,y参数为数字，返回为数字
let add = (x: number, y: number, z?: number): number => {
  if(typeof z === 'number') {
    return x+y+z
  }
  return x + y
}
add(1, 2, 5)
let add2: (x: number, y: number, z?: number) => number = add
// interface描述方法类型
interface Isum {
  (x:number, y:number, z?:number): number
}
let add3: Isum = add
// 思考为何add自动带了类型
// 原因：类型推断 --- ts会在没有明确指定类型时 推测一个类型