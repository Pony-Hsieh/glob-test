const { glob } = require("glob");

exe();
async function exe() {
  const pattern = "**/*.txt";
  const jsfiles = await glob(pattern, {
    ignore: "node_modules/**",
  });

  console.log(jsfiles);
}
