import { CollectionConfig } from 'payload';
import { afterChangeTask, afterDeleteTask } from './hooks/auditTasks';
import { afterDeleteTaskCascade } from './hooks/cascadeDelete';
import { isGuestAndActive, isGuestOwner } from '../lib/access';

export const Tasks: CollectionConfig = {
  slug: 'tasks',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: isGuestAndActive,
    create: () => true, // Cualquier invitado puede crear
    update: isGuestOwner,
    delete: isGuestOwner,
  },
  hooks: {
    afterChange: [afterChangeTask],
    afterDelete: [afterDeleteTask, afterDeleteTaskCascade],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      validate: (val: string) => {
        if (val && val.length >= 3) return true;
        return 'El título debe tener al menos 3 caracteres.';
      },
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'completed',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'position',
      type: 'text',
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
      name: 'isDeleted',
      type: 'checkbox',
      defaultValue: false,
      index: true,
    },
  ],
};
