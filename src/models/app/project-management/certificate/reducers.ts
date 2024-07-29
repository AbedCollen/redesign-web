import type { TAction, TDispatch } from '@models/types';

import { CertificateActionType } from './types';

import type { CertificateAction, CertificateDataModel, CertificateModel } from './types';

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- BEGIN
const DUMMY_CERTIFICATE_DATA: CertificateDataModel[] = [
  {
    algorithm: 'RSA-256',
    description: 'description 1',
    domainNames: '*.cloud.nextplatform.ai, cloud.nextplatform.ai',
    expired: '2023-05-04',
    fingerprint: '24:AA:45:5D:61:BA:18:2E:D6:6C:BE:02:F8:06:1C:4F:22:05:EE:41',
    id: 1,
    issuer: 'R3',
    name: 'ssl-cloud-nextplatform-ai',
    namespace: 'demo',
    scope: 'scope 1',
    serialNumber: '413264304521421903521571291364980521508287',
    validBeginning: '2022-11-15'
  },
  {
    algorithm: 'RSA-128',
    description: 'description 2',
    domainNames: 'placeholder',
    expired: '2013-05-03',
    fingerprint: '35:AA:45:5D:61:BA:18:2E:D6:6C:BE:02:F8:06:1C:4F:22:05:EE:41',
    id: 2,
    issuer: 'R7',
    name: 'vault-postgres-nextflow',
    namespace: 'demo',
    scope: 'scope 2',
    serialNumber: '516264304521421903521571291364980521508287',
    validBeginning: '2011-07-06'
  },
  {
    algorithm: 'RSA-256',
    description: 'description 3',
    domainNames: '*.cloud.nextplatform.ai, cloud.nextplatform.ai',
    expired: '2023-05-04',
    fingerprint: '24:AA:45:5D:61:BA:18:2E:D6:6C:BE:02:F8:06:1C:4F:22:05:EE:41',
    id: 3,
    issuer: 'R3',
    name: 'ssl-cloud-nextplatform-ai',
    namespace: 'demo',
    scope: 'scope 3',
    serialNumber: '413264304521421903521571291364980521508287',
    validBeginning: '2022-11-15'
  },
  {
    algorithm: 'RSA-128',
    description: 'description 4',
    domainNames: 'placeholder',
    expired: '2013-05-03',
    fingerprint: '35:AA:45:5D:61:BA:18:2E:D6:6C:BE:02:F8:06:1C:4F:22:05:EE:41',
    id: 4,
    issuer: 'R7',
    name: 'vault-postgres-nextflow',
    namespace: 'demo',
    scope: 'scope 4',
    serialNumber: '516264304521421903521571291364980521508287',
    validBeginning: '2011-07-06'
  },
  {
    algorithm: 'RSA-256',
    description: 'description 5',
    domainNames: '*.cloud.nextplatform.ai, cloud.nextplatform.ai',
    expired: '2023-05-04',
    fingerprint: '24:AA:45:5D:61:BA:18:2E:D6:6C:BE:02:F8:06:1C:4F:22:05:EE:41',
    id: 5,
    issuer: 'R3',
    name: 'ssl-cloud-nextplatform-ai',
    namespace: 'demo',
    scope: 'scope 5',
    serialNumber: '413264304521421903521571291364980521508287',
    validBeginning: '2022-11-15'
  },
  {
    algorithm: 'RSA-128',
    description: 'description 6',
    domainNames: 'placeholder',
    expired: '2013-05-03',
    fingerprint: '35:AA:45:5D:61:BA:18:2E:D6:6C:BE:02:F8:06:1C:4F:22:05:EE:41',
    id: 6,
    issuer: 'R7',
    name: 'vault-postgres-nextflow',
    namespace: 'demo',
    scope: 'scope 6',
    serialNumber: '516264304521421903521571291364980521508287',
    validBeginning: '2011-07-06'
  }
];

// FOR SIMULATION PURPOSES ONLY, DELETE LATER --- END
const defaultDetailData = {
  algorithm: '',
  description: '',
  domainNames: '',
  expired: '',
  fingerprint: '',
  id: 0,
  issuer: '',
  name: '',
  namespace: '',
  scope: '',
  serialNumber: '',
  validBeginning: ''
};

const DUMMY_DETAIL_DATA = {
  algorithm: 'placeholder',
  description: 'placeholder',
  domainNames: 'placeholder',
  expired: 'placeholder',
  fingerprint: 'placeholder',
  id: 1,
  issuer: 'placeholder',
  name: 'placeholder',
  namespace: 'placeholder',
  scope: 'placeholder',
  serialNumber: 'placeholder',
  validBeginning: 'placeholder'
};

const CertificateDefault: CertificateModel = {
  detail: defaultDetailData,
  main: {
    data: [],
    total: 0
  }
};

const CertificateReducer = (state: CertificateModel = CertificateDefault, action: CertificateAction): CertificateModel => {
  switch (action.type) {
    case CertificateActionType.GetMainData:
      return { ...state, main: action.data };
    case CertificateActionType.GetDetailData:
      return { ...state, detail: action.data };

    default:
      return { ...state };
  }
};

const CertificateCommand = {
  GetMainData: (): TAction<CertificateAction, void> => {
    return (dispatch: TDispatch<CertificateAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_CERTIFICATE_DATA,
            total: DUMMY_CERTIFICATE_DATA.length
          },
          type: CertificateActionType.GetMainData
        });
      });
    };
  },
  GetDetailData: (): TAction<CertificateAction, void> => {
    return (dispatch: TDispatch<CertificateAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: DUMMY_DETAIL_DATA,
          type: CertificateActionType.GetDetailData
        });
      });
    };
  }

};

export { CertificateCommand, CertificateDefault, CertificateReducer };
