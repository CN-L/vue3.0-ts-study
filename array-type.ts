// 写法1
let arrOfNumber: number[] = [1, 2, 3]
function test() {
  console.log(arguments)
}
// 元祖 多种类型，push时候只能二者之一的类型
let user: [string, number] = ['1', 2]
user.push(1)