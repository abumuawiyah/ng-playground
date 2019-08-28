# Wspace

This workspace build using Angular 8 CLI (mono-repo). All the projects is in the ng-playground/projects folder

### storybook & component library
/projects/atomic-component

Run `npm run storybook` to open up the Storybook. Navigate to `http://localhost:6006/`. The app will automatically reload if you change any of the source files.

### others
below is sample applications that can be used to test the component library
- /projects/app1
- /projects/app2
- /projects/app3

Run `ng serve <app-name>` e.g `ng serve app1` to open up the application. Navigate to `http://localhost:4200/` If you open up more than one app, you need to specify the port, for example `ng serve app2 --port 4201`


## Code scaffolding

Run `npx plop` to generate a new component with CSS-in-JS and new story and sample variants included.

> the code scaffold will be change to use Angular schematics 

