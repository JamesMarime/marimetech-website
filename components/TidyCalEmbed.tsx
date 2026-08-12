export default function TidyCalEmbed() {
  return (
    <div className="tidycalShell" aria-live="polite">
      <div className="tidycalLoading" aria-hidden="true">
        <div className="tidycalLoadingMark" />
        <p>Loading available times…</p>
      </div>
      <div className="tidycal-embed" data-path="1d4rvwj" data-showavatar="true" />
      {/* TidyCal's native async embed is intentionally placed immediately after
          the target element so the browser can begin fetching it as early as possible. */}
      <script src="https://tidycal.com/js/embed.js" async />
    </div>
  );
}
