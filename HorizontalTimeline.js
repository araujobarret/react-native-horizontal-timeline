
import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView, Text, View } from 'react-native';
import PropTypes from 'prop-types';

class HorizontalTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = { days: null };
  }

  componentDidMount() {
    // grabs the Date from the props and then get de days of its currnt month
    this.date = new Date(this.props.date);
    const timelineDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
    for (let i = 1; i <= Number(timelineDate.getDate()); i += 1) {

    }
  }

  renderDays() {
    // TODO: implement the this.date.getDay() translation
    if (!this.state.days) { return null; }
    return days;
  }

  render() {
    return (
      <ScrollView horizontal>
        { this.renderDays() }
      </ScrollView>
    );
  }
}

HorizontalTimeline.propTypes = {
  date: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  dayColor: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number
}

HorizontalTimeline.defaultProps = {
  backgroundColor: '#fefefe',
  daColor: '#fafbfc',
  color: '#4C626D',
  height: 250
}

const styles = StyleSheet.create({
  day: {

  },
  title: {
    fontWeight: 'bold'
  }
});

export default HorizontalTimeline;
