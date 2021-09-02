// import "./styles.css"; Added to development
import "./animation-text";
import generateProject from "./generate-project";

const projects = document.querySelector(".projects");

let url = "https://9dhcpnsgga.execute-api.us-east-2.amazonaws.com/default/personal-projects";

fetch(url).then(response => response.json()).then(data => {
  let fetchProjects = data[0].dataProjects;

  fetchProjects.map((project) => {
    generateProject(project, projects);
  });
}).catch(console.log);

