import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { TaskModel } from "../models";

interface Props {
  task: TaskModel;
}

export const TaskCard = ({ task: { title, description, done } }: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.checkboxContainer}>
        <BouncyCheckbox
          onPress={(isChecked: boolean) => {}}
          fillColor="orange"
          unfillColor="white"
          isChecked={done}
        />
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "lightgrey",
    flexDirection: "row",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  checkboxContainer: {
    justifyContent: "center",
  },
});
