import { CollectionConfig } from 'payload';
import { isGuestOwner } from '../lib/access';
import { afterDeleteGuest } from './hooks/cascadeDelete';

export const GuestSessions: CollectionConfig = {
  slug: 'guest-sessions',
  admin: {
    useAsTitle: 'id',
  },
  access: {
    read: isGuestOwner,
    create: () => true,
    update: isGuestOwner,
    delete: isGuestOwner,
  },
  hooks: {
    afterDelete: [afterDeleteGuest],
  },
  fields: [
    {
      name: 'id',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'lastActive',
      type: 'date',
      defaultValue: () => new Date(),
    },
  ],
};
