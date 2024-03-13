@angular/elements
module-federation
ng new nom_du_projet --skip-install

npm i webpack webpack-cli --save-dev
ng new theme-project --create-application="false"
ng g application theme-manager --routing --style=css
ng g application partener1 --routing --style=css
ng g application partener2 --routing --style=css
ng add @angular-architects/module-federation --project theme-manager --port 4200
ng add @angular-architects/module-federation --project partener1 --port 4300
ng add @angular-architects/module-federation --project partener2 --port 4400
ng g c home --project=theme-manager
ng s auth
https://www.angulararchitects.io/blog/module-federation-with-angulars-standalone-components/
