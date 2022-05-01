import calculator from "./caculator"
axios.get('url')
axios.post('url', {name: 'viking'})

// 加入项目本身是ts书写的 那么是不需要定义文件的 因为我们的ts被tsc编译时候不仅会生成js文件 还会生成.d.ts文件
calculator('minus', [1, 2])