import type { TAction, TDispatch } from '@models/types';

import { StorageClassesActionType } from './types';

import type { StorageClassesAction, StorageClassesDataModel, StorageClassesModel } from './types';

const DUMMY_STORAGE_CLASSES_DATA: StorageClassesDataModel[] = [
  {
    num: "#",
    name: "placeholder",
    provisioner: "placeholder",
    reclaimPolicy: "placeholder",
    volumeBindingMode: "placeholder",
    created: "placeholder",
    default: "placeholder"
  },
  {
    num: "#",
    name: "placeholder",
    provisioner: "placeholder",
    reclaimPolicy: "placeholder",
    volumeBindingMode: "placeholder",
    created: "placeholder",
    default: "placeholder"
  },
  {
    num: "#",
    name: "placeholder",
    provisioner: "placeholder",
    reclaimPolicy: "placeholder",
    volumeBindingMode: "placeholder",
    created: "placeholder",
    default: "placeholder"
  },
  {
    num: "#",
    name: "placeholder",
    provisioner: "placeholder",
    reclaimPolicy: "placeholder",
    volumeBindingMode: "placeholder",
    created: "placeholder",
    default: "placeholder"
  }
];

const StorageClassesDefault: StorageClassesModel = {
  main: {
    data: [],
    total: 0
  }
};

const StorageClassesReducer = (
  state: StorageClassesModel = StorageClassesDefault,
  action: StorageClassesAction
): StorageClassesModel => {
  switch (action.type) {
    case StorageClassesActionType.GetMainData:
      return { ...state, main: action.data };

    default:
      return { ...state };
  }
};

const StorageClassesCommand = {
  GetMainData: (): TAction<StorageClassesAction, void> => {
    return (dispatch: TDispatch<StorageClassesAction>) => {
      return Promise.resolve().then(() => {
        dispatch({
          data: {
            data: DUMMY_STORAGE_CLASSES_DATA,
            total: DUMMY_STORAGE_CLASSES_DATA.length
          },
          type: StorageClassesActionType.GetMainData
        });
      });
    };
  }
};

export { StorageClassesCommand, StorageClassesDefault, StorageClassesReducer };
