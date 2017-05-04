# Scala Content Manager
![Scala Content Manager](https://github.com/ScalaInc/cm-ui-poc/blob/master/ScalaCM.png)

The easiest way to manage this repository is by GitHub Desktop. Download and install a copy [here](https://desktop.github.com/)

Return here and click "Clone or Download" and choose "Open in Desktop". This will create a copy of the repository in your root folder.

Download [node.js](https://nodejs.org/en/) and install.

Once installed install npm dependencies. Although the entire npm library is not necessary, you may have to run it as
```
npm install
```
However try installing ONLY the dependencies as such
```
npm install --dev
```
Install Gulp
```
npm install gulp --save
```
Install bower
```
bower install
```
Install SystemJS
```
npm install systemJS --save
```
Install jspm globally first
```
npm install jspm -g
```
Install jspm locally as well, (running npm install --dev earlier may have already done this but it doesn't hurt to make sure that it is running accordingly with babel)
```
npm install jspm --save
```
Install babel plugin
```
jspm install plugin-babel
```
Set up jspm with Babel configs (answer yes, choose Babel, and allow for all defaults in the questions asked)
```
jspm init -p
```
After you confirm the node_modules, bower_components, and dist folders are physically in your root folder, you can run your CMD and run the application on the browser using Gulp like this:
```
gulp serve
```
Maintain this CMD window open and use a new CMD window if CMD is needed to install additional packages

## Adding Additional packages
Ensure whenever an additional npm or bower package is installed that it is saved as a dependency by attaching --save. Ex:
```
npm install mypackage --save
```
## Testing Username and Password
For the time being the application does not allow for real authorizations. Use the info below to log in.
```
Username: any email format ex. a@a.com
Password: 1
```
