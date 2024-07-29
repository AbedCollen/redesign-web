/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback } from 'react';
import { Col, Form, InputGroup } from 'react-bootstrap';

import ReactFlow, {
  addEdge,
  Background,
  ConnectionLineType,
  ConnectionMode,
  Controls,
  MarkerType,
  MiniMap,
  Position,
  useEdgesState,
  useNodesState
} from 'reactflow';

import { Search } from '@nxweb/icons/feather';

import { DATA_LIVE_MAP } from './constants';
import { CustomNodes } from './custom-nodes';

import type {
  Connection,
  Edge
} from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = DATA_LIVE_MAP.map((dataItem, index) => ({
  data: {
    label: (
      <CustomNodes
        error={dataItem.error}
        latency={dataItem.latency}
        name={dataItem.name}
        request={dataItem.request}
        type={dataItem.type} />
    )
  },
  id: (index + 1).toString(),
  position: {
    x: dataItem.x || 0, // Default to 0 if x is undefined
    y: dataItem.y || 0 // Default to 0 if y is undefined
  },
  sourcePosition: Position.Right, // Assuming Position.Right is a valid value
  style: {
    backgroundColor: dataItem.error <= 10 ? '#21C032' : dataItem.error > 50 ? '#FF404C' : '#FFB72B',
    borderColor: dataItem.borderColor,
    borderRadius: '8px',
    color: dataItem.color
  },
  targetPosition: Position.Left
}));

const initialEdges = [
  {
    id: 'e1-2',
    markerEnd: {
      color: '#E0E0E0',
      height: 20,
      type: MarkerType.Arrow,
      width: 20
    },
    source: '1',
    style: {
      stroke: '#E0E0E0',
      strokeWidth: 2
    },
    target: '2',
    type: 'smoothstep'
  },
  {
    animated: true,
    id: 'e1-3',
    markerEnd: {
      color: '#E0E0E0',
      height: 20,
      type: MarkerType.Arrow,
      width: 20
    },
    source: '1',
    style: {
      stroke: '#E0E0E0',
      strokeWidth: 2
    },
    target: '3',
    type: 'smoothstep'
  },
  {
    id: 'e3-4',
    markerEnd: {
      color: '#E0E0E0',
      height: 20,
      type: MarkerType.Arrow,
      width: 20
    },
    source: '3',
    style: {
      stroke: '#E0E0E0',
      strokeWidth: 2
    },
    target: '4',
    type: 'smoothstep'
  }
];

const reactFlowStyle = {
  background: 'white'
};

const connectionLineStyle = { stroke: '#E0E0E0', strokeWidth: 2 };

const LiveMapMain = () => {
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div>
      <div className="p-2 d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <h5 className="fw-bold text-black m-0">Simple Storage Service v0.1: request</h5>
          <h5 className="text-secondary m-0 ms-1">51b5a75</h5>
        </div>
        <div className="p-1 rounded">
          <Col sm={15}>
            <InputGroup>
              <Form.Control
                className="border-end-0"
                placeholder="Placeholder" />
              <InputGroup.Text className="border-start-0">
                <Search className="text-neutral-50" size={24} />
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </div>
      </div>
      <div className="px-2 py-1 d-flex justify-content-between bg-light-secondary">
        <div className="d-flex gap-3 align-items-center">
          <h6 className="d-flex text-black m-0">
            Trace Start:
            <div className="ms-1 fw-bold">December 23 2022, 09:28:55</div>
          </h6>
          <h6 className="d-flex text-black m-0">Duration:
            <div className="ms-1 fw-bold">252μs</div>
          </h6>
          <h6 className="d-flex text-black m-0">Service:
            <div className="ms-1 fw-bold">1</div>
          </h6>
          <h6 className="d-flex text-black m-0">Depth:
            <div className="ms-1 fw-bold">2</div>
          </h6>
          <h6 className="d-flex text-black m-0">Total Spans:
            <div className="ms-1 fw-bold">2</div>
          </h6>
        </div>
      </div>
      <div style={{ height: '85vh', width: '100%' }}>
        <ReactFlow
          connectionLineStyle={connectionLineStyle}
          connectionLineType={ConnectionLineType.SmoothStep}
          connectionMode={ConnectionMode.Loose}
          edges={edges}
          fitView={true}
          nodes={nodes}
          style={reactFlowStyle}
          onConnect={onConnect}
          onEdgesChange={onEdgesChange}
          onNodesChange={onNodesChange}
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
};

LiveMapMain.displayName = 'LiveMapMain';
export { LiveMapMain };
