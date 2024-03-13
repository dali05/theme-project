@angular/elements <br>
module-federation<br>
ng new nom_du_projet --skip-install<br>

npm i webpack webpack-cli --save-dev<br>
ng new theme-project --create-application="false"<br>
ng g application theme-manager --routing --style=css<br>
ng g application partener1 --routing --style=css<br>
ng g application partener2 --routing --style=css<br>
ng add @angular-architects/module-federation --project theme-manager --port 4200<br>
ng add @angular-architects/module-federation --project partener1 --port 4300<br>
ng add @angular-architects/module-federation --project partener2 --port 4400<br>
ng g c home --project=theme-manager<br>
ng s auth<br>
https://www.angulararchitects.io/blog/module-federation-with-angulars-standalone-components/<br>
