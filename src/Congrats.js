import React from 'react';
import PropTypes from 'prop-types';

/**
Funational react component for gongrats statement
@function
@param {object}props - React props
@returns {JSX.Element} - Rendered congrats message to the user
*/
export default (props) => {
  if(props.success){
    return(
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          Congrats, you guessed it!
        </span>
      </div>
    );
  } else {
    return(
      <div data-test="component-congrats" />
    );
  }
}
