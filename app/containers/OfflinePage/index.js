/*
 *
 * OfflinePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Online = () => (
  <p>Please disconnect from the internet.</p>
);
const Offline = () => (
  <p>Thanks! You can read the page now.</p>
);

export class OfflinePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      online: navigator.onLine,
    };
  }
  componentDidMount() {
    window.addEventListener('online', () => this.setState({ online: true }));
    window.addEventListener('offline', () => this.setState({ online: false }));
  }
  render() {
    return (
      <div>
        {this.state.online ? <Online /> : <Offline /> }
      </div>
    );
  }
}

OfflinePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(OfflinePage);
