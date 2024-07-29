/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';

import { Plus } from '@nxweb/icons/feather';

import { ConfirmModal } from '@components/custom/confirm-modal';
import { allRoutes } from '@config/constants';
import { StoreCommand, useStore } from '@models/store';

import BrandCard from '../../components/brand-card';

const NextFlowBranding = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.settings?.nextFlowBranding.main
  );

  const [activeSwitchIndex, setActiveSwitchIndex] = useState<number | null>(null);

  const handleSwitchToggle = (index: number) => {
    if (activeSwitchIndex === index) {
      setActiveSwitchIndex(null);
    } else if (activeSwitchIndex === null) {
      setActiveSwitchIndex(index);
    }
  };

  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState(false);
  const toggleModal = () => setShowDeleteConfirmationModal(!showDeleteConfirmationModal);

  useEffect(() => {
    dispatch(StoreCommand.app.settings.nextFlowBranding.GetMainData());
  }, [dispatch]);

  return (
    <div className="element-wrapper">
      <div className="d-flex justify-content-between align-items-center mb-2 shadow-sm p-2">
        <h4 className="fw-bold text-black">Branding</h4>
        <Button
          as="a"
          className="align-items-center gap-50 d-flex"
          href={allRoutes.settings.addNextFlowBranding}
        >
          <Plus size={16} />
          Branding
        </Button>
      </div>
      <div className="mx-2 my-3 border rounded">
        <Row className="p-3">
          {store?.data.map((data, i) => (
            <BrandCard
              {...data}
              activeSwitchIndex={activeSwitchIndex}
              backgroundImage=""
              css=""
              handleSwitchToggle={handleSwitchToggle}
              index={i}
              pageSource={store?.pageSource}
              platformLogo=""
              script=""
              toggleModal={toggleModal} />
          ))}
        </Row>
        <ConfirmModal
          content="Are you sure to delete?"
          show={showDeleteConfirmationModal}
          title="Delete"
          toggleModal={toggleModal}
          variant="primary" />
      </div>
    </div>
  );
};

NextFlowBranding.displayName = 'NextFlowBranding';
export { NextFlowBranding };
