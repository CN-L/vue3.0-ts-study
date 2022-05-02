import { type } from "jquery"

const a: Array<number> = [1,2,3]
const date = new Date()
date.getTime()
const reg = /abc/
reg.test('abc')
Math.pow(2, 3)
let htmlBody = document.body
let alllis = document.querySelectorAll('li')
document.addEventListener('click', (e)=> {
  e.preventDefault()
})


interface IsPerson {
 name: string,
 age: number
}
let lining: IsPerson = {
  name: '李宁',
  age: 89
}
// Partial使得传入的类型都变成了可选
type IPartial = Partial<IsPerson>
let zsan: IPartial = {
  name: '李宁'
} 
// Omit除去类型中的某一项
type Iomit = Omit<IsPerson, 'name'>
let viking: Iomit = {
  age: 90,
}