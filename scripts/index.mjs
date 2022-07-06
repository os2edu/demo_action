import * as fs from "promise/fs"
import { getInput } from "@actions/core"

const message = {
  repoOwner: process.env["GITHUB_ACTOR"],
  repoURL: getInput("repoURL")
}

const jsonFile = `${message.repoOwner}_test.json`

await fs.writeFile(jsonFile, JSON.stringify(message))