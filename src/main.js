import './style.css';
import javascriptLogo from '../public/JavaScript.svg';
import ifcLogo from '../public/ifc.png';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://ifc43-docs.standards.buildingsmart.org" target="_blank">
      <img src="${ifcLogo}" class="logo" alt="IFC logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>IFC Data in Javascript</h1>

    <p class="description">
      Short, practical tutorials exploring how to process IFC files using
      <strong>Web-IFC</strong> and <strong>JavaScript</strong> — from geometry and
      properties to structure and analysis.
    </p>

    <div class="card">
      <a
        href="https://github.com/your-username/ifc-js-tutos"
        target="_blank"
        class="repo-link"
      >
        View tutorials on GitHub →
      </a>
    </div>

    <p class="read-the-docs">
      Click the logos to learn more about IFC and JavaScript
    </p>
  </div>
`;