import React, { useState, useEffect } from 'react';

interface HomePropsType {
  title: string;
}

interface ButtonPropsType {
  text: '确认' | '取消' | React.ReactNode;
  onClick?(e: React.MouseEvent<HTMLButtonElement>): void;
}

interface HOCType {
  isShowBorder: boolean;
}

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100px',
  height: '100px',
  border: '1px solid red',
};

// 无状态函数组件
const Button: React.FunctionComponent<ButtonPropsType> = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

// 高阶组件
function borderButton<P>(WrappedComponent: React.ComponentType<P>) {
  return class Btn extends React.Component<P & HOCType> {
    render() {
      const { isShowBorder, ...props } = this.props;
      return (
        <div style={isShowBorder ? style : {}}>
          <WrappedComponent { ...props as P }/>
        </div>
      );
    }
  };
}
const BorderButton = borderButton(Button);

// hooks组件
function Main({ title }: HomePropsType) {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    console.log(GLOBAL_TEST);
  }, []);
  return (
    <div>
      <h4>{title}</h4>
      <Button text='确认' onClick={(e) => console.log(e)}/>
      <Button text={<a href="#">跳转</a>}/>
      <BorderButton isShowBorder={true} text='确定' onClick={e => console.log(e)}/>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

export default Main;
