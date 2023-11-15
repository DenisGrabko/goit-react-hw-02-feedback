import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonList } from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
  render() {
    return (
      <ButtonList>
        {this.props.options.map(option => (
          <Button
            key={option}
            option={option}
            onClick={() => this.props.onLeaveFeedback(option)}
          >
            {option}
          </Button>
        ))}
      </ButtonList>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackOptions;