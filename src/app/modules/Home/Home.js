import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: {},
    };
  }

  render() {
    return (
      <div>
        <h1>First Factory - React JS</h1>
      </div>
    );
  }
}

export default Home;
