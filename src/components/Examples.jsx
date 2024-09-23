import TabButton from "./TabButton"
import Tabs from "./Tabs"
import Section from "./Section"
import { EXAMPLES } from "../data";
import { useState } from "react";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState('');
    let tabContent = 'Please, select a button'
    function handleSelect(selectedButton) {
        tabContent = selectedButton;
        setSelectedTopic(selectedButton);
    }

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        )
    }

    return (
        <Section id="examples" title="Examples" >
            <Tabs buttons={
                <>
                    <TabButton
                        isActive={selectedTopic === 'components'}
                        onClick={() => handleSelect('components')}>Components</TabButton>
                    <TabButton
                        isActive={selectedTopic === 'jsx'}
                        onClick={() => handleSelect('jsx')}>JSX</TabButton>
                    <TabButton isActive={selectedTopic === 'props'}
                        onClick={() => handleSelect('props')}>Props</TabButton>
                    <TabButton isActive={selectedTopic === 'state'}
                        onClick={() => handleSelect('state')}>State</TabButton>
                </>
            }>
                {tabContent}
            </Tabs>

        </Section>
    )
}
