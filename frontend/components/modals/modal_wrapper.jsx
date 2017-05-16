import React from 'react';

class ModalWrapper extends React.Component {
  handleBackgroundClick(e) {
    if (e.target === e.currentTarget) {
      this.props.hideModal();
    }
  }

  render() {
    return (
      <main className="modal-background" onClick={ this.handleBackgroundClick }>
        <figure className="modal">
          <header>{ this.props.title }</header>
          { this.props.children }
        </figure>
      </main>
    );
  }
}

export default ModalWrapper;
