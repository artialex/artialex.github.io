const { exec } = require("child_process");

exec('git diff --quiet || git commit -am "autosave"', () => {});
