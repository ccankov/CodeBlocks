import React from 'react';
import { Link } from 'react-router-dom';

import aggregateBlocks from '../../util/aggregate_blocks';

const _nullState = {
  totalBlocks: 0,
  mastery: 0,
  languages: [],
  languageTags: [],
  concepts: [],
  conceptTags: [],
  blockIds: [],
  unanswered: 0,
  novice: 0,
  intermediate: 0,
  master: 0
};

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, _nullState);
    this.determineStateFromProps = this.determineStateFromProps.bind(this);
  }

  determineStateFromProps(props) {
    let { blocks, concepts, languages } = props;
    let newState = aggregateBlocks(
      blocks,
      concepts,
      languages
    );
    this.setState(newState);
  }

  componentDidMount() {
    this.determineStateFromProps(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.determineStateFromProps(nextProps);
  }

  render() {
    let { languages, concepts } = this.props;
    let languageLis = this.state.languages.map((language, idx) => (
      <div className="label" key={ idx }>{ languages[language].name }</div>
    ));
    let conceptLis = this.state.concepts.map((concept, idx) => (
      <div className="label" key={ idx }>{ concepts[concept].name }</div>
    ));
    return (
      <aside className="col study-sidebar">
        <section className="sidebar-header">
          <Link to="/library">
            <button>
              <i className="fa fa-home" aria-hidden="true"></i>
            </button>
          </Link>
          <p><strong>Studying:</strong> My Library</p>
        </section>
        <section className="sidebar-main">
          <section className="col sidebar-info">
            <section className="col info">
              <small>Languages:</small>
              <div className="row labels labelScroll">
                { languageLis }
              </div>
            </section>
            <hr />
            <section className="col info">
              <small>Concepts:</small>
              <div className="row labels labelScroll">
                { conceptLis }
              </div>
            </section>
          </section>
          <section className="row sidebar-gauge">
            <svg viewBox="0 0 100 100" width="80%">
              <circle r="45%" cx="50" cy="50" fill="none"
                stroke="#6E3667"
              ></circle>
              <circle r="45%" cx="50" cy="50" fill="none"
                className="stroke" style={{
                strokeDasharray: (this.state.mastery * 2.83).toString() + " 300"
                }}
              ></circle>
            </svg>
            <div className="col floating-text">
            <p className="big-text">
              { isNaN(this.state.mastery) ? 0 : this.state.mastery }
              <strong>%</strong></p>
            <p className="small-text">Mastered</p>
            </div>
          </section>
          <section className="row sidebar-bar hero">
            <p>
              <i className="fa fa-star" aria-hidden="true"></i><i>Master</i>
            </p>
            <div className="progress-back">
              <div className="progress-fill good" style={{
                  width: this.state.mastery.toString() + "%"
                }}></div>
            </div>
          </section>
          <hr className="sidebar-divider" />
          <section className="col sidebar-bars">
            <section className="row sidebar-bar">
              <p>
                <i>Unanswered</i>
              </p>
              <div className="progress-back">
                <div className="progress-fill inactive" style={{
                  width: (Math.floor(this.state.unanswered /
                    this.state.totalBlocks * 100)).toString() + "%"
                }}></div>
              </div>
            </section>
            <section className="row sidebar-bar">
              <p>
                <i>Novice</i>
              </p>
              <div className="progress-back">
                <div className="progress-fill inactive" style={{
                  width: (Math.floor(this.state.novice /
                    this.state.totalBlocks * 100)).toString() + "%"
                }}></div>
              </div>
            </section>
            <section className="row sidebar-bar">
              <p>
                <i>Intermediate</i>
              </p>
              <div className="progress-back">
                <div className="progress-fill inactive" style={{
                  width: (Math.floor(this.state.intermediate /
                    this.state.totalBlocks * 100)).toString() + "%"
                }}></div>
              </div>
            </section>
            <section className="row sidebar-bar">
              <p>
                <i>Master</i>
              </p>
              <div className="progress-back">
                <div className="progress-fill inactive" style={{
                  width: (Math.floor(this.state.master /
                    this.state.totalBlocks * 100)).toString() + "%"
                }}></div>
              </div>
            </section>
          </section>
        </section>
      </aside>
    );
  }
}

export default Sidebar;
