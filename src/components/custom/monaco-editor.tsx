import type { FC } from 'react';
import { useState } from 'react';

import { Editor } from '@monaco-editor/react';

interface MonacoEditorProps {
  height?: string
  language: string
}

const MonacoEditor: FC<MonacoEditorProps> = ({
  height = '250px',
  language
}) => {
  const [editorVal, setEditorVal] = useState('');

  return (
    <Editor
      className="border p-1"
      height={height}
      language={language}
      value={editorVal}
      onChange={(value) => setEditorVal(value || '')}
    />
  );
};

MonacoEditor.displayName = 'MonacoEditor';
export { MonacoEditor };
