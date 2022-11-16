//import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import { API } from "aws-amplify";
import MainDash from './ui-components/MainDash/MainDash';
import RightSide from './ui-components/RigtSide/RightSide';
import Sidebar from './ui-components/Sidebar';
//import { ProductDetail } from "./ui-components";
//import { StandardCard} from "./ui-components";
//import { ProductCard} from "./ui-components";
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
      status: form.get("status"),
      start_timestamp: form.get("start_timestamp"),
      end_timestamp: form.get("end_timestamp"),

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
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );

}
export default withAuthenticator(App);