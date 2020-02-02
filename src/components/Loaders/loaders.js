import React from 'react';
import PropTypes from 'prop-types';

const Loaders = (props) => {
  const {
    isLoading, error, hasData, noDataLabel
  } = props;
  return (
    <div>
      { isLoading && (
        <div className="loading">Loading...</div>
      )}
      { error && (
      <div className="error">
        <p>
            Something went wrong. Status :
          {error.status}
        </p>
      </div>
      )}
      { !hasData && !isLoading && !error && (
        <div className="no-records">
          <p>
            {noDataLabel}
          </p>
        </div>
      )}
    </div>
  );
};

Loaders.prototype = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  hasData: PropTypes.bool.isRequired,
  noDataLabel: PropTypes.string.isRequired
};

export default Loaders;
