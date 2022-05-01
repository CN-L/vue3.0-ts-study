import calculator from 'caculator';
// axios.post('url', {name: 'viking'})

// 加入项目本身是ts书写的 那么是不需要定义文件的 因为我们的ts被tsc编译时候不仅会生成js文件 还会生成.d.ts文件
// 所有声明文件都在@types里面 我们也可以自己写一个第三方插件的声明文档放在里面
// 例如
// calculator('minus', [1, 2])
calculator.plus([1, 2])