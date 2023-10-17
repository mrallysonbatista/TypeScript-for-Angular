## Index commands ##
Start node project: npm init -y
Install TypeScript with dev dependence: npm install typescript -D
Compile expecific TS file to JS: npx tsc src/index.ts
Compile TS to JS from TS configuration file: npx tsc
Execute: node src/index.ts
Create TS configuration file: npx tsc --init

 ## Enabled Modules in TS configuration file ##
 "rootDir": "./src"
 "outDir": "./build"
 "experimentalDecorators": true

## Create the start script ##
Add in package.json in script: 
"start": "npx tsc && node build/index.js"
Start command: npm run start

## TS Node Dev ##
npm install ts-node-dev -D

It's a local server which understand TypeScript then you don't need to generate a build using npm node build/index.js.

Add in package.json in script: 
"start:dev": "ts-node-dev --respawn --transpile-only src/index.ts"

--respawn : it returns your file again;
--transpile-only : it only transpile the files;

Start command: npm run start:dev