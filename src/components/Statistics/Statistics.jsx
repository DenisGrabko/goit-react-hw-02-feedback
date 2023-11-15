import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, StatisticTitle, StatisticItem } from './Statistics.styled';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <Container>
        <StatisticTitle>Statistics</StatisticTitle>
        <StatisticItem>Good: {good}</StatisticItem>
        <StatisticItem>Neutral: {neutral}</StatisticItem>
        <StatisticItem>Bad: {bad}</StatisticItem>
        <StatisticItem>Total: {total}</StatisticItem>
        <StatisticItem>Positive feedback: {positivePercentage}%</StatisticItem>
      </Container>
    );
  }
}

Statistics.propTypes = {
  data: PropTypes.objectOf(PropTypes.number),
};

export default Statistics;