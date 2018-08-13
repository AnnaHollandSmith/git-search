import React, { Component } from 'react';
import { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch';
import theme from './theme';
import './App.css';
import Results from './components/Results'
import Header from './components/Header';


  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentTopics: [],
      };
    }
  
    setTopics = (currentTopics) => {
      this.setState({
        currentTopics: currentTopics || [],
      });
    }
  
    toggleTopic = (topic) => {
      const { currentTopics } = this.state;
      const nextState = currentTopics.includes(topic)
        ? currentTopics.filter(item => item !== topic)
        : currentTopics.concat(topic);
      this.setState({
        currentTopics: nextState,
      });
    }

  render() {
    return (
      <section className="container">
        <ReactiveBase
          app="git-search"
          credentials="rRGrVz5lG:2b991cb3-a571-44a6-9dcb-55cd2a24cf14"
          type="gitxplore-latest"
          theme={theme}
        >
        
          <div className="flex row-reverse app-container">
            <Header currentTopics={this.state.currentTopics} setTopics={this.setTopics} />
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
              <Results currentTopics={this.currentTopics} toggleTopic={this.toggleTopic} />
            </div>
          </div>
        </ReactiveBase>
      </section>
    );
  }
}
export default App;
