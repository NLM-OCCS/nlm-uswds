# nlm-uwsds

## Summary

A gulp build of USWDS with style customizations for the OCCS/AB (applications
branch) of NLM using [uswds-compile](https://github.com/uswds/uswds-compile). This is different from what other organizations within NLM are doing to move
towards USWDS.

## Differences

This package uses yarn instead of npm as advised in the
link above, so that dependency resolutions can be handled 
simply using [selective dependency resolutions](https://classic.yarnpkg.com/en/docs/selective-version-resolutions/).

We also integrate browserSync so that the header and footer can be viewed and
tested.

### USWDS Theme

NLM's theme is in `src/sass`.  To avoid overwriting anything, we do not include
the gulp tasks from uswds-compile that would initialize `src/sass`.

### NLM Images

NLM's images are in `src/img` and are copied to `dist/img`. That means this
repository can be tested independently of the main web site and assets repository,
but it also means some duplication. Space is cheap.

## Needed Development Tools

You need node installed and in your path. The lowest version of node supported by `@uswds/compile` is node 16. 

Within OCCS/AB, we have node installed on the desktop, but node 14 is the default copy.
You can fix this and test it within a shell as follows:

```
set PATH=C:\Tools\Node\16.13.2;%PATH%
node -v
``` 

Install a copy of yarn and gulp-cli "globally" as follows:

```
npm install -g yarn gulp-cli
```

If you get a warning from the above command, you can ignore it or try:

```
npm install --location=global yarn gulp-cli
``` 

## How to build it

1. Clone from git however you would normally do it.

2. Start a command-prompt and change directory to the directory where you have clone from git.

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

5. See what it will look like by running:

```
yarn run serve
```

or

```
gulp serve
```

6. Some other tasks you may wish to try:

* remove `dist` subdirectory by running `gulp clean`.
* build `dist` and rebuild on any changes by running `gulp watch`

## Output

The output of the process is the files in the `dist` subdirectory, principally `dist/css/nlm-uswds.css` and `dist/css/nlm/nlm-uswds.css.map`.

## Promoting

For now, promotion to our assets repository is manual.

We will worry about automating that later, if at all.
