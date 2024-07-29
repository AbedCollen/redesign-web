/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { Button, Dropdown } from 'react-bootstrap';

import { Download, Settings, Share2, ZoomIN } from '@nxweb/icons/feather';

import { StoreCommand, useStore } from '@models/store';

import { EditModal } from './edit-modal';
import { ShareModal } from './share-modal';
import { CLUSTER_OPTION, NAMESPACE_OPTION } from '../constants';

const GraphMetricHeader = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.monitoringAlerting?.monitoringGraph?.detail
  );

  useEffect(() => {
    dispatch(
      StoreCommand.app.monitoringAlerting.monitoringGraph.GetDetailData()
    );
  }, [dispatch]);

  const [selectedCluster, setSelectedCluster] = useState<string>('$cluster');

  const handleSelectedCluster = (eventKey: string | null) => {
    if (eventKey !== null) {
      setSelectedCluster(eventKey);
    }
  };

  const [selectedNamespace, setSelectedNamespace] =
    useState<string>('$namespace');

  const handleSelectedNamespace = (eventKey: string | null) => {
    if (eventKey !== null) {
      setSelectedNamespace(eventKey);
    }
  };

  const [editModal, setEditModal] = useState(false);
  const toggleEditModal = () => setEditModal(!editModal);

  const [shareModal, setShareModal] = useState(false);
  const toggleShareModal = () => setShareModal(!shareModal);

  return (
    <>
      <div className="d-flex justify-content-between">
        <h5>{store?.name}</h5>
        <div className="d-flex align-items-center gap-25">
          <Button variant="flat-primary" onClick={toggleEditModal}>
            <Settings color="#7cbbef" size={16} />
          </Button>
          <EditModal show={editModal} toggleModal={toggleEditModal} />
          <Dropdown className="no-arrow">
            <Dropdown.Toggle
              className="d-flex align-items-center gap-50"
              id="dropdown-basic"
              variant="flat-primary"
            >
              <Share2 color="#7cbbef" size={16} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Export this dashboard.</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                className="d-flex align-items-center gap-50"
                onClick={toggleShareModal}
              >
                <ZoomIN size={16} />
                View JSON
              </Dropdown.Item>
              <Dropdown.Item className="d-flex align-items-center gap-50">
                <Download size={16} />
                Download JSON
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <ShareModal show={shareModal} toggleModal={toggleShareModal} />
        </div>
      </div>
      <div>
        <p>{store?.description}</p>
        <div className="d-flex align-items-center gap-75 mt-2 mb-1">
          {store?.tags.map((tag) => (
            <div className="d-flex align-items-center gap-25 border-light bg-light-secondary rounded-1 px-75 py-25">
              {tag}
            </div>
          ))}
        </div>

        <div className="d-flex gap-75">
          <Dropdown onSelect={(e) => handleSelectedCluster(e || '')}>
            <Dropdown.Toggle
              className="d-flex align-items-center"
              variant="outline-dark"
            >
              {selectedCluster}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {CLUSTER_OPTION.map((key) => <Dropdown.Item eventKey={key.label}>{key.label}</Dropdown.Item>)}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown onSelect={(e) => handleSelectedNamespace(e || '')}>
            <Dropdown.Toggle
              className="d-flex align-items-center"
              variant="outline-dark"
            >
              {selectedNamespace}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {NAMESPACE_OPTION.map((key) => <Dropdown.Item eventKey={key.label}>{key.label}</Dropdown.Item>)}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

GraphMetricHeader.displayName = 'GraphMetricHeader';

export default GraphMetricHeader;
