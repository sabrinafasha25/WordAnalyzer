import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AppTextInput from "./AppTextInput";
import colors from "../config/colors";

class Calculation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      consonant: 0,
      vowel: 0,
      alphabet: 0,
    };

    this.calculate = () => {
      let vowel = /[aeiouAEIOU]/;
      let consonant = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/;

      let string = this.state.word;
      var convert = string.split("");

      var numVowel = 0;
      var numConsonant = 0;
      var numAlphabet = 0;

      for (let analyze of convert) {
        if (analyze.match(vowel)) {
          numVowel++;
        } else if (analyze.match(consonant)) {
          numConsonant++;
        }

        if (analyze != " ") {
          numAlphabet += analyze.length;
        }
      }

      this.setState({ alphabet: numAlphabet });
      this.setState({ vowel: numVowel });
      this.setState({ consonant: numConsonant });
    };
  }

  render() {
    return (
      <>
        <View>
          <Text style={styles.title}>WORD ANALYZER</Text>
        </View>
        <View>
          <AppTextInput
            placeholder="Enter a word"
            placeholderTextColor={colors.grey}
            value={this.state.word}
            onChangeText={(word) => this.setState({ word })}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={this.calculate}>
            <Text style={styles.buttonTitle}>Calculate</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.result}>Your Word: </Text>
          <Text style={styles.word}>{this.state.word}</Text>
          <Text style={styles.result}>
            Number of Vowels: {this.state.vowel}
          </Text>
          <Text style={styles.result}>
            Number of Consonants: {this.state.consonant}
          </Text>
          <Text style={styles.result}>
            Number of Alphabets: {this.state.alphabet}
          </Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0c0c0c",
    marginVertical: 20,
  },

  button: {
    width: 120,
    height: 45,
    alignItems: "center",
    paddingTop: 10,
    borderRadius: 10,
    backgroundColor: "#6a7d5a",
    marginTop: 5,
    marginBottom: 50,
  },

  buttonTitle: {
    fontSize: 20,
    color: "#fff",
  },

  word: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.olive,
    marginVertical: 15,
  },

  result: {
    fontSize: 20,
    textAlign: "center",
    color: colors.grey,
    marginVertical: 10,
  },
});

export default Calculation;
