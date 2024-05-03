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
        <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handelSelect("components")}>Components</TabButton>
        <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handelSelect("jsx")}>JSX</TabButton>
        <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handelSelect("props")}>Props</TabButton>
        <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handelSelect("state")}>State</TabButton>
      </menu>
      {tabContent}
    </Section>
  )
}

export default Examples;