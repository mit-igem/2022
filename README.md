# MIT iGEM 2022

For this year's Wiki, we'll be using [Gatsby](https://www.gatsbyjs.com/), a _static-site generator_. What this means is that we can use very nice user interface frameworks like React, and compile them down into static files which can be displayed by any web server, including GitLab Pages (where the Wikis are hosted this year). Gatsby runs on [Node.js](https://nodejs.org/en/), which is a JavaScript runtime used to develop web applications (it's like the `python` executable used to interpret Python scripts).

## Getting started

### Installing dependencies

The first step is to install all the dependencies we'll be using to write JavaScript and React code.

We'll be installing the following pieces of software (note that the programs are written in `monospace font` because they are command line programs - programs we can run on the command line; "command line" is also synonymous with "terminal"):

- [`nvm`](https://github.com/nvm-sh/nvm)
  - `nvm` stands for **Node Version Manager**. It's a handy utility that lets us Node.js on our computer in a portable way, so that it's almost impossible to mess up our system. It's also used by developers who need to work with different versions of Node (e.g. between personal projects and company projects).
- `node` (v14.18.0)
  - We'll use `nvm` to install `node`. Once we install `node`, it'll also install `npm`, the **Node Package Manager**. `npm` will let us download and use _libraries_ others have written. For example, Gatsby is a library written in JavaScript and runs on our computer using `node`.
- `gatsby`


1. Open up a command line window (Bash shell for Windows, Terminal on macOS) and run the following command (copy and pasting is fine).

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

### Running the development server to view live edits

```shell
npm run develop
```

### Pushing changes
If you want to push changes without triggering a CI run, add `-o ci.skip` option to your `git push` command:

```shell
git push -o ci.skip
```

## devnotes
- 