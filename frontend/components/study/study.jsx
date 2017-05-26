import React from 'react';

import Sidebar from './sidebar';
import Block from './block';

class Study extends React.Component {
  componentDidMount() {
    if (this.props.deck && this.props.deck.public) {
      let { concepts, languages } = this.props.deck;
      concepts = concepts.map(concept => this.props.conceptsByName[concept].id);
      languages = languages.map(
        language => this.props.languagesByName[language].id
      );

      this.props.fetchBlocks(null, languages, concepts);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.deck && nextProps.deck.public && (!this.props.deck || !this.props.deck.public)) {
      let { concepts, languages } = nextProps.deck;
      concepts = concepts.map(concept => nextProps.conceptsByName[concept].id);
      languages = languages.map(
        language => nextProps.languagesByName[language].id
      );

      nextProps.fetchBlocks(null, languages, concepts);
    }
  }

  render() {
    let { blocks, blockQueues, createUserblock } = this.props;
    return (
      <main className="col study">
        <Sidebar blocks={ blocks } />
        <Block blocks={ blockQueues } createUserblock={ createUserblock } />
      </main>
    );
  }
}

export default Study;
