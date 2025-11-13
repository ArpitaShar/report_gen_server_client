export default function LogsPane({ logsUrl }) {
  return (
    <div className="text-sm text-gray-600">
      {logsUrl ? `Streaming from: ${logsUrl}` : "No job started yet."}
    </div>
  );
}
