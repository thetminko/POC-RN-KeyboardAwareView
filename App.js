import React, {Component} from 'react';

import {
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Platform,
  SafeAreaView,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  submit() {
    Keyboard.dismiss();
  }

  render() {
    return (
      <SafeAreaView style={styles.flexOne}>
        <KeyboardAvoidingView
          enabled
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={styles.flexGrowOne}>
          <ScrollView
            bounces={false}
            style={styles.ScrollView}
            contentInset={{bottom: 24}}>
            <View style={styles.textInputWrapper}>
              <TextInput
                underlineColorAndroid="#413E4F"
                placeholder="Enter First Name"
                placeholderTextColor="#413E4F"
                ref={(ref) => {
                  this._nameinput = ref;
                }}
                returnKeyType="next"
                onSubmitEditing={() => this._lname.focus()}
              />
            </View>

            <View style={styles.textInputWrapper}>
              <TextInput
                underlineColorAndroid="#413E4F"
                placeholder="Enter Last Name"
                placeholderTextColor="#413E4F"
                ref={(ref) => {
                  this._lname = ref;
                }}
                returnKeyType="next"
                onSubmitEditing={() => this._emailinput.focus()}
              />
            </View>

            <View style={styles.textInputWrapper}>
              <TextInput
                underlineColorAndroid="#413E4F"
                placeholder="Enter Email Address"
                placeholderTextColor="#413E4F"
                keyboardType="email-address"
                ref={(ref) => {
                  this._emailinput = ref;
                }}
                returnKeyType="next"
                onSubmitEditing={() => this._phonenumber.focus()}
              />
            </View>

            <View style={styles.textInputWrapper}>
              <TextInput
                underlineColorAndroid="#413E4F"
                placeholder="Enter Phone Number"
                placeholderTextColor="#413E4F"
                keyboardType="numeric"
                ref={(ref) => {
                  this._phonenumber = ref;
                }}
                returnKeyType="next"
                onSubmitEditing={() => this._addressinput1.focus()}
              />
            </View>

            <View style={styles.textInputWrapper}>
              <TextInput
                underlineColorAndroid="#413E4F"
                placeholder="Enter Address Line-1"
                placeholderTextColor="#413E4F"
                autoCapitalize="sentences"
                ref={(ref) => {
                  this._addressinput1 = ref;
                }}
                returnKeyType="next"
                onSubmitEditing={() => this._addressinput2.focus()}
              />
            </View>

            <View style={styles.textInputWrapper}>
              <TextInput
                underlineColorAndroid="#413E4F"
                placeholder="Enter Address Line-2"
                placeholderTextColor="#413E4F"
                autoCapitalize="sentences"
                ref={(ref) => {
                  this._addressinput2 = ref;
                }}
                returnKeyType="next"
                onSubmitEditing={() => this._zipcode.focus()}
              />
            </View>

            <View style={styles.textInputWrapper}>
              <TextInput
                underlineColorAndroid="#413E4F"
                placeholder="Enter Zipcode"
                placeholderTextColor="#413E4F"
                autoCapitalize="sentences"
                ref={(ref) => {
                  this._zipcode = ref;
                }}
                returnKeyType="next"
                onSubmitEditing={() => this._state.focus()}
              />
            </View>

            <View style={styles.textInputWrapper}>
              <TextInput
                underlineColorAndroid="#413E4F"
                placeholder="Enter State"
                placeholderTextColor="#413E4F"
                autoCapitalize="sentences"
                ref={(ref) => {
                  this._state = ref;
                }}
                returnKeyType="next"
                onSubmitEditing={() => this._country.focus()}
              />
            </View>

            <View style={styles.textInputWrapper}>
              <TextInput
                underlineColorAndroid="#413E4F"
                placeholder="Enter Country"
                placeholderTextColor="#413E4F"
                autoCapitalize="sentences"
                ref={(ref) => {
                  this._country = ref;
                }}
                returnKeyType="done"
              />
            </View>
          </ScrollView>

          <View>
            <TouchableOpacity
              style={[styles.buttonWrapper, styles.shadow]}
              activeOpacity={0.5}
              onPress={() => this.submit()}>
              <Text style={styles.submitText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  flexGrowOne: {
    flexGrow: 1,
  },
  flexOne: {
    flex: 1,
  },
  ScrollView: {
    flex: 1,
  },
  textInputWrapper: {
    flex: 1,
    padding: 8,
    margin: 20,
    borderWidth: 1,
    borderRadius: 8,
  },
  buttonWrapper: {
    backgroundColor: '#51D8C7',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#000',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 15,
  },
  buttonBackgroundColor: {
    backgroundColor: '#e6fff9',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  submitText: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});
