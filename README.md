基础数据类型描述

```typescript
let isDone: boolean = true
```

数组类型描述

```typescript
let arrOfNumber: number[] = [1, 2, 3]
```

方法类型描述

```typescript
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
```

联合类型

```typescript
// 联合类型
let str = 'str'
let numberString: number | string //可以是字符串或者string
numberString = 1
numberString = 'string'
// 只能访问他们共有的方法和属性
numberString.toString()

// type guard 智能缩小范围方法也可以实现
function getLength2(ipt: number | string): number {
  if(typeof ipt === 'string') {
    return ipt.length
  } else {
    return ipt.toString().length
  }
}
```

元祖

```typescript
// 元祖 多种类型，push时候只能二者之一的类型
let user: [string, number] = ['1', 2]
user.push(1)
```

接口

<!--接口是对象的形状进行描述-->

<!--interface用来作为对象的静态检查-->

```typescript
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
```

类型断言<!--（我更了解字段类型情况）-->

```typescript
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
```

枚举：用于取值被限定在一定范围内的场景（三原色，一周七天等）

<!--注意：const可提升枚举效率 但仅能用于常量枚举（计算枚举等不行）-->

- 数字枚举

```typescript
enum Direction {
  up,
  down,
  left,
  right
}
console.log(Direction.up) // 0
// 可以将其看成一个数组
console.log(Direction[0]) //输出为字符串 up
```

- 字符串枚举

```typescript
const enum KeyCode {
  Left = '左',
  Right = '右',
  Top = '上',
  Bottom = '下'
}
```

泛型

`像是占位符或者变量，在使用的时候才传入类型`

```typescript
function swap<U, T>(arg: [U, T]): [T, U] {
  return [arg[1], arg[0]]
}
const result2 = swap([1, '2'])
```

泛型约束（例如只要有length属性的都可满足条件）

```typescript
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
```

