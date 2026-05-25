import { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload';

export const afterChangeTask: CollectionAfterChangeHook = async ({
  doc, // full document, after change
  previousDoc, // full document, before change
  req, // full express request
  operation, // name of the operation ie. 'create', 'update'
}) => {
  const { payload } = req;
  
  let auditOperation = operation.toUpperCase();
  
  if (operation === 'update') {
    if (doc.completed !== previousDoc.completed) {
      auditOperation = 'TOGGLE';
    } else if (doc.isDeleted && !previousDoc.isDeleted) {
      auditOperation = 'DELETE';
    } else {
      auditOperation = 'UPDATE';
    }
  }

  // Lógica de Diferenciales (Hito 2.2.2)
  const diff: any = {};
  if (operation === 'update') {
    Object.keys(doc).forEach(key => {
      if (JSON.stringify(doc[key]) !== JSON.stringify(previousDoc[key])) {
        diff[key] = {
          before: previousDoc[key],
          after: doc[key],
        };
      }
    });
  }

  // Persistencia en TaskLogs (Hito 2.2.3)
  try {
    await payload.create({
      collection: 'task-logs',
      data: {
        taskId: doc.id,
        guestId: doc.guestId,
        operation: auditOperation as any,
        diff: operation === 'update' ? diff : doc,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('[AUDIT_ERROR] Failed to save task log:', error);
  }

  return doc;
};

export const afterDeleteTask: CollectionAfterDeleteHook = async ({
  req,
  id,
  doc,
}) => {
  const { payload } = req;

  try {
    await payload.create({
      collection: 'task-logs',
      data: {
        taskId: id as string,
        guestId: doc.guestId,
        operation: 'DELETE',
        diff: doc,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('[AUDIT_ERROR] Failed to save task log after delete:', error);
  }
};
