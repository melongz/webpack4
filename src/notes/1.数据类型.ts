// boolean 布尔值
const isTrue: boolean = false;

// number 数字
const age: number = 999;

// string 字符串
const email: string = '123@qq.com';

// Array 数组
const list1: number[] = [1, 2, 3];
const list2: Array<string> = ['1', '2', '3'];

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
