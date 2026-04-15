import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native';

const data = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 7 },
];

const graph = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>График Victory Native</Text>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryAxis tickValues={[1, 2, 3, 4, 5]} />
        <VictoryAxis dependentAxis tickValues={[0, 2, 4, 6, 8]} />
        <VictoryLine
          data={data}
          style={{
            data: { stroke: "#c43a31", strokeWidth: 3 },
            parent: { border: "1px solid #ccc"}
          }}
          animate={{
            duration: 1000,
            onLoad: { duration: 500 }
          }}
        />
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default graph;
