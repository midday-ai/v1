import { existsSync } from "node:fs";
import path from "node:path";
import { Command } from "commander";
import { z } from "zod";

const initOptionsSchema = z.object({
  cwd: z.string(),
  yes: z.boolean(),
  defaults: z.boolean(),
});

export const init = new Command()
  .name("init")
  .description("initialize your project and install dependencies")
  .option("-y, --yes", "skip confirmation prompt.", false)
  .option("-d, --defaults,", "use default configuration.", false)
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    process.cwd(),
  )
  .action(async (opts) => {
    try {
      const options = initOptionsSchema.parse(opts);
      const cwd = path.resolve(options.cwd);

      // Ensure target directory exists.
      if (!existsSync(cwd)) {
        // logger.error(`The path ${cwd} does not exist. Please try again.`);
        process.exit(1);
      }
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  });
