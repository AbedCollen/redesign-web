import { combineReducers } from 'redux';

import {
  ServiceCommand,
  ServiceDefault,
  ServiceReducer
} from './service/reducers';
import { TracesCommand, TracesDefault, TracesReducer } from './traces/reducers';

import type { DistributionTracingModel } from './types';

const distributionTracingReducer = combineReducers({
  service: ServiceReducer,
  traces: TracesReducer
});

const distributionTracingDefault: DistributionTracingModel = {
  service: ServiceDefault,
  traces: TracesDefault
};

const distributionTracingCommand = {
  service: ServiceCommand,
  traces: TracesCommand
};

export {
  distributionTracingReducer,
  distributionTracingDefault,
  distributionTracingCommand
};
