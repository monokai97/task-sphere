import { getPayload } from '@/lib/payload';

export default async function TestConnectionPage() {
  const payload = await getPayload();
  
  const uiStates = await payload.find({
    collection: 'ui-state',
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Payload Connection Test</h1>
      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(uiStates, null, 2)}
      </pre>
    </div>
  );
}
