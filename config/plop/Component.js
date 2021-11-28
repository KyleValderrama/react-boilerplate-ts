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
          value: "-b",
        },
        {
          name: "Layout",
          value: "-l",
        },
        {
          name: "Form",
          value: "-f",
        },
      ],
    },
    {
      name: "name",
      type: "input",
      message: "Button Name",
      when: function ({ type }) {
        return type === "-b";
      },
    },
  ],
  actions: [
    {
      type: "append",
      path: "./src/components/buttons/index.ts",
      pattern: /[;]/,
      templateFile: "./generators/components/buttons/index.ts.hbs",
      skip: function ({ type }) {
        return type !== "Button" ? "skip" : null;
      },
    },
    {
      type: "add",
      path: "./src/components/buttons/{{name}}.tsx",
      templateFile: "./generators/components/buttons/Button.tsx.hbs",
      skip: function ({ type }) {
        return type !== "Button" ? "skip" : null;
      },
    },
  ],
};
