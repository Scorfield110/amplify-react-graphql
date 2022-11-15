//import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import { API } from "aws-amplify";
import { NavBar } from "./ui-components";
import { SideBar } from "./ui-components";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  //Image,
  View,
  //Card,
  Flex,
  TextField,
  Text,
 // components,
} from "@aws-amplify/ui-react";

//API
import { listProjects } from "./graphql/queries";
import {
  createProject as createProjectMutation,
  deleteProject as deleteProjectMutation,
} from "./graphql/mutations";

const App = ({ signOut }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    const apiData = await API.graphql({ query: listProjects });
    const projectsFromAPI = apiData.data.listProjects.items;
    setProjects(projectsFromAPI);
  }

  async function createProject(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"),
      employee: form.get("employee"),
      documents: form.get("documents"),

    };
    await API.graphql({
      query: createProjectMutation,
      variables: { input: data },
    });
    fetchProjects();
    event.target.reset();
  }

  async function deleteProject({ id }) {
    const newProjects = projects.filter((project) => project.id !== id);
    setProjects(newProjects);
    await API.graphql({
      query: deleteProjectMutation,
      variables: { input: { id } },
    });
  }


  return (
    <View className="App">
      
    
      <Heading level={1}>Projects Management System</Heading>
      <NavBar />
      <View as="form" margin="3rem 0" onSubmit={createProject}>
      <SideBar />
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Project Name"
            label="Project Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="employee"
            placeholder="Project Employee"
            label="Project Employee"
            labelHidden
            variation="quiet"
            required
          />
           <TextField
            name="documents"
            placeholder="Project Documents"
            label="Project Documents"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Project
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Projects</Heading>
      <View margin="3rem 0">
        {projects.map((project) => (
          <Flex
            key={project.id || project.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {project.name}
            </Text>
            <Text as="span">{project.employee}</Text>
            <Text as="span">{project.documents}</Text>
            <Button variation="link" onClick={() => deleteProject(project)}>
              Delete project
            </Button>
          </Flex>
        ))}
        
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
    
  );

};
export default withAuthenticator(App);