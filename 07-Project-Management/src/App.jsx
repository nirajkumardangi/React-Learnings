import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: []
  })

  function handelSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: id,
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectID = Math.random();
      const newProject = {
        ...projectData,
        id: projectID,
      }

      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectID
  );

  let content = <SelectedProject project={selectedProject} />;

  if (projectsState.selectedProjectID === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handelSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
