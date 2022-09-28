import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';


import editorStyles from "monaco-editor/min/vs/editor/editor.main.css";

export const initMonaco = () => {
  monaco.languages.register({ id: 'mySpecialLanguage' });

  monaco.languages.registerHoverProvider('mySpecialLanguage', {
    provideHover: function (model, position) {

      return {
        range: new monaco.Range(
          1,
          1,
          model.getLineCount(),
          model.getLineMaxColumn(model.getLineCount())
        ),
        contents: [
          { value: '**HOVER WORKING PROPERLY**' },
        ]
      };
    }
  });


  const $root = document.getElementById('root');
  monaco.editor.create($root, {
    value: '// type your code...',
    language: 'json',
  });

  const $yaml = document.getElementById('yaml');

  const div2 = document.createElement("div");
  div2.style.height = "300px";
  editorStyles
  $yaml.attachShadow({ mode: 'open' });

  $yaml.shadowRoot.appendChild(div2);

  const style = document.createElement('style');
  style.type = 'text/css';
  style.media = 'screen';
  style.innerHTML = editorStyles;

  $yaml.shadowRoot.appendChild(style);


  const editor1 = monaco.editor.create(div2, {
    value: '\n\nHover over this text',
    language: 'mySpecialLanguage',
    automaticLayout: true
  });
  setTimeout(1000, () => {
    editor1.layout({
      height: 300,
      width: 300
    })
  });
};
