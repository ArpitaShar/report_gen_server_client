import { useState } from "react";

export default function Sidebar() {
  const [fileCount, setFileCount] = useState(0);

  const onUpload = (files) => {
    if (!files?.length) return;
    // For now just update the UI; wire to API later
    setFileCount(files.length);
    // Example: window.dispatchEvent(new CustomEvent('preview:update', { detail: "<h2>Preview stub</h2>" }))
  };

  return (
    <form className="space-y-4" onSubmit={(e)=>e.preventDefault()}>
      <div>
        <label className="block text-sm font-medium">Department</label>
        <select className="mt-1 w-full border rounded px-2 py-1" defaultValue="">
          <option value="">Select…</option>
          <option>Finance</option><option>HR</option><option>Operations</option><option>IT</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-sm font-medium">From</label>
          <input type="date" className="mt-1 w-full border rounded px-2 py-1"/>
        </div>
        <div>
          <label className="block text-sm font-medium">To</label>
          <input type="date" className="mt-1 w-full border rounded px-2 py-1"/>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Upload files</label>
        <input type="file" multiple onChange={(e)=>onUpload(e.target.files)} className="mt-1 w-full"/>
        {fileCount > 0 && <p className="text-xs text-gray-600 mt-1">{fileCount} file(s) selected</p>}
      </div>

      <fieldset className="border rounded p-2">
        <legend className="text-sm font-medium">Report features</legend>
        {["executive_summary","metrics","trends","visuals","insights"].map(k=>(
          <label key={k} className="flex items-center gap-2 text-sm">
            <input type="checkbox" value={k} defaultChecked={k!=="trends"} />
            {k.replaceAll("_"," ")}
          </label>
        ))}
      </fieldset>

      <details className="border rounded p-2">
        <summary className="cursor-pointer font-medium">Advanced model options</summary>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div>
            <label className="block text-xs">Model</label>
            <input placeholder="llama3.1" className="w-full border rounded px-2 py-1"/>
          </div>
          <div>
            <label className="block text-xs">Temperature</label>
            <input type="number" step="0.05" defaultValue={0.2} className="w-full border rounded px-2 py-1"/>
          </div>
          <div className="col-span-2">
            <label className="block text-xs">Max tokens</label>
            <input type="number" defaultValue={4096} className="w-full border rounded px-2 py-1"/>
          </div>
        </div>
      </details>

      <div className="flex gap-2">
        <button className="px-3 py-2 rounded bg-gray-900 text-white">Preview</button>
        <button className="px-3 py-2 rounded border">Generate PDF</button>
      </div>
    </form>
  );
}
