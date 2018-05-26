import { AppConfig } from '../../../../common/config';

export const getApi = (endpoint: string, ...endpoints: string[]): string => {
  return [AppConfig.API_URL, ...[endpoint, ...endpoints]].join('/');
};
