# Leap of Faith

Leap of Faith is a web based platformer game.

## Dependencies

*   **yarn** -- at least version 1.22.10
*   **nodejs** -- at least version 16.14.0

## Set up development environment

1.  Install dependencies:

    ```
    $ yarn install
    ```

2.  Start the development server:

    ```
    $ yarn start
    ```

## Build release

1.  Install dependencies:


    ```
    $ yarn install
    ```

2.  Bundle the code with webpack:

    ```
    $ yarn build
    ```

## How-to guides

### Check and fix code with ESLint

The following command will check JavaScript files in the `src` directory based
on the config in `.eslintrc.js` and report errors (if any):

```
$ yarn lint
```

ESLint can also be used to fix the problematic source code in simple cases (e.g.
missing semicolon). This can be done by running the following command:

```
$ yarn fix
```
