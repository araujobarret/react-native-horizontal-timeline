
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
      <View key={`col${d.date}`} style={[ d.date % 2 === 0 ? styles.day : styles.dayElevated, { width }]}>
        <View style={styles.dayUpper}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{ `${d.date}` }</Text>
            <Text style={styles.subTitle}>{`${this.getDayOfTheWeek(d.currentDate.getDay())}`}</Text>
          </View>
        </View>

        <View style={styles.lineContainer} />

        <View style={styles.dayBottom}>
          <Text style={styles.dayInfo}>{ `information`.slice(0, 40) }</Text>
        </View>
      </View>
    ));
    return days;
  }

  render() {
    const { height } = this.props;
    return (
      <ScrollView horizontal contentContainerStyle={{ height }}>
        { this.renderDays() }
      </ScrollView>
    );
  }
}

HorizontalTimeline.propTypes = {
  date: PropTypes.string.isRequired,
  dayColor: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
}

HorizontalTimeline.defaultProps = {
  backgroundColor: '#fefefe',
  dayColor: '#fafbfc',
  color: '#4C626D',
  height: 160,
  width: 120
}

const styles = StyleSheet.create({
  day: {
    backgroundColor: 'lightgray',
    marginBottom: 5
  },
  dayElevated: {
    backgroundColor: 'lightgray',
    elevation: 5,
    marginBottom: 5
  },
  dayUpper: {
    backgroundColor: '#fefefe',
    flex: 1,
    flexDirection: 'row'
  },
  dayBottom: {
    backgroundColor: '#fefefe',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  lineContainer: {

  },
  textContainer: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  title: {
    fontSize: 26,
    flex: 1,
    alignSelf: 'center',
    textAlign: 'right',
    marginRight: 12
  },
  subTitle: {
    fontSize: 16,
    flex: 1,
    alignSelf: 'flex-end'
  },
  dayInfo: {
    color: '#f52b6f',
    fontSize: 14,
    alignSelf: 'center'
  }
});

export default HorizontalTimeline;
