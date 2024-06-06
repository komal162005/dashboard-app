import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard({ navigation }) {
  const [project, setProject] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    // Fetching Data from api
    fetch("http://192.168.0.104:3000/projects")
      .then((response) => response.json())
      .then((data) =>
        setProject(data.filter((project) => project.status === "Ongoing"))
      );

    fetch("http://192.168.0.104:3000/employees")
      .then((response) => response.json())
      .then((data) => setEmployee(data));

    fetch("http://192.168.0.104:3000/equipments")
      .then((response) => response.json())
      .then((data) => setEquipment(data));
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.sections}>
        <Text style={styles.head}>Ongoing Projects</Text>
        <FlatList
          data={project}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Projects", { projectId: item.id })
              }
            >
              <Text style={styles.contentLink}>
                Name: {item.name} - Stutus: {item.status}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.sections}>
        <Text style={styles.head}>Emplyees Details</Text>
        <FlatList
          data={employee}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.content}>
              . {item.name} - {item.assignedProject}
            </Text>
          )}
        />
      </View>
      <View style={styles.sections}>
        <Text style={styles.head}>Equipment Details</Text>
        <FlatList
          data={equipment}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.content}>
              {item.name} - {item.availability}
            </Text>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sections: {
    margin: 15,
    borderWidth: 0,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },
  head: {
    fontSize: 25,
    marginBottom: 15,
    fontWeight: "700",
  },
  contentLink: {
    fontSize: 16,
    color: "blue",
    lineHeight: 25,
  },
  content: {
    fontSize: 16,
    lineHeight: 25,
  },
});
