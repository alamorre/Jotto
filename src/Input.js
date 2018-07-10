import React, {Component} from 'react';
import {connect} from 'react-redux';

import {guessWord} from './actions';

export class UnconnectedInput extends Component{

  /**
  * Create ref for the input box
  * @method constructor
  * @param {object} props - component props
  * @returns {undefined}
  */
  constructor(props){
    super(props);
    this.inputBox = React.createRef(); // good for changing value in input box with enzyme
    this.submitGuessedWord = this.submitGuessedWord.bind(this); // input box of undefined
  }

  submitGuessedWord(evt){
    // Prevent default on the event
    evt.preventDefault();
    const guessedWord = this.inputBox.current.value;
    if (guessWord && guessedWord.length > 0){
      this.props.guessWord(guessedWord);
    }

    this.inputBox.current.value = '';
  }

  render(){
    const contents = this.props.success
      ? null
      : (
        <form className="form-inline">
          <input
            data-test="input-box"
            ref={this.inputBox}
            className="md-2 mx-sm-3"
            id="word-guess"
            type="text"
            placeholder="enter guess"/>
          <button
            data-test="input-button"
            className="btn btn-primary mb-2"
            onClick={this.submitGuessedWord}
            type="submit">
            Submit
          </button>
        </form>
      );
    return (
      <div data-test="component-input">
        {contents}
      </div>
    );
  }
};

const mapStateToProps = ({success}) => {
  return {success};
}

export default connect(mapStateToProps, {guessWord})(UnconnectedInput);
