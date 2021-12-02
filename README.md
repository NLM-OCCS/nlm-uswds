# nlm-uwsds

## Summary

A gulp build of USWDS with style customizations for NLM based on [uswds-gulp](https://github.com/uswds/uswds-gulp)

## Differences

This package uses yarn instead of npm as advised in the
link above, so that dependency resolutions can be handled 
simply using [selective dependency resolutions](https://classic.yarnpkg.com/en/docs/selective-version-resolutions/).

## Needed Development Tools

You need a working copy of node.  The lowest recommended version is node 12.

Install a copy of yarn and gulp-cli "globally" as follows:

```
npm install -g yarn gulp-cli
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

or

```
gulp build
```

5. Some other tasks you may wish to try:

* remove `dist` subdirectory by running `gulp clean`.
* build `dist` and rebuild on any changes by running `gulp watch`

## Output

The output of the process is the files in the `dist` subdirectory, principally`dist/css/nlm-uswds.css` and `dist/css/nlm/nlm-uswds.css.map`.
