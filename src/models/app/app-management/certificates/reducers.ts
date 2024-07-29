import type { TAction, TDispatch } from '@models/types';

import { CertificatesActionType } from './types';

import type { CertificatesAction, CertificatesDataModel, CertificatesModel } from './types';

const DUMMY_CERTIFICATES_DATA: CertificatesDataModel[] = [
  {
    server: 'github.com',
    type: ['SSH', 'ECDSA-SHA2-NISTP256'],
    info: 'SHA256:zzXQOXSRBEiUtuE8AikJYKwbHaxvSc0ojez9YXaGp1A'
  },
  {
    server: 'github.com',
    type: ['SSH', 'ECDSA-SHA2-NISTP256'],
    info: 'navcore@oulook..com'
  },
  {
    server: 'github.com',
    type: ['SSH', 'ECDSA-SHA2-NISTP256'],
    info: 'navcore@oulook..com'
  },
  {
    server: 'github.com',
    type: ['SSH', 'ECDSA-SHA2-NISTP256'],
    info: 'navcore@oulook..com'
  }
];

const CertificatesDefault: CertificatesModel = {
  main: {
    data: [],
    total: 0
  }
};

const CertificatesReducer = (
  state: CertificatesModel = CertificatesDefault,
  action: CertificatesAction
): CertificatesModel => {
  switch (action.type) {
    case CertificatesActionType.GetMainData:
      return { ...state, main: action.data };

    default:
      return { ...state };
  }
};

const CertificatesCommand = {
  GetMainData: (): TAction<CertificatesAction, void> => {
    return (dispatch: TDispatch<CertificatesAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_CERTIFICATES_DATA,
            total: DUMMY_CERTIFICATES_DATA.length
          },
          type: CertificatesActionType.GetMainData
        });
      });
    };
  }
};

export { CertificatesCommand, CertificatesDefault, CertificatesReducer };
