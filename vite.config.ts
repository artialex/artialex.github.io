import { defineConfig } from "vite";
import fs from "fs/promises";
import { join } from "path";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

function persistence() {
  return {
    name: "persistence",
    configureServer(server: any) {
      server.middlewares.use("/api/save", async (req: any, res: any) => {
        if (req.method !== "POST") return;

        const id = new URLSearchParams(req._parsedUrl.search).get("id");
        // console.log("Saving...", id);
        let body = "";
        req.on("data", (chunk: any) => (body += chunk));
        req.on("end", async () => {
          const filePath = join(process.cwd(), "public/data", `${id}.json`);

          await fs.writeFile(filePath, body);
          res.end(JSON.stringify({ ok: true }));
        });
      });

      server.middlewares.use("/api/load", async (req: any, res: any) => {
        // console.log("Loading...");
        const id = new URLSearchParams(req._parsedUrl.search).get("id");
        // console.log(id);

        try {
          const filePath = join(process.cwd(), "public/data", `${id}.json`);
          const data = await fs.readFile(filePath, "utf-8");
          res.setHeader("Content-Type", "application/json");
          res.end(data);
        } catch {
          res.end(JSON.stringify({}));
        }
      });
    },
  };
}

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? '/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    persistence(),
  ],
});
