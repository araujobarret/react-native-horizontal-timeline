import React, { PureComponent } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { HorizontalTimeline } from 'react-native-horizontal-timeline';

let styles;

class HorizontalTimelineDefault extends PureComponent {
  static navigationOptions = {
    title: 'Right position'
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <HorizontalTimeline date={new Date().toISOString()} />
      </SafeAreaView>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default HorizontalTimelineDefault;
