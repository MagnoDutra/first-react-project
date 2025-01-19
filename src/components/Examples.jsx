import { useState } from "react";
import TabButton from "./TabButton";
import Tabs from "./Tabs";
import Section from "./Section";

import { EXAMPLES } from "../data";

function Examples({}) {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleClick(selectedButton) {
    setSelectedTopic(EXAMPLES[selectedButton]);
  }

  return (
    <Section title="Examples">
      <Tabs
        buttons={
          <>
            {" "}
            <TabButton
              isSelected={selectedTopic?.title === "Components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic?.title === "JSX"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic?.title === "Props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic?.title === "State"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        <div id="tab-content">
          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <>
              <h3>{selectedTopic.title}</h3>
              <p>{selectedTopic.description}</p>
              <pre>
                <code>{selectedTopic.code}</code>
              </pre>
            </>
          )}
        </div>
      </Tabs>
      <menu></menu>
    </Section>
  );
}

export default Examples;
