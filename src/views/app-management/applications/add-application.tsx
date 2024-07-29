/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { Button } from 'react-bootstrap';

import { Check, Edit2 } from '@nxweb/icons/feather';

import { ModalYAML } from './components/addApplication/ModalYAML';
import { Destination } from './components/addApplication/destination';
import { Directory } from './components/addApplication/directory';
import { General } from './components/addApplication/general';
import { Source } from './components/addApplication/source';

const AddApplicationMain = () => {
  // Arguments
  const [argumentsInputs, setArgumentsInputs] = useState<string[]>(['']);
  const handleArgumentsInputs = (index: number, value: string) => {
    const updatedInputs = [...argumentsInputs];

    updatedInputs[index] = value;
    setArgumentsInputs(updatedInputs);
  };
  const addArgumentsInputs = () => {
    setArgumentsInputs([...argumentsInputs, '']);
  };
  const removeArgumentsInputs = (index: number) => {
    const updatedInputs = [...argumentsInputs];

    updatedInputs.splice(index, 1);
    setArgumentsInputs(updatedInputs);
  };
  const removeAllArgumentsInputs = () => {
    setArgumentsInputs(['']);
  };

  // Variables
  const [variablesInputs, setVariablesInputs] = useState<string[]>(['']);
  const handleVariablesInputs = (index: number, value: string) => {
    const updatedInputs = [...variablesInputs];

    updatedInputs[index] = value;
    setVariablesInputs(updatedInputs);
  };
  const addVariablesInputs = () => {
    setVariablesInputs([...variablesInputs, '']);
  };
  const removeVariablesInputs = (index: number) => {
    const updatedInputs = [...variablesInputs];

    updatedInputs.splice(index, 1);
    setVariablesInputs(updatedInputs);
  };
  const removeAllVariablesInputs = () => {
    setVariablesInputs(['']);
  };

  const [showMonaco, setShowMonaco] = useState(false);
  const toggleMonaco = () => {
    setShowMonaco(!showMonaco);
  };

  return (
    <div className="element-wrapper">
      <div className="shadow-sm d-flex justify-content-between p-2">
        <h5 className="fw-bold m-0 text-black">New Application</h5>
        <div className="d-flex gap-1 align-items-center">
          <Button
            className="d-flex gap-50 align-items-center"
            variant="outline-primary"
            onClick={toggleMonaco}
          >
            <Edit2 size={20} /> Edit as YAML
          </Button>
          <ModalYAML showMonaco={showMonaco} toggleMonaco={toggleMonaco} />
          <Button className="d-flex gap-50 align-items-center">
            <Check size={16} /> Save
          </Button>
        </div>
      </div>

      <div className="m-2">
        <div className="border rounded p-2">
          <General />
          <Source />
          <Destination />
          <Directory
            addArgumentsInputs={addArgumentsInputs}
            addVariablesInputs={addVariablesInputs}
            argumentsInputs={argumentsInputs}
            handleArgumentsInputs={handleArgumentsInputs}
            handleVariablesInputs={handleVariablesInputs}
            removeAllArgumentsInputs={removeAllArgumentsInputs}
            removeAllVariablesInputs={removeAllVariablesInputs}
            removeArgumentsInputs={removeArgumentsInputs}
            removeVariablesInputs={removeVariablesInputs}
            variablesInputs={variablesInputs} />
        </div>
      </div>
    </div>
  );
};

AddApplicationMain.displayName = 'AddApplicationMain';

export { AddApplicationMain };
