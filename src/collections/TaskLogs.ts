import { CollectionConfig } from 'payload';
import { isGuestOwner } from '../lib/access';

export const TaskLogs: CollectionConfig = {
  slug: 'task-logs',
  admin: {
    useAsTitle: 'operation',
  },
  access: {
    read: isGuestOwner,
    create: () => true,
    update: isGuestOwner,
    delete: isGuestOwner,
  },
  fields: [
    {
      name: 'taskId',
      type: 'relationship',
      relationTo: 'tasks',
      required: true,
      index: true,
    },
    {
      name: 'guestId',
      type: 'relationship',
      relationTo: 'guest-sessions',
      required: true,
      index: true,
    },
    {
      name: 'operation',
      type: 'select',
      options: [
        { label: 'Create', value: 'CREATE' },
        { label: 'Update', value: 'UPDATE' },
        { label: 'Delete', value: 'DELETE' },
        { label: 'Toggle', value: 'TOGGLE' },
      ],
      required: true,
    },
    {
      name: 'diff',
      type: 'json',
    },
    {
      name: 'timestamp',
      type: 'date',
      defaultValue: () => new Date(),
      index: true,
    },
  ],
};
