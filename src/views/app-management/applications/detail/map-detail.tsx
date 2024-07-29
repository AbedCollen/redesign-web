/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

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

import {
  CheckCircleFill,
  ExclamationTriangleFill,
  HeartFill,
  QuestionCircleFill
} from '@nxweb/icons/bootstrap';
import { RefreshCcw } from '@nxweb/icons/feather';
import { Reload } from '@nxweb/icons/ionicons';

import { StoreCommand, useStore } from '@models/store';

import { CustomNodes } from './components/custom-nodes';
import { DATA_LIVE_MAP } from './constants';

import type { Connection, Edge } from 'reactflow';

import 'reactflow/dist/style.css';

const statusStyle = {
  dark: 'text-body-3 text-dark fw-medium',
  danger: 'text-body-3 text-dark fw-medium'
};

const initialNodes = DATA_LIVE_MAP.map((dataItem, index) => ({
  data: {
    label: (
      <CustomNodes
        health={dataItem.health}
        sync={dataItem.sync}
        title={dataItem.title}
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
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: '8px',
    color: 'black',
    height: 180,
    width: 480
  },
  targetPosition: Position.Left
}));

const initialEdges = [
  {
    id: 'e1-2',
    markerEnd: {
      color: '#E0E0E0',
      height: 30,
      type: MarkerType.Arrow,
      width: 30
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
      height: 30,
      type: MarkerType.Arrow,
      width: 30
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
      height: 30,
      type: MarkerType.Arrow,
      width: 30
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

const MapDetailMain = () => {
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const [store, dispatch] = useStore(
    (state) => state?.app?.appManagement?.application?.detail
  );

  useEffect(() => {
    dispatch(StoreCommand.app.appManagement.application.GetDetailData());
  }, [dispatch]);

  const navigate = useNavigate();
  const detailApp = () => {
    navigate(`./detail`);
  };

  return (
    <div className="element-wrapper">
      <div className="p-2 d-flex justify-content-between align-items-center">
        <a onClick={detailApp}>
          <h5 className="fw-bold m-0 text-info">{store?.title}</h5>
        </a>
        <div className="d-flex gap-1 align-items-center">
          <Button
            className="d-flex gap-50 align-items-center"
            variant="outline-primary"
          >
            <RefreshCcw size={16} /> Sync
          </Button>
          <Button
            className="d-flex gap-50 align-items-center"
            variant="primary"
          >
            <Reload size={20} /> Refresh
          </Button>
        </div>
      </div>
      <div className="px-2 py-25 d-flex justify-content-between bg-light-secondary">
        <div className="d-flex gap-1 align-items-center">
          <span
            className={`d-flex align-items-center gap-50 px-75 py-25 ${
              store?.health ? 'text-success' : 'text-secondary'
            }`}
          >
            {store?.health
              ? <HeartFill size={12} />

              : <QuestionCircleFill size={12} />}
            {store?.health
              ? <div className={statusStyle.dark}>Healthy</div>

              : <div className={statusStyle.danger}>Missing</div>}
          </span>
          <span
            className={`d-flex align-items-center gap-50 px-75 py-25 ${
              store?.sync ? 'text-success' : 'text-warning'
            }`}
          >
            {store?.sync
              ? <CheckCircleFill size={12} />

              : <ExclamationTriangleFill size={12} />}
            {store?.sync
              ? <div className={statusStyle.dark}>Synced</div>

              : (
              <div className={statusStyle.dark}>
                Out of Synced
              </div>
              )}
          </span>
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

MapDetailMain.displayName = 'MapDetailMain';
export { MapDetailMain };
