import { useState } from "react";

import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleClick(selectedButton) {
    setSelectedTopic(EXAMPLES[selectedButton]);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept {...concept} key={concept.title} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
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
          </menu>
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
        </section>
      </main>
    </div>
  );
}

export default App;
