A repo demonstrating an issue I'm experiencing with [NX](https://nx.dev/).

Contains:
- packages/libs/is-even
- packages/apps/my-app, which depends on the above

Runs fine when executed via `npx nx serve my-app`.

Cant figure out what the entry point should be when this code runs under AWS lambda, e.g. `my-app/main.handler`. 

Build output (dist) contains:

```
packages/
  apps/
    my-app/
      packages/
        apps/
          my-app/
            src/
              main.js
        libs/
          is-even/
      main.js
  libs/
```

Using `packages/apps/my-app/packages/apps/my-app/src/main.js` as the entry point allows me to hook the function up to the `handler` function, however fails because it cannot import `is-even`.

Using `packages/apps/my-app/main.js` as the entry point does not allow me to hook up the `handler` function, as this file appears to know nothing about that function.
