const Component = require("./Component");
const Module = require("./Module");

module.exports = (plop) => {
  plop.setGenerator("Component", Component);
  plop.setGenerator("Module", Module);
};
