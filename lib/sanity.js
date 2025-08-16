import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'hra2pstp',   // from sanity.json or Sanity dashboard
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});