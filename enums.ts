// 常量 不会被改变的值 ，在一定范围内
// 使用const 会提升枚举的性能 内连枚举的任何用法 并且不会把枚举编译为js代码（常量枚举才能哦）
// 数字枚举
enum Direction {
  up,
  down,
  left,
  right
}
console.log(Direction.up) // 0
// 可以将其看成一个数组
console.log(Direction[0]) //输出为字符串 up

// 字符串枚举
const enum KeyCode {
  Left = '左',
  Right = '右',
  Top = '上',
  Bottom = '下'
}
// 基本使用
const value = '左'
if(value === KeyCode.Left) {
  console.log('go up')
}