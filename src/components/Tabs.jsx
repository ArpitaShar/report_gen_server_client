export default function Tabs({ active, onChange }) {
  const tabs = ['preview','logs','data','history'];
  return (
    <div className="border-b px-4 py-2 flex gap-2">
      {tabs.map(t => (
        <button key={t}
          className={`px-2 py-1 rounded text-sm ${active===t ? 'bg-gray-900 text-white' : 'border'}`}
          onClick={()=>onChange(t)}>
          {t.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
