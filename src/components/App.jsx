import React from 'react';
import PropTypes from 'prop-types';

import '../style/App.scss';

const App = ({ label }) => {
  return <div className="app">
    <h1 className="text-3xl font-bold underline">
      {label}
    </h1>
  </div>;
};

App.propTypes = {
  label: PropTypes.string,
};

App.defaultProps = {
  label: 'Hello World!',
};

export default App;
