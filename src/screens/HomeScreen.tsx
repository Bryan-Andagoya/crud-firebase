import React, { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { TaskCard } from "../components";
import { useTaskStore } from "../hooks";
import { TaskModel } from "../models";

export const HomeScreen = () => {
  const { tasks, getTasks } = useTaskStore();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks === null) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const renderListItem = ({ item }: { item: TaskModel }) => (
    <TaskCard task={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList data={tasks} renderItem={renderListItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
});
