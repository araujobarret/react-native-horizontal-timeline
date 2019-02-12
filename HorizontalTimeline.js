
import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView, Text, View } from 'react-native';
import PropTypes from 'prop-types';

class HorizontalTimeline extends Component {
  constructor(props) {
    super(props);
    const date = new Date(props.date);
    const days = [];
    console.log(props);
    const timelineDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    for (let i = 1; i <= Number(timelineDate.getDate()); i += 1) {
      days.push({ date: i, currentDate: new Date(date.getFullYear(), date.getMonth(), i) });
    }
    console.log('days', days);
    this.state = { days, date };
  }

  getDayOfTheWeek(day) {
    switch (day) {
      case 0: return "Sun";
      case 1: return "Mon";
      case 2: return "Tues";
      case 3: return "Wed";
      case 4: return "Thurs";
      case 5: return "Fri";
      case 6: return "Sat";
      default: return "";
    }
  }

  renderDays() {
    // TODO: implement the this.date.getDay() translation
    const { width } = this.props;
    if (!this.state.days) { return null; }
    // TODO: grab each info of the day and put
    const days = this.state.days.map(d => (
      <View key={`col${d.date}`} style={[ styles.day, { width }]}>
        <View style={styles.dayUpper}>
          <Text style={styles.title}>{`${this.getDayOfTheWeek(d.currentDate.getDay())} ${d.date}`}</Text>
        </View>
        <View style={styles.dayBottom}>
          <Text>{ ' ' }</Text>
        </View>
      </View>
    ));
    return days;
  }

  render() {
    const { backgroundColor, height } = this.props;
    return (
      <ScrollView horizontal contentContainerStyle={{ height, backgroundColor }}>
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
  height: PropTypes.number,
  width: PropTypes.number
}

HorizontalTimeline.defaultProps = {
  backgroundColor: '#ccc',
  dayColor: '#fafbfc',
  color: '#4C626D',
  height: 160,
  width: 120
}

const styles = StyleSheet.create({
  day: {

  },
  dayUpper: {
    backgroundColor: 'pink',
    flex: 1
  },
  dayBottom: {
    backgroundColor: 'lightgreen',
    flex: 1
  },
  title: {
    fontSize: 22,
    margin: 8
  }
});

export default HorizontalTimeline;
