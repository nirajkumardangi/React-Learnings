import { EXAMPLES } from "../data";
import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";


function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handelSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div className="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )
  }
  return (

    <Section title="Examples" id="examples">
      <menu>
        <TabButton isSelected={selectedTopic === 'components'} onClick={() => handelSelect("components")}>Components</TabButton>
        <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handelSelect("jsx")}>JSX</TabButton>
        <TabButton isSelected={selectedTopic === 'props'} onClick={() => handelSelect("props")}>Props</TabButton>
        <TabButton isSelected={selectedTopic === 'state'} onClick={() => handelSelect("state")}>State</TabButton>
      </menu>
      {tabContent}
    </Section>

  )
}

export default Examples;