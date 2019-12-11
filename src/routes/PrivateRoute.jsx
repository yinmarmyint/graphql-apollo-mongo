import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({
  render: Component,
  isAuthenticated,
  name,
  hasAnyRoles,
  showDate,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <>
            <h3 className="m-0">
              {name}
              {showDate || ''}
            </h3>
            <Component {...props} />
          </>
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
const mapStateToProps = ({ auth }) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    isPending: auth.isPending,
    user: auth.user,
  };
};

export default connect(
  mapStateToProps,
  null
)(PrivateRoute);
