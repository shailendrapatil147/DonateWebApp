
<h1 align="center">Donate web app using Polymer 3 with type script</h1>

### Setup
- Install [Node.js](https://nodejs.org). Because of the syntax used in the configuration files,
  at least `v8.3` is required. If you want to feel safe, the latest LTS will work well.
- Install [npm](https://www.npmjs.com/get-npm)
- Clone this repository
- Install the project dependencies
  ```bash
  npm install
  ```
  _This will automatically install both the frontend and the build tools dependencies.
  Go on reading to understand the project structure and why it is organized in this way._
- _Optional:_ if you wish to deploy your PWA on Firebase, remember that you also need to
  install `firebase-tools`
  ```bash
  npm install global firebase-tools
  ```
- Profit!

### Available scripts
```bash
npm start
# Starts webpack dev server with live reload on http://localhost:8080

npm build
# Builds the production ready website in the build/ directory
# By default, the base path of the built project will be '/'
# If you wish to change this behavior, you can set the basePath
# variable to whatever you want the base path to be inside conf/app.config.js
# REMEMBER TO ADD THE LEADING AND TRAILING SLASHES
```

### Project configuration
You can find a lot of useful configuration options inside the `conf/app.config.js` file.
If these options aren't enough for you, you can always edit webpack configuration and everything
else at you needs.

### Project Structure
---

<details>
  <summary><b>polymer3-webpack-starter-kit <code>(click to expand)</code></b></summary>
  <details>
    <summary><code>├── <b>conf</b></code></summary>
    <code>Contains the configuration-related files</code>
    <details>
      <summary><code>│   ├── <b>webpack</b></code></summary>
      <code>Files related to webpack configurations</code>
      <details>
        <summary><code>│   │   ├── <b>custom-loaders</b></code></summary>
        <code>Directory containing custom loaders for webpack</code>
        <details>
          <summary><code>│   │   │   ├── index.js</code></summary>
          <code>A file that automagically loads all the loaders that are added inside the 'custom-loaders' folder</code>
        </details>
        <details>
          <summary><code>│   │   │   └── minify-template.loader.js</code></summary>
          <code>A custom loader that minifies the HTML and CSS contained in template strings</code>
        </details>
      </details>
      <details>
        <summary><code>│   │   ├── base.config.js</code></summary>
        <code>The base webpack configuration, which other configurations extend</code>
      </details>
      <details>
        <summary><code>│   │   ├── dev-server.config.js</code></summary>
        <code>The development server configuration, aka the options passed to 'webpack-serve'</code>
      </details>
      <details>
        <summary><code>│   │   ├── dev.config.js</code></summary>
        <code>The development configuration for webpack, optimized for being fast and verbose</code>
      </details>
      <details>
        <summary><code>│   │   └── prod.config.js</code></summary>
        <code>The production configuration for webpack, optimized to output highly compressed chunks for production use</code>
      </details>
    </details>
    <details>
      <summary><code>│   ├── app.config.js</code></summary>
      <code>Contains some configuration variables used all around the project</code>
    </details>
    <details>
      <summary><code>│   ├── postcss.config.js</code></summary>
      <code>PostCSS configuration file</code>
    </details>
  </details>
  <details>
    <summary><code>├── <b>src</b></code></summary>
    <code>Contains the app source files</code>
    <details>
      <summary><code>│   ├── <b>components</b></code></summary>
      <code>Contains our custom Web Components</code>
      <details>
        <summary><code>│   │   ├── <b>icons</b></code></summary>
        <code>A custom element used to define our own custom iconset</code>
        <details>
          <summary><code>│   │   │   ├── defs.html</code></summary>
          <code>The HTML file containing the icons SVG definitions</code>
        </details>
        <details>
          <summary><code>│   │   │   └── index.ts</code></summary>
          <code>The TypeScript class that declares the custom element and imports the icons definitions</code>
        </details>
      </details>
      <details>
        <summary><code>│   │   ├── <b>shared-styles</b></code></summary>
        <code>A custom element used to define the styles shared between our other elements</code>
        <details>
          <summary><code>│   │   │   ├── default.scss</code></summary>
          <code>The SCSS file containing the shared styles definitions</code>
        </details>
        <details>
          <summary><code>│   │   │   └── index.ts</code></summary>
          <code>The TypeScript class that declares the custom element and imports the shared styles</code>
        </details>
      </details>     
    </details>
</details>
---