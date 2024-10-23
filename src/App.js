import React, {Component} from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Counter from './components/Counter';
import Footer from './components/Footer';

class App extends Component{
  constructor(){
    super();
    this.state = {
      message: 'Hola React'
    };
  }

  componentDidMount(){
    console.log ('App de componentes montados');
  }

  render(){
    return(
      <div>
        <Header />
        <Content />
        <Counter />
        <Footer />
      </div>
    );
  }
}

export default App;