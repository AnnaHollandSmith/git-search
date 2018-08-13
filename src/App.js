import React, { Component } from 'react';
import { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch';
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
          <div className="flex row-reverse app-container">
            <div className="results-container">
              <DataSearch 
                componentId="repo"
                filterLAbel="Search"
                dataField={['name', 'description', 'name.raw', 'fullname', 'owner', 'topics']}
                placeholder="Search Repos"
                autosuggest={false}
                iconPosition="left"
                URLParams
                className="data-search-container results-container"
                innerClass={{
                  input: 'search-input'
                }}
              />
            </div>
          </div>
        </ReactiveBase>
      </section>
    );
  }
}
export default App;
