// * 当我们在业务中从后端获取数据后，需要处理和使用数据。
// * 给下这段的代码加上 TypeScript 类型声明，以便更好地使用数据。

// * ---------------- 请补充……

interface Response {
  status: number, // 返回的状态码
  message: string,  //提示的信息
  data： any     //返回的数据

};
interface requestObj {
  method: string,
  headers: object,
  body: string,
  mode: string//请求的模式
  cache: string  //只读属性
};

let requestConfig: requestObj = {
  method: 'GET',
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({'page': 1, 'size': 10}),
  mode: "cors",//请求的模式
  cache: "force-cache"  //只读属性
}

const getData = async () =>
  await fetch('https://jsonplaceholder.typicode.com/todos/', requestConfig).then((response) => response.json());

getData().then((item:Response) => console.log(item));

// * ---------------- TS 的示例

// * 如果你没用过 TS，可以试着快速学习一下

{
  // * TS 类型声明
  type MyObj = {
    id: string;
    name: string;
  };

  // * 最基本的 TS == JS 加上 类型
  const getId = (obj: MyObj): string => obj.id;

  const id = getId({ id: 'user02', name: 'LC' });
  console.log(id.startsWith('user'));
}
