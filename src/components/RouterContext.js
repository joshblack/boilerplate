import React, { PropTypes } from 'react';

const RouterContext = (Component) => class extends React.Component {
  static displayName = 'RouterContext';

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  render() {
    return (
      <Component
        {...this.props}
        router={this.context.router}
      />
    );
  }
};

