import React from 'react';

import Sidebar from './sidebar';
import Block from './block';

class Study extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: false };
  }

  fetchData(props) {
    this.setState({ loading: true }, () => {
      let { concepts, languages } = props.deck;
      props.fetchBlocks(null, languages, concepts).then(() => {
        this.setState({ loading: false });
      });
    });
  }

  componentWillMount() {
    if (this.props.deck && this.props.deck.public) {
      this.fetchData(this.props);
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <main className="col study">
          <Sidebar {...this.props} />
          <section className="col study-main"></section>
        </main>
      );
    } else {
      return (
        <main className="col study">
          <Sidebar {...this.props} />
          <Block {...this.props} />
        </main>
      );
    }
  }
}

export default Study;
