
import React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HorizontalTimelineDefault from './screens/HorizontalTimelineDefault';

let styles;

class App extends React.Component {
  static navigationOptions = {
    title: 'Horizonta Timeline'
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
