import * as fs from "fs/promises"
import { getInput } from "@actions/core"

const message = {
  repoOwner: process.env["GITHUB_ACTOR"],
  repoURL: getInput("repoURL")
}

const jsonFile = `${message.repoOwner}_test.json`

await fs.writeFile(jsonFile, JSON.stringify(message))