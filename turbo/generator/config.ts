import { execSync } from "node:child_process";
import type { PlopTypes } from "@turbo/gen";
import path from "path";
import fs from "fs";

const rootPath = process.cwd();

interface PackageAnswers {
  name: string;
}

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("init", {
    description: "Generate a new package for the Monorepo",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the package?",
        validate: (input: string) => {
          if (!input.trim()) {
            return "Package name cannot be empty";
          }
          const packagePath = path.join(rootPath, "packages", input);
          if (fs.existsSync(packagePath)) {
            return "A package with this name already exists";
          }
          return true;
        },
      },
    ],
    actions: [
      // Sanitize package name
      (answers: any) => {
        answers.name = answers.name.replace("@v1/", "").trim();
        return "Config sanitized";
      },
      // Create package.json
      {
        type: "add",
        path: path.join(rootPath, "packages", "{{ name }}", "package.json"),
        templateFile: "templates/package.json.hbs",
      },
      // Create tsconfig.json
      {
        type: "add",
        path: path.join(rootPath, "packages", "{{ name }}", "tsconfig.json"),
        templateFile: "templates/tsconfig.json.hbs",
      },
      // Create index.ts
      {
        type: "add",
        path: path.join(rootPath, "packages", "{{ name }}", "index.ts"),
        template: "export * from './src';",
      },
      // Create src/index.ts
      {
        type: "add",
        path: path.join(rootPath, "packages", "{{ name }}", "src", "index.ts"),
        template: "export const name = '{{ name }}';",
      },
      // Update root package.json to include new package
      {
        type: "modify",
        path: path.join(rootPath, "package.json"),
        transform: (content: string, answers: PackageAnswers) => {
          const packageJson = JSON.parse(content);
          if (!packageJson.workspaces) {
            packageJson.workspaces = [];
          }
          packageJson.workspaces.push(`packages/${answers.name}`);
          return JSON.stringify(packageJson, null, 2);
        },
      },
    ],
  });
}
