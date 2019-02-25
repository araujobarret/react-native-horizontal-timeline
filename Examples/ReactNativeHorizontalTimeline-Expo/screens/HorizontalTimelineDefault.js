import React, { PureComponent } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { HorizontalTimeline } from 'react-native-horizontal-timeline';

class HorizontalTimelineDefault extends PureComponent {
  static navigationOptions = {
    title: 'Default Timeline with data props'
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

export default HorizontalTimelineDefault;
