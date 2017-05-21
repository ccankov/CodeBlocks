import React from 'react';
import { Link } from 'react-router-dom';

const _nullState = {
  totalBlocks: 0,
  mastery: 0,
  languages: [],
  concepts: [],
  unanswered: 0,
  novice: 0,
  intermediate: 0,
  master: 0
};

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, _nullState);
  }

  componentWillReceiveProps(nextProps) {
    let newState = this.processBlocks(nextProps.blocks);
    this.setState(newState);
  }

  processBlocks(blocks) {
    let newState = Object.assign({}, _nullState);
    for (var blockId in blocks) {
      let block = blocks[blockId];
      newState.totalBlocks++;
      if (!newState.languages.includes(block.language.name)) {
        newState.languages.push(block.language.name);
      }
      block.concepts.forEach(concept => {
        if (!newState.concepts.includes(concept)) {
          newState.concepts.push(concept);
        }
      });
      switch (block.mastery) {
        case undefined:
          newState.unanswered++;
          break;
        case "Novice":
          newState.novice++;
          break;
        case "Intermediate":
          newState.intermediate++;
          break;
        case "Master":
          newState.master++;
          break;
      }
    }
    newState.mastery = Math.floor((newState.master / newState.totalBlocks)*100);
    return newState;
  }

  render() {
    let languageLis = this.state.languages.map((language, idx) => (
      <div className="label" key={ idx }>{ language }</div>
    ));
    let conceptLis = this.state.concepts.map((concept, idx) => (
      <div className="label" key={ idx }>{ concept }</div>
    ));
    return (
      <aside className="col study-sidebar">
        <section className="sidebar-header">
          <Link to="/library">
            <button>
              <i className="fa fa-home" aria-hidden="true"></i>
            </button>
          </Link>
          <p><span>Studying:</span> My Collection</p>
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
              <p className="big-text">{ this.state.mastery }<span>%</span></p>
              <p className="small-text">Mastered</p>
            </div>
          </section>
          <section className="row sidebar-bar hero">
            <p>
              <i className="fa fa-star" aria-hidden="true"></i><i>Master</i>
            </p>
            <div className="progress-back">
              <div className="progess-fill" style={{
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
                <div className="progess-fill" style={{
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
                <div className="progess-fill" style={{
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
                <div className="progess-fill" style={{
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
                <div className="progess-fill" style={{
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
