1. `npx nx generate @nx/js:library my-lambda --unitTestRunner=jest --testEnvironment=node --no-interactive`
2. `npx nx generate @nx/js:library my-lib --unitTestRunner=jest --testEnvironment=node --no-interactive`
3. `npx nx build my-lambda`
4. `node dist/packages/libs/my-lambda/src/index.js`
> Error: Cannot find module '@myorg/my-lib'  
Require stack:  
/home/user/repos/nx-issue/myorg/dist/packages/libs/my-lambda/src/index.js
