import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import { CloudUploadOutline } from '@nxweb/icons/ionicons';

import { IconAddDocument, IconImport } from '@components/icon';

interface DragDropImportProps {
  buttonPosition?: 'inside' | 'outside'
  label?: string
  onFileSelect: (file: File) => void
  showSubmitButton?: boolean
}

const NxDragDropImport: React.FC<DragDropImportProps> = ({
  buttonPosition = 'inside',
  label,
  onFileSelect,
  showSubmitButton = false
}) => {
  const [dragging, setDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      setSelectedFile(file);
      onFileSelect(file);
    }

    setDragging(false);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
  };

  const handleSelectFile = () => {
    document.getElementById('file-input')?.click();
  };

  return (
    <>
      <Container
        className={`drop-zone ${dragging ? 'dragging' : ''}`}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <CloudUploadOutline className="mt-1 mb-1" size={30} stroke="rgba(127, 127, 127, 1)" />

        {selectedFile
          ? <p className="mb-0">Selected file: {selectedFile.name}</p>

          : <p className="mb-0">Drag your file here</p>}
        {label
          ? <>
            <p className="mb-0">Or</p>
            <p style={{ marginBottom: '1rem' }}>{label}</p>
            </>
          : null}
        <Row style={{ marginBottom: '1rem' }}>
          <Col>
            <input
              className="d-none"
              id="file-input"
              type="file"
              onChange={handleFileSelect} />
            {buttonPosition === 'inside'
              ? <Button className="d-flex align-items-center justify-content-center gap-25" size="sm" variant="outline-primary" onClick={handleSelectFile}>
                <IconAddDocument size={24} />
                Select File
                </Button>
              : null}
          </Col>
        </Row>
      </Container>
      {showSubmitButton || buttonPosition === 'outside'
        ? <div className="d-flex justify-content-end gap-1 mt-1">

          {buttonPosition === 'outside'
            ? <Button onClick={handleSelectFile}>
              Select File
              </Button>
            : null}
          {showSubmitButton
            ? <Button className="d-flex align-items-center justify-content-center gap-25" variant="primary">
              <IconImport size={24} />
              Import
              </Button>
            : null}
          </div>
        : null}

    </>
  );
};

NxDragDropImport.displayName = 'NxDragDropImport';

export { NxDragDropImport };
