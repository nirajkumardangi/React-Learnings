import { useState } from "react";
import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from "./data.js";

import Header from "./components/Header/Header.jsx";
import CoreConcept from './components/CoreConcept';
import TabButton from "./components/TabButton.jsx";


function App() {
  const [selectedTopic, setSelectedTopic] = useState('components');

  function handelSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
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
            <TabButton onSelect={() => handelSelect("components")}>Components</TabButton>
            <TabButton onSelect={() => handelSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handelSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handelSelect("state")}>State</TabButton>
          </menu>
          <div className="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
