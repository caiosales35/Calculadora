import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import Display from "./src/components/Display";
import Button from "./src/components/Button";

export default function App() {
  const [dValu, setDValue] = useState("0");
  const [cDisplay, setCDisplay] = useState(false);
  const [operation, setOperation] = useState(null);
  const [values, setValues] = useState([0, 0]);
  const [current, setCurrent] = useState(0);

  // erro quando digita 0.
  function addDigit(n) {
    const cleanDisplay = dValu === "0" || cDisplay;

    if (n === "." && !cleanDisplay && dValu.includes(".")) {
      return;
    }

    const currentValue = cleanDisplay ? "" : dValu;
    setDValue(currentValue + n);
    setCDisplay(false);
    if (n !== ".") {
      const newValue = parseFloat(currentValue + n);
      if (current == 0) setValues([newValue, 0]);
      else if (current == 1) setValues([values[0], newValue]);
    }
  }

  function cleanMemory() {
    setDValue("0");
    setCDisplay(false);
    setOperation(null);
    setValues([0, 0]);
    setCurrent(0);
  }

  function makeOperation(op) {
    if (current === 0) {
      setOperation(op);
      setCurrent(1);
      setCDisplay(true);
    } else {
      const equals = op === "=";
      let resul = 0;
      try {
        resul = eval(`${values[0]} ${operation} ${values[1]}`);
      } catch (e) {
        resul = 0;
      }
      setValues([resul, 0]);
      setDValue(`${resul}`);
      setOperation(equals ? null : op);
      setCurrent(equals ? 0 : 1);
      setCDisplay(!equals);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Display value={dValu} operation={operation} />
      <View style={styles.buttons}>
        <Button label="AC" triple onClick={cleanMemory} />
        <Button label="/" operation onClick={makeOperation} />
        <Button label="7" onClick={addDigit} />
        <Button label="8" onClick={addDigit} />
        <Button label="9" onClick={addDigit} />
        <Button label="*" operation onClick={makeOperation} />
        <Button label="4" onClick={addDigit} />
        <Button label="5" onClick={addDigit} />
        <Button label="6" onClick={addDigit} />
        <Button label="-" operation onClick={makeOperation} />
        <Button label="1" onClick={addDigit} />
        <Button label="2" onClick={addDigit} />
        <Button label="3" onClick={addDigit} />
        <Button label="+" operation onClick={makeOperation} />
        <Button label="0" double onClick={addDigit} />
        <Button label="." onClick={() => addDigit(".")} />
        <Button label="=" operation onClick={makeOperation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
