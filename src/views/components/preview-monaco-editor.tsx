import { useState } from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';

import { Editor } from '@monaco-editor/react';

const LANG_OPTIONS = [
  { label: 'javascript', value: 'javascript' },
  { label: 'json', value: 'json' },
  { label: 'sql', value: 'sql' },
  { label: 'html', value: 'html' },
  { label: 'css', value: 'css' }
];

const PRESET_OPTIONS = [
  {
    label: 'Add JSON value',
    value: JSON.stringify({ key: 'value' }, null, 2)
  }
];

const reactMonacoURL = 'https://www.npmjs.com/package/@monaco-editor/react';
const microsoftMonacoURL = 'https://microsoft.github.io/monaco-editor/';

const PreviewMonacoEditor = () => {
  const [lang, setLang] = useState(LANG_OPTIONS[0].value);
  const [editorVal, setEditorVal] = useState('');

  return (
    <>
      <Alert>
        For more in-depth documentation, please refer to:
        <br />
        <a className="text-info" href={reactMonacoURL} rel="noreferrer" target="_blank">@monaco-editor/react</a>
        <br />
        <a className="text-info" href={microsoftMonacoURL} rel="noreferrer" target="_blank">Monaco - The Editor of the Web</a>
      </Alert>
      <Row className="mb-2">
        <Col>
          <div className="text-body-2 fw-bold mb-75">Language (not limited to the options provided in this demo)</div>
          <Row>
            {LANG_OPTIONS.map((o) => (
              <Col key={o.value} xs={2}>
                <Form.Check
                  checked={lang === o.value}
                  label={o.label}
                  name="monaco-lang"
                  type="radio"
                  onChange={(e) => (e.target.checked ? setLang(o.value) : null)} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <div className="text-body-2 fw-bold mb-75">Preset Value</div>
          <Row>
            {PRESET_OPTIONS.map((o) => (
              <Col key={o.value} xs={3}>
                <Button onClick={() => setEditorVal(o.value)}>{o.label}</Button>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <pre className="p-2">
            {`
import { Editor } from '@monaco-editor/react';

<Editor
  height="250px"
  language="${lang}"
  value     --------> Accepts strings ONLY
  onChange  --------> Returns string
/>
          `}
          </pre>
        </Col>
        <Col xs={8}>
          <Editor
            height="250px"
            language={lang}
            value={editorVal}
            onChange={(value) => setEditorVal(value || '')} />
        </Col>
      </Row>
    </>
  );
};

PreviewMonacoEditor.displayName = 'PreviewMonacoEditor';
export { PreviewMonacoEditor };
