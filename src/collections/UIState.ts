import { CollectionConfig } from 'payload';

export const UIState: CollectionConfig = {
  slug: 'ui-state',
  admin: {
    useAsTitle: 'id',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
  },
  fields: [
    {
      name: 'sidebarCollapsed',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'searchQuery',
      type: 'text',
    },
    {
      name: 'userProfile',
      type: 'json',
    },
    {
      name: 'inputFooterExpanded',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
};
