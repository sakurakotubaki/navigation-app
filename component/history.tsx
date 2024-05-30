import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  job: string;
  skill: string;
  info: string;
};

const History = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.history}>
        <Text style={styles.job}>{props.job}</Text>
        <Text style={styles.skill}>{props.skill}</Text>
        <Text style={styles.info}>{props.info}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      marginTop: 30,
      alignItems: 'center',
      flexDirection: 'column',
    },
    history: {
      width: 300,
      height: 150,
      backgroundColor: '#c3bff5',
      borderRadius: 10,
      alignItems: 'flex-start',
      padding: 10,
    },
    job: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    skill: {
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: 10,
    },
    info: {
      marginTop: 10,
      fontSize: 15,
    },
  });

export default History;