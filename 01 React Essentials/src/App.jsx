import Header from "./components/Header/Header.jsx";
import CoreConcept from './components/CoreConcept';
import { CORE_CONCEPTS } from './data.js';
import TabButton from "./components/TabButton.jsx";


function App() {
  function handelSelect() {
    console.log("Selected!!!");
  }

  return (
    <>
      <Header/>
      <main>
        <section id='core-concepts'>
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handelSelect}>Components</TabButton>
            <TabButton onSelect={handelSelect}>JSX</TabButton>
            <TabButton onSelect={handelSelect}>Props</TabButton>
            <TabButton onSelect={handelSelect}>State</TabButton>
          </menu>
        </section>
      </main>
    </>
  );
}

export default App;
