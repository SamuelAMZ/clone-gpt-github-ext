import { createContext, useState } from "react";

const TempContext = createContext();

export const TempProvider = ({ children }) => {
  const [qAndA, setAndA] = useState([
    {
      id: 1,
      q: "What is the purpose of this repository?",
      a: 'The purpose of the "altair-graphql/altair" repository is to host the source code and related files for the "Altair GraphQL Client" project. Altair GraphQL Client is a feature-rich GraphQL Client IDE designed to facilitate easy interaction with GraphQL servers from various platforms, including MacOS, Windows, Linux, Chrome, and Firefox. The main goal of this project is to provide developers with a powerful tool for working with GraphQL APIs. It aims to simplify the process of making GraphQL requests, managing headers and variables, and viewing responses and schema documentation. Altair offers a user-friendly interface with various features to enhance the GraphQL development experience, such as autocompletion of queries, automatic schema refreshing, and support for file uploads via GraphQL.',
    },
    {
      id: 2,
      q: "Are there any dependencies or requirements?",
      a: 'Yes, the "Altair GraphQL Client" has some dependencies and requirements that need to be met to install and run the project successfully. Here are the main dependencies and requirements:<br/>Node.js and npm or Yarn:<br/>The project is built with TypeScript and relies on Node.js as the runtime environment. Therefore, you need to have Node.js and npm (Node Package Manager) or Yarn installed on your system.Operating System:<br/>Altair GraphQL Client supports multiple platforms, including MacOS, Windows, Linux, Chrome, and Firefox. Make sure you are using a supported operating system to install and run the application.Package Managers:<br/>Depending on your operating system and preferences, you can use npm or Yarn to install and manage the project\'s dependencies.These are the general requirements for using the pre-built versions of Altair GraphQL Client. However, if you want to contribute to the project or work with the source code directly, you might need additional development tools and dependencies, such as Git and a code editor (e.g., Visual Studio Code).',
    },
    {
      id: 3,
      q: "What are some alternative or similar projects?",
      a: 'Sure, here are the names of some alternative or similar projects to the "Altair GraphQL Client": <br/>GraphQL Playground <br/>Insomnia Core <br/>GraphiQL <br/>Postman <br/>GraphQL Voyager <br/>Altair GraphQL Designer <br/>GraphQL Bin <br/>Space Explorer',
    },
  ]);

  const changeQAndA = (newLogin) => {
    setAndA(newLogin);
  };

  return (
    <TempContext.Provider value={{ qAndA, changeQAndA }}>
      {children}
    </TempContext.Provider>
  );
};

export default TempContext;
