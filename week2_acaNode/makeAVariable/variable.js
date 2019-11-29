const readLine = require("readline-sync");

const makeAVariable = () => {
  let varName = readLine.question(
    "What would you like to name your variable?: "
  );
  let varContent = readLine.question(
    "What would you like the value of your variable to be?: "
  );

  varName = varContent;
  console.log(varName);
};

module.exports = makeAVariable;
