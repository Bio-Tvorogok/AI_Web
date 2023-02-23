import React from 'react';
import Header from './header/Header';
import PromptForm from './prompt_form/PromptForm';

const App = () => {
    return (
        <div className=" bg-white dark:bg-black">
            <Header></Header>
            <PromptForm></PromptForm>
        </div>
    );
};

export default App;
