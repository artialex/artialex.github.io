import { execSync } from "node:child_process";

const AUTOSAVE_INTERVAL = 1000 * 60 * 5; // 5 minutes

setInterval(() => {
  try {
    execSync("git add -A", { stdio: "ignore" });

    // check if there are changes
    execSync("git diff --quiet && git diff --cached --quiet");
  } catch {
    const timestring = new Date().toISOString();
    console.log(`Autosaved: ${timestring}`);

    // changes exist → commit
    execSync(`git commit -m "auto-save ${timestring}"`, {
      stdio: "ignore",
    });
  }
}, AUTOSAVE_INTERVAL);
