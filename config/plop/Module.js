const path = "./src/modules";
const genPath = "./generators/modules";

module.exports = {
  description: "Generate a Module",
  prompts: [
    {
      name: "name",
      type: "input",
      message: "Module name",
    },
    {
      name: "hasRoute",
      type: "confirm",
      message: "Generate with Route?",
      default: true,
    },
    {
      name: "routePath",
      type: "input",
      message: "Route Path:",
      when: ({ hasRoute }) => {
        return hasRoute;
      },
    },
  ],
  actions: [
    {
      type: "add",
      path: `${path}/{{name}}/index.ts`,
      templateFile: `${genPath}/index.ts.hbs`,
      skip: ({ hasRoute }) => {
        return hasRoute ? "skip" : null;
      },
    },
    {
      type: "add",
      path: `${path}/{{name}}/index.ts`,
      templateFile: `${genPath}/index.r.ts.hbs`,
      skip: ({ hasRoute }) => {
        return !hasRoute ? "skip" : null;
      },
    },
    {
      type: "add",
      path: `${path}/{{name}}/{{name}}.tsx`,
      templateFile: `${genPath}/Module.tsx.hbs`,
    },
    {
      type: "add",
      path: `${path}/{{name}}/route.tsx`,
      templateFile: `${genPath}/route.tsx.hbs`,
      skip: ({ hasRoute }) => {
        return !hasRoute ? "skip" : null;
      },
    },
    {
      type: "add",
      path: `${path}/{{name}}/components/Header.tsx`,
      templateFile: `${genPath}/components/Header.tsx.hbs`,
    },
    {
      type: "add",
      path: `${path}/{{name}}/components/index.ts`,
      templateFile: `${genPath}/components/index.ts.hbs`,
    },
    {
      type: "add",
      path: `./cypress/integration/units/{{name}}.spec.ts`,
      templateFile: `${genPath}/test/Test.r.spec.ts.hbs`,
      skip: ({ hasRoute }) => {
        return !hasRoute ? "skip" : null;
      },
    },
    {
      type: "add",
      path: `./cypress/integration/units/{{name}}.spec.ts`,
      templateFile: `${genPath}/test/Test.spec.ts.hbs`,
      skip: ({ hasRoute }) => {
        return hasRoute ? "skip" : null;
      },
    },
    {
      type: "append",
      path: "./src/router/routes.ts",
      pattern: /},/,
      templateFile: `${genPath}/router.ts.hbs`,
      skip: ({ hasRoute }) => {
        return !hasRoute ? "skip" : null;
      },
    },
  ],
};
