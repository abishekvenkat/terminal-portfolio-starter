# Terminal Portfolio Starter

This starter kit serves as an interactive portfolio for developers, featuring a terminal-like user interface. Users can navigate through blog posts, view project details, and learn more about the developer's skills and experience, all while enjoying a unique command-line experience.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (>= 12)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abishekvenkat/terminal-portfolio-starter.git
   cd terminal-portfolio-starter
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:6888` to see your application in action.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

or

```bash
yarn build
```

The built files will be output to the `dist` directory.

## Project Structure

- `src/`: Contains the source code for the application.
  - `components/`: Reusable React components.
  - `utils/`: Utility functions, including Markdown parsing.
  - `types/`: TypeScript type definitions.
- `public/`: Static assets.
- `package.json`: Project metadata and dependencies.
- `vite.config.ts`: Vite configuration file.

## Markdown Parsing

This project includes a utility function to parse Markdown content and extract metadata. The `parseMarkdownMetadata` function can be found in `src/utils/markdown.ts`.

You can add Markdown posts in the `posts` object within `src/utils/markdown.ts`. Each post should include metadata in the following format:

```markdown
---
title: Your Post Title
date: YYYY-MM-DD
---
Your post content goes here.
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
