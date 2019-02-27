import React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HorizontalTimelineDefault from './screens/HorizontalTimelineDefault';
import HorizontalTimelineCustomColors from './screens/HorizontalTimelineCustomColors';

let styles;

class App extends React.Component {
  static navigationOptions = {
    title: 'Horizontal Timeline'
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => this.props.navigation.navigate('HorizontalTimelineDefault')} // eslint-disable-line
        >
          <Text>Horizontal Timeline Default</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => this.props.navigation.navigate('HorizontalTimelineCustomColors')} // eslint-disable-line
        >
          <Text>Horizontal Timeline Custom Colors</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default StackNavigator({
  App: {
    screen: App
  },
  HorizontalTimelineDefault: {
    screen: HorizontalTimelineDefault
  },
  HorizontalTimelineCustomColors: {
    screen: HorizontalTimelineCustomColors
  }
});

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 20
  }
});
