import { useEffect, useCallback } from 'react';
import { SYNC_CHANNEL_NAME } from '../lib/constants';
import { useQueryClient } from '@tanstack/react-query';

/**
 * Hook para sincronizar el estado entre pestañas usando BroadcastChannel.
 */
export function useSync(guestId: string) {
  const queryClient = useQueryClient();

  useEffect(() => {
    const channel = new BroadcastChannel(SYNC_CHANNEL_NAME);

    channel.onmessage = (event) => {
      const { type, guestId: messageGuestId } = event.data;

      // Solo procesar si el mensaje es para el mismo invitado
      if (messageGuestId === guestId) {
        if (type === 'TASK_UPDATED') {
          queryClient.invalidateQueries({ queryKey: ['tasks', guestId] });
        }
      }
    };

    return () => {
      channel.close();
    };
  }, [guestId, queryClient]);

  const broadcast = useCallback(
    (type: string) => {
      console.log(`Broadcasting event: ${type} for guest: ${guestId}`);
      const channel = new BroadcastChannel(SYNC_CHANNEL_NAME);
      channel.postMessage({ type, guestId });
      channel.close();
    },
    [guestId]
  );

  return { broadcast };
}
