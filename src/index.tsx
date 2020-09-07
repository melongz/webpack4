import React from 'react';
import ReactDom from 'react-dom';
import Home from './pages/Home';

interface PropsType {
  title: string;
  subTitle: string;
}
interface StateType {
  timestamp: number
}

class App extends React.Component<PropsType, StateType> {
  // public，static为修饰符，默认为public
  public state = {
    timestamp: new Date().getTime(),
  }

  static defaultProps = {
    subTitle: 'hello',
  }

  render() {
    const { title, subTitle } = this.props;
    const { timestamp } = this.state;
    return (
      <div>
        <h2>{title}</h2>
        <h4>{subTitle}</h4>
        现在时间是{timestamp}
        <Home title='我是home页标题'/>
      </div>
    );
  }
}

ReactDom.render(<App title='TypeScript技术分享'/>, document.getElementById('root'));
