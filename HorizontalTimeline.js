/* eslint-disable global-require, react/forbid-prop-types */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["getDayOfTheWeek"] }] */
import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView, Text, View } from 'react-native';
import PropTypes from 'prop-types';

class HorizontalTimeline extends Component {
  constructor(props) {
    super(props);

    const date = new Date(props.date);
    const days = [];
    const timelineDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const keys = props.data ? Object.keys(props.data) : null;

    if (keys) {
      for (let i = 1; i <= Number(timelineDate.getDate()); i += 1) {
        if (props.data[i]) {
          days.push({
            date: i,
            currentDate: new Date(date.getFullYear(), date.getMonth(), i),
            marked: props.data[i].marked,
            info: props.data[i].info ? props.data[i].info : null,
          });
        } else {
          days.push({
            date: i,
            currentDate: new Date(date.getFullYear(), date.getMonth(), i),
          });
        }
      }
    } else {
      for (let i = 1; i <= Number(timelineDate.getDate()); i += 1) {
        days.push({
          date: i,
          currentDate: new Date(date.getFullYear(), date.getMonth(), i),
        });
      }
    }

    this.state = { days };
  }

  getDayOfTheWeek(day) {
    switch (day) {
      case 0:
        return 'Sun';
      case 1:
        return 'Mon';
      case 2:
        return 'Tue';
      case 3:
        return 'Wed';
      case 4:
        return 'Thu';
      case 5:
        return 'Fri';
      case 6:
        return 'Sat';
      default:
        return '';
    }
  }

  renderDotImage(day) {
    if (day.marked) {
      const { width, height } = this.props;
      return (
        <Image
          source={require('./assets/dot_purple.png')}
          style={[
            styles.dotImage,
            { left: width / 2 - 8, top: height / 2 - 14 },
          ]}
        />
      );
    }
    return null;
  }

  renderDays() {
    const { width, backgroundColor, color } = this.props;

    const days = this.state.days.map(d => (
      <View
        key={`col${d.date}`}
        style={[!d.marked ? styles.day : styles.dayElevated, { width }]}
      >
        <View style={[styles.dayUpper, { backgroundColor }]}>
          <View style={styles.textContainer}>
            <Text style={[ styles.title, { color }]}>{`${d.date}`}</Text>
            <Text style={[ styles.subTitle, { color }]}>
              {`${this.getDayOfTheWeek(d.currentDate.getDay())}`}
            </Text>
          </View>
        </View>

        <View style={styles.lineContainer} />

        {this.renderDotImage(d)}

        <View style={[styles.dayBottom, { backgroundColor }]}>
          <Text style={[styles.dayInfo, { color }]}>
            {d.info ? d.info.slice(0, 40) : ''}
          </Text>
        </View>
      </View>
    ));
    return days;
  }

  render() {
    const { height } = this.props;
    return (
      <ScrollView horizontal contentContainerStyle={{ height }}>
        {this.renderDays()}
      </ScrollView>
    );
  }
}

HorizontalTimeline.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  date: PropTypes.string.isRequired,
  data: PropTypes.object,
  height: PropTypes.number,
  width: PropTypes.number,
};

HorizontalTimeline.defaultProps = {
  backgroundColor: '#fefefe',
  data: null,
  color: '#ac78fb',
  height: 160,
  width: 120,
};

const styles = StyleSheet.create({
  day: {
    backgroundColor: 'lightgray',
    marginVertical: 5,
  },
  dayElevated: {
    backgroundColor: 'lightgray',
    elevation: 5,
    marginVertical: 5,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: '#000000',
    shadowRadius: 3,
    shadowOpacity: 0.3,
  },
  dayUpper: {
    flex: 1,
    flexDirection: 'row',
  },
  dayBottom: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  lineContainer: {
    height: 3,
    borderTopWidth: 3,
    borderColor: '#edeff3',
  },
  textContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  title: {
    fontSize: 26,
    flex: 1,
    alignSelf: 'center',
    textAlign: 'right',
    marginRight: 12,
  },
  subTitle: {
    fontSize: 16,
    flex: 1,
    alignSelf: 'flex-end',
  },
  dayInfo: {
    fontSize: 14,
    alignSelf: 'center',
  },
  dotImage: {
    position: 'absolute',
    width: 16,
    height: 16,
    zIndex: 99,
  },
});

export default HorizontalTimeline;
