import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: []
  })

  function handelStartAddProject() {
    console.log("click");
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  }

  let content;

  if (projectsState.selectedProjectID === null) {
    content = <NewProject />
  } else if (projectsState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handelStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handelStartAddProject} />
      {content}
    </main>
  );
}

export default App;
