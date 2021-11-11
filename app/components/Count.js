import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import AppTextInput from "./AppTextInput";
import colors from "../config/colors";
class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      conso: 0,
      vowels: 0,
      chars: 0,
    };

    this.calculate = () => {
      //init vowels and consonants
      let vowels = /[aeiou]/gi;
      let conso = /[bcdfgjklmnpqstvxzhrwy]/gi;
      let str = this.state.text;

      //split by spaces
      var res = str.split("");

      var total_vowels = 0;
      var total_conso = 0;
      var total_char = 0;
      for (let test of res) {
        //specify whether its consonants or vowels
        if (test.match(vowels)) {
          total_vowels++;
        } else if (test.match(conso)) {
          total_conso++;
        }

        //get total chars
        if (test != " ") {
          total_char += test.length;
        }
      }

      this.setState({ chars: total_char });
      this.setState({ vowels: total_vowels });
      this.setState({ conso: total_conso });

      console.log("Total vowels: ", total_vowels);
      console.log("Total consonants: ", total_conso);
      console.log("Total character: ", total_char);
    };
  }

  render() {
    let count = 0,
      length = this.state.value ? this.state.value.length : 0;
    return (
      <>
        <View>
          <Text style={styles.title}>WORD ANALYZER</Text>
        </View>
        <View>
          <Text style={styles.word}>{this.state.text}</Text>
          <AppTextInput
            onChangeText={(text) => setUserWord(text)}
            placeholder="Enter a word"
            placeholderTextColor={colors.grey}
            value={this.state.text}
            onChangeText={(text) => this.setState({ text })}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={this.calculate}>
            <Text style={styles.buttonTitle}>Calculate</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.result}>
            Number of Vowels: {this.state.vowels}
          </Text>
          <Text style={styles.result}>
            Number of Consonants: {this.state.conso}
          </Text>
          <Text style={styles.result}>
            Number of Alphabets: {this.state.chars}
          </Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  word: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.olive,
    marginVertical: 20,
  },

  result: {
    fontSize: 20,
    //fontWeight: "bold",
    textAlign: "center",
    color: colors.grey,
    marginVertical: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0c0c0c",
    marginVertical: 20,
  },

  details: {
    fontSize: 16,
    textAlign: "center",
    color: "#707070",
    marginVertical: 5,
  },

  counterNumber: {
    fontSize: 70,
    color: "#0c0c0c",
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 15,
  },

  button: {
    width: 120,
    height: 50,
    alignItems: "center",
    paddingTop: 10,
    borderRadius: 10,
    backgroundColor: "#6a7d5a",
    marginVertical: 5,
  },

  buttonTitle: {
    fontSize: 20,
    color: "#fff",
  },

  icon: {
    marginRight: 10,
  },
});

export default Count;
