import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

export default function Projects({ route }) {
  const { projectId } = route.params;
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`http://192.168.0.104:3000/projects/${projectId}`)
      .then((response) => response.json())
      .then((data) => setProject(data))
      .catch((error) =>
        console.error("Error fetching project details:", error)
      );
  }, [projectId]);

  if (!project) {
    return <Text>Loading....</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.sections}>
        <Text style={styles.head}>Your Selected Project</Text>
        <Text style={styles.content}>Name: {project.name}</Text>
        <Text style={styles.content}>Description: {project.description}</Text>
        <Text style={styles.content}>Date: {project.startDate}</Text>
        <Text style={styles.content}>
          Emplyees for project: {project.assignedEmployees.join(", ")}
        </Text>
        <Text style={styles.content}>
          Equipment for project: {project.equipment.join(", ")}
        </Text>
      </View>
    </View>
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
  content: {
    fontSize: 16,
    lineHeight: 25,
  },
});
