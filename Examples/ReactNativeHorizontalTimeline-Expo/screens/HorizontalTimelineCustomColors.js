import React, { PureComponent } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { HorizontalTimeline } from 'react-native-horizontal-timeline';

class HorizontalTimelineCustomColors extends PureComponent {
  static navigationOptions = {
    title: 'Timeline with custom colors'
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <HorizontalTimeline
          date={new Date().toISOString()}
          data={{
             1: { marked: true, info: 'Some info' },
             5: { marked: true, info: 'More info' },
          }}
          backgroundColor='#95c623'
          color='#0e4749'
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10
  }
});

export default HorizontalTimelineCustomColors;
