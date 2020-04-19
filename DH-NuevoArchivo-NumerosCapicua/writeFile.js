const fs = require("fs");

module.exports.writeFile = () => {
  let [, , name, data] = process.argv;

  let noInfo = {
    name: "new_file.doc",
    data: "no info",
  };

  fs.writeFileSync(name || noInfo.name, data || noInfo.data);
};
