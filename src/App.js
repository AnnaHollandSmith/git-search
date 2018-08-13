import React, { Component } from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch';
import theme from './theme';
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="container">
        <ReactiveBase
          app="git-search"
          credentials="rRGrVz5lG:2b991cb3-a571-44a6-9dcb-55cd2a24cf14"
          type="gitxplore-latest"
          theme={theme}
        >
          <nav className="navbar">
            <div className="title">GitSearch</div>
          </nav>
        </ReactiveBase>
      </section>
    );
  }
}
export default App;
