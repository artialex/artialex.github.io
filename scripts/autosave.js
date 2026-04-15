import { exec } from "node:child_process";

exec('git diff --quiet || git commit -am "autosave"', () => {});
