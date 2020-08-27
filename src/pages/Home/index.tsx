import React, { useState, useEffect } from 'react';

enum Color {黄色, 白色, 黑色}
interface Person{
  readonly name: string,
  age: number,
  likeColor?: string,
  say(msg: string): any,
  [ortherProp: string]: any,
}
interface Boy extends Person{
  hobby: 'game' | 'football',
}

console.log(GLOBAL_TEST, process.env.NODE_ENV);

function Main() {
  function hello({ name, age, likeColor } : Person) {
    const desc = `你好，我是${name}，今年${age}岁${likeColor ? `、最喜欢的颜色是${likeColor}` : ''}！`;
    console.log(desc);
    return desc;
  }

  function identity<T>(arg: T): T {
    return arg;
  }

  useEffect(() => {
    const melongz: Person = {
      name: 'melongz',
      age: 27,
      test: 3,
      say: msg => console.log(msg),
    };
    const boy1: Boy = {
      name: 'aaa',
      hobby: 'game',
      age: 999,
      likeColor: Color[2],
      say: msg => console.log(msg),
    };
    hello(melongz);
    hello(boy1);
    melongz.say('哈哈哈');
    console.log(Color.白色, Color[0]);
  }, []);

  return (
    <div>
      melongzzz
    </div>
  );
}

export default Main;
