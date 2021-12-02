# nlm-uwsds

## Summary

A gulp build of USWDS with style customizations for NLM

## Setup

You need a working copy of node.  The lowest recommended version is node 12.

Rather than using the node package manager (npm), this project 
uses yarn, because this allows solving Javascript dependency 
problems much more easily.

It is recommended that you install a copy "globally" as follows:

```
npm install -g yarn
```

## How to build it

1. Clone from git using Atlassian Sourcetree or however you would normally do it

2. Start a command-prompt and change directory to the directory where you have clone from git

3. Install Node packages by entering:

```
yarn install
```

4. Build by running

```
yarn run build
```

