import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import Header from "./components/Header"
import CoreConcept from "./components/CoreConcept"
import TabButton from "./components/TabButton"

function App() {
  const [selectedTopic, setSelectedTopic] = useState('');
  console.log(selectedTopic)
  let tabContent = 'Please, select a button'
  function handleSelect(selectedButton) {
    tabContent = selectedButton;
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) =>
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            )}
          </ul>
        </section>
        <section id="examples" >
          <h2>Examples</h2>
          <menu>
            <TabButton
              isActive={selectedTopic === 'components'}
              onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton
              isActive={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isActive={selectedTopic === 'props'}
              onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isActive={selectedTopic === 'state'}
              onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>

          {!selectedTopic ? <p>Please, select a topic.</p> : <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>}


        </section>
      </main>
    </div>
  );
}

export default App;
