// .d.ts为声明文件
// 目的是给实际的业务逻辑代码提供类型 只有类型声明
// 比如interface function class等等
// declare 加变量名称 +类型
// declare function axios(url: string): string

interface IAxios {
  get: (url: string) => string
  post: (url: string, data: any) => string
}
declare const axios: IAxios