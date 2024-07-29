import type { ServiceAction, ServiceModel } from './service/types';
import type { TracesAction, TracesModel } from './traces/types';

interface DistributionTracingModel {
  service?: ServiceModel
  traces?: TracesModel
}

type DistributionTracingAction = ServiceAction | TracesAction;

export type { DistributionTracingModel, DistributionTracingAction };
