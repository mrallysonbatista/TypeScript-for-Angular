Index commands:

Start node project: npm init -y
Install TypeScript with dev dependence: npm install typescript -D
Compile expecific TS file to JS: npx tsc src/index.ts
Compile TS to JS from TS configuration file: npx tsc
Execute: node src/index.ts
Create TS configuration file: npx tsc --init

 /* Enabled Modules in TS configuration file */
 "rootDir": "./src"
 "outDir": "./build"

Create the start script

Add in package.json in script: "start": "npx tsc && node build/index.js"
Start command: npm run start
