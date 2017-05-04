# Scala Content Manager
![Scala Content Manager](https://github.com/ScalaInc/cm-ui-poc/blob/master/ScalaCM.png)

The easiest way to manage this repository is by GitHub Desktop. Download and install a copy [here](https://desktop.github.com/)

Return here and click "Clone or Download" and choose "Open in Desktop". This will create a copy of the repository in your root folder.

Download [node.js](https://nodejs.org/en/) and install. Preferably, version 7 or latest

Install ONLY the npm dependencies as such
```
npm install --dev
```

After you confirm the node_modules and public folders are physically in your root folder, you can run your CMD and run the application on the browser using webpack like this:
```
npm start
```
Maintain this CMD window open and use a new CMD window if CMD is needed to install additional packages

## Adding Additional packages
Ensure whenever an additional npm or bower package is installed that it is saved as a dependency by attaching --save. Ex:
```
npm install mypackage --save
```
