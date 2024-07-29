import { useEffect } from 'react';

import { StoreCommand, useStore } from '@models/store';

import RetentionPeriodForm from '../../../components/custom/retention-period-form';

const LogsSettingsMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.logs?.settings?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.logs.settings.GetMainData());
  }, [dispatch]);

  return (
    <div className="p-2 element-wrapper">
      <h4 className="fw-bold mb-2 text-black">Settings</h4>
      <div className="border rounded p-2 mb-3">
        <h5 className="pb-1 fw-bold">Logs</h5>
        <RetentionPeriodForm data={store?.logs || { value: 0, timeUnit: '' }} />
      </div>
    </div>
  );
};

LogsSettingsMain.displayName = 'LogsSettingsMain';
export { LogsSettingsMain };
