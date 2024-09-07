#!/usr/bin/env node
import { init } from "@/src/commands/init";
import { Command } from "commander";
import { getPackageInfo } from "./utils/get-package-info";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  const packageInfo = await getPackageInfo();

  const program = new Command()
    .name("v1-run")
    .description("Blah")
    .version(
      packageInfo.version || "1.0.0",
      "-v, --version",
      "display the version number",
    );

  program.addCommand(init);
  //   .addCommand(add).addCommand(diff);

  program.parse();
}

main();
