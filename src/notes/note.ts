/*
* TypeScript的两种声明空间
* */

// todo class怎么用
// 1。变量声明空间 var | function | let | const | class
// 2。类型声明空间 interface | type | class



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

// Object、Null、Undefined使用频率很少，不做讨论



/*
* 接口
* */

// 合并众多类型声明至一个类型声明

interface PersonType {
  name: string,
  age?: number, // 可选属性
  readonly ID: string, // 只读属性
  [propName: string]: any; // 额外的属性检查
  (msg: string): string; // 函数类型
  reset(): void; // 方法
}



/*
* 常见类型注解写法
* */

// 类型注解使用 :TypeAnnotation 语法

const num: number = 1;
const str: string = 'str';
const bool: boolean = true;
const array: number[] = [1, 2, 3];

// 使用联合类型
const unionType1: string | number = Math.random() > .5 ? 3 : 'hello';
const unionType2: 'aaa' | 'bbb' | 'ccc' = 'bbb';

// 使用接口
interface P {
  name: string,
  age?: number,
  logMsg?(msg: string): void
}
const person: P = {
  name: '小明',
  age: 999,
  logMsg(msg) {
    console.log(msg);
  },
}

// 使用type
// type用来创建新的类型，也可以重命名已有的类型
// 建议使用type创建简单类型，复杂的类型使用interface
type LikeColor = 'red' | 'green' | 'blue';
const type1: LikeColor = 'red';
type P2 = P;
const person2: P2 = { name: '小明' };

