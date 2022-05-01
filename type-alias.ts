// 类型别名 以往我们需要写一长串
let sum: (x:number, y:number)=> number
const sub1 = sum(1, 80)

// 现在我们只需要：（类似于一种快捷方式）
type PlusType = (x:number, y: number) => number
let sum2: PlusType
const sub2 = sum2(9, 8)


type StrOrNumber = string | number
let result3: StrOrNumber = 123
result3 = '234'

type DirectionWhere = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere: DirectionWhere = 'Left'
// 交叉类型 &符 既有name属性 也有age属性
// 有点类似extends
interface IName {
  name: string
}
type Iperson = IName & {age: number}
let personName: Iperson = {
  name: '李云龙',
  age: 10
}
// 字面量
const strKey: 'name' = 'name'// 这种写法使得name
const numberKey: 1 = 1 //numer只能是1