/*
* TypeScript的两种声明空间
* */

// 1。变量声明空间 var | function | let | const | class
// 2。类型声明空间 interface | type | class

// interface和type的区别
// type 可以声明基础类型，联合类型，元组等类型，可以使用别名，可以使用typeof获取实例的类型进行赋值，还可以使用 in 关键字生成映射类型
type type1 = string; // 基础类型
type type2 = type1; // 别名
type type3 = "firstName" | "lastName";
type type4 = {
  [key in type3]: string; // 使用 in 关键字生成映射类型
}
const type: type4 = {
  firstName: "aaa",
  lastName: "bbb"
}
// interface 可以声明合并
interface interface1 {
  name: string;
}
interface interface1 {
  age: number;
}



/*
* 基础类型
* */

// boolean 布尔值
const isTrue: boolean = false;

// number 数字
const age: number = 999;

// string 字符串
const email: string = '123@qq.com';

// Array 数组
const list1: number[] = [1, 2, 3];
const list2: Array<string> = ['1', '2', '3']; // 在JSX中不兼容

// Tuple 元组
const info: [number, string] = [666, 'hello'];

// enum 枚举
// 数字枚举具有自增长行为，能反向映射
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}
enum Direction2 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
console.log(Direction1.Up); // 0
console.log(Direction1[3]); // Right

// any 不清楚类型的变量时使用，类型检查器不会对any类型进行检查而是直接让它们通过编译阶段
let someValue: any = 1;
someValue = 'hello';
const list3: any[] = [1, 'hello', false];

// void void类型像是与any类型相反，它表示没有任何类型
function fn(): void {
  console.log('hello');
}

// never 表示的是那些永不存在的值的类型
function error(message: string): never {
  // 返回never的函数必须存在无法达到的终点
  throw new Error(message);
}
// eg
type NeverType = number | string;
function neverFn (val: NeverType): string {
  let desc = '';
  if (typeof val === 'number') {
    desc = '我是数字';
  } else if (typeof val === 'string') {
    desc = '我是字符串';
  } else {
    const neverVal: never = val
  }
  return desc;
}

// Object、Null、Undefined使用频率很少，不做讨论



/*
* 常见定义类型写法
* */

const num: number = 1;
const str: string = 'str';
const bool: boolean = true;
const array: number[] = [1, 2, 3];

// 使用接口
interface P {
  name: string;
  age?: number; // 可选属性
  readonly ID?: string; // 只读属性
  [propName: string]: any; // 额外的属性检查
  // (msg: string): string; // 函数类型
  logMsg?(msg: string): void; // 方法
}
const person: P = {
  name: '小明',
  age: 999,
  ID: '543242335',
  logMsg(msg) {
    console.log(msg);
  },
}

// 使用type
type LikeColor = 'red' | 'green' | 'blue';
const type1: LikeColor = 'red';
type P2 = P;
const person2: P2 = { name: '小明' };

// 使用联合类型
const unionType1: string | number = Math.random() > .5 ? 3 : 'hello';
const unionType2: 'aaa' | 'bbb' | 'ccc' = 'bbb';

// 使用交叉类型
interface CrossA {
  name: string;
  age?: number;
}
interface CrossB {
  sex: 'man' | 'woman';
  phone?: string;
}
type CrossC = CrossA & CrossB;
const cross = {
  name: 'aaa',
  sex: 'man',
}

// 为函数定义类型
// eg1:
function fn1 (name: string, age?: number): string {
  return name + age;
}
// eg2:
interface Fn2 {
  (name: string, age?: number): string;
}
let fn2: Fn2 = function (name, age) {
  return name + age
}
// eg3:
let fn3: (name: string, age?: number) => string
  = function (name, age) {
  return name + age;
}



/*
* 泛型
* */

// 泛型也是一种类型，只不过不同于 string, number 等具体的类型，它是一种抽象的类型
// 允许我们在定义的时候不具体指定类型，并在函数调用的时候再指定具体的参数类型

// eg:
function getId<T>(arg: T): T {
  return arg
}
getId<string>('123'); // 完整写法
getId("456"); // 类型推导

// 默认参数
type A<T = string> = Array<T>;
// const aa: A = [1];
const bb: A = ["1"]; // ok
const cc: A<number> = [1]; // ok

// 对值编程、对类型编程
// 嵌套数据结构
// eg1:
type ListNode<T> = {
  data: T;
  next: ListNode<T> | null;
};
const listNode = {
  data: { name: 'aaa', age: 999},
  next: {
    data: {name: 'bbb', age: 888},
    next: {
      data: {name: 'ccc', age: 777},
    }
  }
}
// eg2:
// 现有Person接口，要求添加一个phone属性，phone为必填，其他为选填
interface PersonInfo {
  name: string;
  age: number;
  sex: 'Man' | 'Woman';
}
type PartialType<T> = { [P in keyof T]?: T[P] };
type Person2 = PartialType<PersonInfo> & { phone: string};
const p2: Person2 = {
  phone: '18222222222',
  sex: 'Man',
}
