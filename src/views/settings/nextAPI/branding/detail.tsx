import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';

import { Check, X } from '@nxweb/icons/feather';

import { MonacoEditor } from '@components/custom/monaco-editor';
import { NxFormCheck } from '@components/custom/nx-form-check';
import { NxFormControl } from '@components/custom/nx-form-control';
import { allRoutes } from '@config/constants';
import type { NextAPIBrandingDataModel } from '@models/app/settings/nextAPI/branding/types';
import { StoreCommand, useStore } from '@models/store';

import { classNameCheck, classNameControl } from '../../constants';

const NextAPIDetailBranding = () => {
  const { id } = useParams<{ id?: string }>();

  const [store, dispatch] = useStore(
    (state) => state?.app?.settings?.nextAPIBranding?.detail
  );

  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname.includes('/edit') ||
      location.pathname.includes('/view')
    ) {
      dispatch(StoreCommand.app.settings.nextAPIBranding.GetDetailData());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [stateData, setStateData] = useState<
  Partial<NextAPIBrandingDataModel> | undefined
  >(store);
  const handleChange = (value: string, prop: string) => setStateData((prev) => ({ ...prev, [prop]: value }));

  useEffect(() => {
    setStateData(store);
  }, [store]);

  const getPathType = () => {
    const path = window.location.pathname;

    if (path.endsWith('/add')) {
      return 'Add';
    }

    if (id && path.includes('/edit')) {
      return 'Edit';
    }

    if (id && path.includes('/view')) {
      return 'View';
    }

    return null;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [type, setType] = useState(getPathType());

  return (
    <div className="element-wrapper">
      <div className="p-2 d-flex justify-content-between shadow-sm">
        <h5 className="m-0 fw-bold text-black">{type} Branding</h5>

        {type === 'Add' || type === 'Edit'
          ? (
          <div className="d-flex gap-2">
            <Button
              as="a"
              className="d-flex align-items-center justify-content-center gap-50 btn-outline-primary border-danger text-danger"
              href={allRoutes.settings.nextAPIBranding}
            >
              <X size={20} /> Cancel
            </Button>
            <Button
              as="a"
              className="d-flex align-items-center justify-content-center gap-50"
              href={allRoutes.settings.nextAPIBranding}
            >
              <Check size={20} /> Save
            </Button>
          </div>
          )
          : type === 'View' ? null : null}
      </div>

      <div className="p-2 m-2 border rounded">
        <Row>
          <Col xs={12}>
            <NxFormControl
              disabled={type === 'View'}
              label="Branding Name*"
              placeholder="Branding name"
              value={stateData?.brandingName || ''}
              onChange={(e) => handleChange(e.target.value, 'brandingName')} />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col xs={6}>
            <NxFormControl
              disabled={type === 'View'}
              label="Platform Name*"
              placeholder="Platform name"
              value={stateData?.platformName || ''}
              onChange={(e) => handleChange(e.target.value, 'platformName')} />
          </Col>
          <Col xs={6}>
            <NxFormControl
              disabled={type === 'View'}
              label="Platform Logo (preview)"
              placeholder="Choose File"
              type="file" />
            <div className="d-flex align-items-center">
              <NxFormCheck
                checked={store?.isPlatformLogoActive}
                className={classNameCheck}
                disabled={type === 'View'}
                type="switch"
                onChange={(e) => e.preventDefault()} />
              <small className="mt-50">Hide Platform Logo</small>
            </div>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col xs={6}>
            <NxFormControl
              disabled={type === 'View'}
              label="Background Color"
              placeholder="e.g #000000"
              value={stateData?.backgroundColor || ''}
              onChange={(e) => handleChange(e.target.value, 'backgroundColor')} />
          </Col>
          <Col xs={6}>
            <NxFormControl
              disabled={type === 'View'}
              label="Background Image (preview)"
              placeholder="Choose File"
              type="file" />
            <div className="d-flex align-items-center">
              <NxFormCheck
                checked={store?.isBackgroundImageActive}
                className={classNameCheck}
                disabled={type === 'View'}
                type="switch" />
              <small className="mt-50">Hide Background Image</small>
            </div>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col xs={6}>
            <NxFormControl
              disabled={type === 'View'}
              label="Title*"
              placeholder="Title on Page"
              value={stateData?.title || ''}
              onChange={(e) => handleChange(e.target.value, 'title')} />
          </Col>
          <Col xs={6}>
            <NxFormControl
              disabled={type === 'View'}
              label="Welcome Text"
              placeholder="Welcome Text"
              value={stateData?.welcomeText || ''}
              onChange={(e) => handleChange(e.target.value, 'welcomeText')} />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col xs={12}>
            <NxFormControl
              as="textarea"
              disabled={type === 'View'}
              label="Message of the Day*"
              placeholder="Placeholder"
              rows={5}
              value={stateData?.messageOfTheDay || ''}
              onChange={(e) => handleChange(e.target.value, 'messageOfTheDay')} />
            <div className="d-flex align-items-center">
              <NxFormCheck
                checked={store?.useMOTDService}
                className={classNameCheck}
                disabled={type === 'View'}
                type="switch" />
              <small className="mt-50">Use MOTD Service</small>
            </div>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col xs={12}>
            <NxFormControl
              as="textarea"
              disabled={type === 'View'}
              label="About"
              placeholder="Placeholder"
              rows={5}
              value={stateData?.about || ''}
              onChange={(e) => handleChange(e.target.value, 'about')} />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col xs={12}>
            <NxFormControl
              className={classNameControl}
              disabled={type === 'View'}
              label="Custom Stylesheet (CSS)"
              readOnly={true} />
            <MonacoEditor language="css" />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col xs={12}>
            <NxFormControl
              className={classNameControl}
              disabled={type === 'View'}
              label="Custom Script"
              readOnly={true} />
            <MonacoEditor language="javascript" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

NextAPIDetailBranding.displayName = 'NextAPIDetailBranding';
export { NextAPIDetailBranding };
