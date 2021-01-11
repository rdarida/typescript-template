![Dependencies](https://david-dm.org/rdarida/typescript-template/status.svg) ![Development Dependencies](https://david-dm.org/rdarida/typescript-template/dev-status.svg)

# TypeScript Template
Kick off your project with this template.

## Project setup
1. Create new GitHub repository from this template.

2. Create new project on [SonarCloud](https://sonarcloud.io/) for the new repository.

3. Create secrets called **`SONAR_TOKEN`**, and **`NPM_TOKEN`** on the repository's settings page.

4. Rename all the occurrance of **"typescript-template"** and **"TypeScript Template"** in the project.

5. Run **`npm install`**.

6. Remove **`package-lock.json`** from **`.gitignore`**.

7. Rename **`Xmain`** to **`main`** in **.github/workflows/release.yml**.

8. Push the modification into your remote repository.


## Available scripts
In the project directory, you can run:

### `release`
Runs [standard-version](https://github.com/conventional-changelog/standard-version/) for versioning using [semver](https://semver.org/) and CHANGELOG generation powered by [Conventional Commits](https://conventionalcommits.org).

### `postrelease`
Runs AFTER `release`, pushes **standard-version**'s modification into the git repository.

## What's inside?
A quick look at the top-level files and directories.

    .
    ├── .github/workflows/
    ├── .vscode/
    ├── src/
    ├── test/
    ├── .editorconfig
    ├── .gitignore
    ├── commitlint.config.js
    ├── LICENSE
    ├── package.json
    ├── README.md
    └── sonar-project.properties

1. **`.github/workflows/`**: This directory contains your [GitHub Actions](https://docs.github.com/en/free-pro-team@latest/actions) [workflow files](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions).

2. **`.vscode/`**: This directory contains the workspace specific [VSCode settings](https://code.visualstudio.com/docs/getstarted/settings).

3. **`src/`**: This directory contains the source files.

4. **`test/`**: This directory contains the test files.

5. **`.editorconfig`**: [EditorConfig](https://editorconfig-specification.readthedocs.io/en/latest/#supported-pairs) helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.

6. **`.gitignore`**: This file tells git which files should not track / not maintain a version history for. See more about ignoring files [here](https://help.github.com/articles/ignoring-files/).

7. **`commitlint.config.js`**: Helps adhering to a commit convention. By supporting npm-installed configurations it makes sharing of commit conventions easy. See more about [here](https://commitlint.js.org).

8. **`LICENSE`**: This template is licensed under the MIT license.

9. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project. See more about the manifest file [here](https://docs.npmjs.com/cli/v6/configuring-npm/package-json).

10. **`README.md`**: A text file containing useful reference information about your project.

11. **`sonar-project.properties`**: This is a configuration file for [SonarCloud](https://sonarcloud.io).


## Resources

- [Step by step: Building and publishing an NPM TypeScript package](https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c)
