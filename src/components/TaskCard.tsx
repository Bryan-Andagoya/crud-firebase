import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { TaskModel } from "../models";

interface Props {
  task: TaskModel;
}

export const TaskCard = ({ task: { title, description, done } }: Props) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
