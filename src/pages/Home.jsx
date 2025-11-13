import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Tabs from "../components/Tabs.jsx";
import HtmlPreview from "../components/HtmlPreview.jsx";
import LogsPane from "../components/LogsPane.jsx";
import DataPane from "../components/DataPane.jsx";
import HistoryPane from "../components/HistoryPane.jsx";

function Main() {
  const [active, setActive] = useState("preview");
  const [previewHtml, setPreviewHtml] = useState("<p>Click Preview to render…</p>");
  const [logsUrl, setLogsUrl] = useState(null);

  useEffect(() => {
    const onPreview = (e) => setPreviewHtml(e.detail || "");
    const onJobSet = (e) => {
      const jobId = e.detail;
      const base = import.meta.env.VITE_API_BASE_URL || "";
      setLogsUrl(`${base}/api/stream/logs/${jobId}`);
    };
    window.addEventListener("preview:update", onPreview);
    window.addEventListener("job:set", onJobSet);
    return () => {
      window.removeEventListener("preview:update", onPreview);
      window.removeEventListener("job:set", onJobSet);
    };
  }, []);

  return (
    <div className="h-full flex flex-col">
      <Tabs active={active} onChange={setActive} />
      <div className="flex-1 overflow-auto p-4">
        {active === "preview" && <HtmlPreview html={previewHtml} />}
        {active === "logs" && <LogsPane logsUrl={logsUrl} />}
        {active === "data" && <DataPane />}
        {active === "history" && <HistoryPane />}
      </div>
    </div>
  );
}

function SidebarWrapper() {
  return (
    <aside className="border-r p-4 overflow-y-auto">
      <Sidebar />
    </aside>
  );
}

const Home = { Sidebar: SidebarWrapper, Main };
export default Home;
