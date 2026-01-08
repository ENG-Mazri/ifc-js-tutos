import './style.css';
import javascriptLogo from '../public/JavaScript.svg';
import ifcLogo from '../public/ifc.png';
import * as webifc from 'web-ifc';

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

    <div class="upload-box">
      <label for="ifc-input" class="upload-label">
        📂 Choose an IFC file
      </label>
      <input
        id="ifc-input"
        type="file"
        accept=".ifc"
      />
      <span class="file-hint">Supported format: .ifc</span>
    </div>
  </div>
`;

const input = document.getElementById('ifc-input');

input.addEventListener('change', async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  console.log(`[IFC file] name: ${file.name} - size: ${file.size}`);

  const buffer = await file.arrayBuffer();
  const ifcData = new Uint8Array(buffer);
  console.log("[IFC DATA]: ", ifcData);

  const ifcApi = new webifc.IfcAPI();
  ifcApi.SetWasmPath("../node_modules/web-ifc/");
  // ifcApi.SetWasmPath("https://unpkg.com/web-ifc@0.0.74/");

  await ifcApi.Init();
  const modelId = ifcApi.OpenModel(ifcData);
  const maxId = ifcApi.GetMaxExpressID(modelId);

  console.log("[IFC Model Opened]: ", modelId, maxId);

  setTimeout(()=>{ 
    ifcApi.CloseModel(modelId);

    const maxId = ifcApi.GetMaxExpressID(modelId);

    console.log("[IFC Model Closed]: ", maxId);
  }, 2000);
});