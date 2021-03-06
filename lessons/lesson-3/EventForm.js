import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker'
import {formatDateTime, formatDate} from './api'

const style = StyleSheet.create ( {
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  text: {
    height:40,
    margin: 0,
    marginRight: 7,
    paddingLeft:10,
  },

  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    alignSelf: 'stretch',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  borderTop: {
    borderColor: '#edeeef',
    borderTopWidth: 0.5,
  }


});

class EventForm extends Component {
  state = {
    title: null,
    date: '',
  };

  handleAddPress = () => {
    console.log(this.state)
    this.props.navigation.goBack();
  }

  handleChangeTitle = (value) => {
    this.setState({title: value});
  }

  handleDatePress = () => {
    this.setState({showDatePicker: true});
  }

  handleDatePicked = (date) => {
    this.setState({
      date,
    });
    this.handleDatePickerHide();
  }

  handleDatePickerHide = () => {
    this.setState({showDatePicker: false});
  }
  
  render() {
    return (
      <View
        style={{
          flex:1
        }}
      >
        <View style={style.fieldContainer}>
          <TextInput
            style={style.text}
            placeholder="Event title"
            spellCheck={false}
            value={this.state.title}
            onChangeText={this.handleChangeTitle}
          ></TextInput>
          <TextInput
            style={[style.text, style.border]}
            placeholder="Event date"
            spellcheck = {false}
            value={formatDateTime(this.state.date.toString())}
            editable={!this.state.showDatePicker}
            onFocus={this.handleDatePress}
          >
          </TextInput>
          <DateTimePicker
              isVisible={this.state.showDatePicker}
              mode="datetime"
              onConfirm={this.handleDatePicked}
              onCancel={this.handleDatePickerHide}
            >
            </DateTimePicker>
        </View>
        <TouchableHighlight
          onPress={this.handleAddPress}
          style={style.button}
        >
          <Text style={style.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default EventForm;