# Crosslex: The Advanced Vocabulary Trainer

## Table of Contents

- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Development](#development)
- [Available Scripts](#available-scripts)
- [Component Storybook](#component-storybook)
- [Tech Stack](#tech-stack)
- [Development Tools](#development-tools)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Crosslex is an innovative language learning platform built with NextJS, focusing on vocabulary expansion and improvement of language skills. It utilizes a monorepo structure managed with Yarn workspaces.

Our platform aims to provide an engaging and effective way for users to enhance their vocabulary. It offers personalized learning experiences, adaptive difficulty, and comprehensive progress tracking.

## Project Structure

The project is organized into several workspaces:

- `backend/runtime/*`
- `common/crosslex/*`
- `config/*`
- `frontend/*`
- `lib/core/*`
- `lib/external/*`
- `lib/system/*`
- `mock/*`
- `sites/*`

## Prerequisites

- Node.js (version compatible with Next.js 14)
- Yarn (version 4.5.1)

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   yarn install
   ```

## Development

To run the project in development mode, run one of the following from `website/`:

```
yarn dev:crosslex-next   # Next.js app
yarn dev:crosslex-react  # Vite React SPA
```

## Available Scripts

All commands run from `website/`.

- `yarn dev:crosslex-next`: Run the Next.js app in development mode
- `yarn dev:crosslex-react`: Run the Vite React SPA in development mode
- `yarn dev:storybook-next`: Start the Next.js Storybook (port 6006)
- `yarn dev:storybook-react`: Start the React/Vite Storybook (port 6007)
- `yarn build:storybook-next`: Build the Next.js Storybook (deployed to GitHub Pages)
- `yarn build:storybook-react`: Build the React/Vite Storybook

## Component Storybook

You can view the current state of the components in our Storybook, which is statically deployed on GitHub Pages:

[Crosslex Storybook](https://aky97567.github.io/crosslex/)

This Storybook provides a live demonstration of our components, making it easier for developers to understand and work with the UI elements of the project.

## Tech Stack

- Next.js 14 (main app)
- Vite 5 + React 18 (SPA)
- TypeScript
- Tailwind CSS

## Development Tools

- ESLint
- Prettier
- Storybook
- Prisma

## Configuration

The project uses a custom TypeScript configuration. Key features include:

- Strict type checking
- Module resolution set to Node
- Path aliases for easier imports
- Support for ECMAScript features

## Deployment

(Add information about deployment when available)

## Contributing

(Add guidelines for contributing to the project)

## License

(Add chosen license information)
