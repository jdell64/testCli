/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {};

/** User packages configuration. */
const packages: any = {};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/die-roller',
  'app/toolbar',
  'app/box-animater',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => { cliSystemConfigPackages[barrelName] = { main: 'index' }; });

// load modules:
cliSystemConfigPackages["tsroll"] = { "defaultExtension": "js" }

cliSystemConfigPackages['@angular2-material/core'] = {
  format: 'cjs',
  defaultExtension: 'js',
  main: 'core.js'
}

cliSystemConfigPackages['@angular2-material/toolbar'] = {
  format: 'cjs',
  defaultExtension: 'js',
  main: 'toolbar.js'
}

cliSystemConfigPackages['@angular2-material/button'] = {
  format: 'cjs',
  defaultExtension: 'js',
  main: 'button.js'
}

cliSystemConfigPackages['@angular2-material/input'] = {
  format: 'cjs',
  defaultExtension: 'js',
  main: 'input.js'
}

cliSystemConfigPackages['@angular2-material/checkbox'] = {
  format: 'cjs',
  defaultExtension: 'js',
  main: 'checkbox.js'
}

cliSystemConfigPackages['@angular2-material/icon'] = {
  format: 'cjs',
  defaultExtension: 'js',
  main: 'icon.js'
}


/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js',
    '@angular2-material': 'vendor/@angular2-material',
    'tsroll': 'vendor/tsroll/dist'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
