import * as fs from 'fs';
import * as path from 'path';

interface PackageJson {
  dependencies?: { [key: string]: string };
  devDependencies?: { [key: string]: string };
}

function synchronizeDependencies(packagesDirs: string[]): void {
  // Read the main package.json file
  const rootPackageJsonPath = path.resolve(__dirname, 'package.json');
  const rootPackageJson: PackageJson = require(rootPackageJsonPath);

  // Initialize arrays to store dependencies and devDependencies
  const allDependencies: { [key: string]: string }[] = [];
  const allDevDependencies: { [key: string]: string }[] = [];

  // Iterate over each package directory
  packagesDirs.forEach(packageDir => {
    const packageJsonPath = path.join(packageDir, 'package.json');

    // Read the package.json file for the current package
    const packageJson: PackageJson = require(packageJsonPath);

    // Store dependencies and devDependencies in arrays
    if (packageJson.dependencies) {
      allDependencies.push(packageJson.dependencies);
    }
    if (packageJson.devDependencies) {
      allDevDependencies.push(packageJson.devDependencies);
    }
  });

  // Merge dependencies and devDependencies from all packages into single objects
  const mergedDependencies = Object.assign({}, ...allDependencies);
  const mergedDevDependencies = Object.assign({}, ...allDevDependencies);

  // Sort dependencies alphabetically
  const sortedDependencies: { [key: string]: string } = {};
  const sortedDevDependencies: { [key: string]: string } = {};

  Object.keys(mergedDependencies)
    .sort()
    .forEach(key => {
      sortedDependencies[key] = mergedDependencies[key];
    });

  Object.keys(mergedDevDependencies)
    .sort()
    .forEach(key => {
      sortedDevDependencies[key] = mergedDevDependencies[key];
    });

  // Update dependencies and devDependencies in the root package.json
  rootPackageJson.dependencies = sortedDependencies;
  rootPackageJson.devDependencies = sortedDevDependencies;

  // Write the updated root package.json file
  fs.writeFileSync(
    rootPackageJsonPath,
    JSON.stringify(rootPackageJson, null, 2),
  );

  console.log('Dependencies synchronized with root package.json.');
}

// Specify an array of directories containing packages
const packageDirs = [
  path.resolve(__dirname, 'frontend'),
  path.resolve(__dirname, 'sites'),
  // Add more package directory paths as needed
];

// Call the function with the array of package directory paths
synchronizeDependencies(packageDirs);
