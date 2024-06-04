import React, { FC } from "react";
import { ActivityIndicator, SafeAreaView, StyleSheet } from "react-native";

interface Props {}

const index: FC<Props> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator color={"#0000ff"} size="large" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default index;
