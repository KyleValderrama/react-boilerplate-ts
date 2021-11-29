module.exports = {
  description: "Generates a React Component",
  prompts: [
    {
      name: "type",
      type: "list",
      message: "Choose component type",
      choices: [
        {
          name: "Button",
          value: "Button",
        },
        {
          name: "Layout",
          value: "Layout",
        },
        {
          name: "Form",
          value: "Form",
        },
      ],
    },
    {
      name: "name",
      type: "input",
      message: "Button Name",
      when: ({ type }) => {
        return type === "Button";
      },
    },
  ],
  actions: [
    {
      type: "append",
      path: "./src/components/buttons/index.ts",
      pattern: /[;]/,
      templateFile: "./generators/components/buttons/index.ts.hbs",
      skip: ({ type }) => {
        return type !== "Button" ? "skip" : null;
      },
    },
    {
      type: "add",
      path: "./src/components/buttons/{{name}}.tsx",
      templateFile: "./generators/components/buttons/Button.tsx.hbs",
      skip: ({ type }) => {
        return type !== "Button" ? "skip" : null;
      },
    },
    {
      type: "add",
      path: "./src/components/buttons/stories/{{name}}.stories.tsx",
      templateFile:
        "./generators/components/buttons/stories/Button.stories.tsx.hbs",
      skip: ({ type }) => {
        return type !== "Button" ? "skip" : null;
      },
    },
  ],
};
