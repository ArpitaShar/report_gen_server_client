import DOMPurify from "dompurify";
export default function HtmlPreview({ html }) {
  const safe = DOMPurify.sanitize(html || "<p>Click Preview to render…</p>");
  return <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: safe }} />;
}
