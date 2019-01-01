import React, {Component} from 'react';
import { View } from 'react-native';
import { Login, Registration } from '../components';

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false
    };
  }

  render() {
    return(
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};
