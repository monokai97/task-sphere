import { buildConfig } from 'payload';
import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { fileURLToPath } from 'url';

import { UIState } from './collections/UIState';
import { Users } from './collections/Users';
import { GuestSessions } from './collections/GuestSessions';
import { Tasks } from './collections/Tasks';
import { TaskLogs } from './collections/TaskLogs';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: 'users',
  },
  collections: [UIState, Users, GuestSessions, Tasks, TaskLogs],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'secret-key',
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./payload.db',
    },
  }),
});
