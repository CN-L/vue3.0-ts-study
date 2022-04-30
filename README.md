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

类型断言

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

