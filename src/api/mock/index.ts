import { API } from '../base';

const mockAPI = API.mock({
  // DelayResponse: 1000
});

// Mock here

mockAPI.onAny().passThrough();

export { mockAPI };
