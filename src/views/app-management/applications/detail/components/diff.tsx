import { DiffEditor } from '@monaco-editor/react';

const ApplicationsDiff = () => {
  const code1 =
    'apiVersion: v1 \n \t kind: PersistentVolumeClaim \n \t \t metadata: \n \t \t \t annotations \n \t control-plane.alpha.kubernetes.io/leader: >- \n \t {"holderIdentity":"b3fb4d79-1215-11ed-93c3- \n e2cae57e938","leaseDurationSeconds":15,"acquire Time":"2022-1 \n 0-20T04:37:32Z","renewTime":"2022-10-20T04:37:34Z", "leaderT \n ransitions":0} \n';
  const code2 =
    'apiVersion: v1 \n \t kind: PersistentVolumeClaim \n \t \t metadata: \n \t \t \t annotations \n \t control-plane.alpha.kubernetes.io/leader: >- \n \t {"holderIdentity":"b3fb4d79-1215-11ed-93c3- \n e2cae57e938","leaseDurationSeconds":15,"acquire Time":"2022-1 \n 0-20T04:37:32Z","renewTime":"2022-10-20T04:37:34Z", "leaderT \n ransitions":0} \n \t \t \t pv.kubernetes.io/bind-completed:\'yes\'';
  const options = {
    readOnly: true
  };

  return (
    <DiffEditor
      className="min-vh-100"
      language="yaml"
      modified={code2}
      options={options}
      original={code1} />
  );
};

ApplicationsDiff.displayName = 'ApplicationsDiff';

export default ApplicationsDiff;
