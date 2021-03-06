import React, {Component, Fragment} from 'react';
import {View, Text} from 'react-native';
import {Input, TextLink, Button, Loading} from './common';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      error: '',
      loading: false
    }
  };

  render() {
    const {email, password, password_confirmation, error, loading} = this.state;
    const {form, section, errorTextStyles} = styles;

    return(
      <Fragment>
        <View style={form}>
          <View style={section}>
            <Input
              placeholder="user@email.com"
              label="Email"
              value={email}
              onChangeText={email => this.setState({email})}
            />
          </View>

          <View style={section}>
              <Input
                secureTextEntry
                placeHolder={"password"}
                label="Password"
                value={password}
                onChangeText={password => this.setState({password})}
              />
          </View>

          <View style={section}>
            <Input
              secureTextEntry
              placeholder="confirm password"
              label="Confirm Password"
              value={password_confirmation}
              onChangeText={password_confirmation => this.setState({password_confirmation})}
            />
          </View>

          <Text style={errorTextStyles}>
            {error}
          </Text>

          {!loading ? <Button>Register</Button> : <Loading size={'large'} />}
        </View>

        <TextLink onPress={this.props.authSwitch}>
          Log in
        </TextLink>
      </Fragment>
    );
  }
}

const styles = {
  form: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#ddd'
  },
  section: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#ddd'
  },
  errorTextStyles: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red'
  }
};

export {Registration}
