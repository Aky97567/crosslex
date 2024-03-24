# website

## Package Dependency Synchronization Script

This script is designed to synchronize dependencies and devDependencies listed in the package.json files within each package directory with the root package.json file in a monorepo setup.

### Usage

1. **Clone the Repository**: Clone this repository to your local machine.

2. **Install TypeScript**: Ensure that TypeScript is installed globally on your system. You can install TypeScript globally using the following command:

   ```bash
   npm install -g typescript

   ```

3. **Set Up Package Directories**: Ensure that your project directory structure follows a monorepo setup with separate package directories. You may specify the directory containing all package directories in the `synchronizeDependencies` function call.

4. **Modify Script Parameters**: Open the `update-root-package-json.ts` file and modify the `packagesDir` variable with the directory path containing all your package directories.

5. **Compile and Run the Script**: Compile the TypeScript file using `tsc update-root-package-json.ts` to generate the JavaScript file. Then, run the JavaScript file using `node update-root-package-json.js` to synchronize dependencies with the root package.json.

```bash
tsc update-root-package-json.ts
node update-root-package-json.js
```
