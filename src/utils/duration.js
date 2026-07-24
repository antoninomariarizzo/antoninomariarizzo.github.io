const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function parseYearMonth(iso) {
  const [year, month] = iso.split("-").map(Number);
  return { year, month };
}

function currentYearMonth() {
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() + 1 };
}

function monthsBetween(startIso, endIso) {
  const start = parseYearMonth(startIso);
  const end = endIso ? parseYearMonth(endIso) : currentYearMonth();
  return (end.year - start.year) * 12 + (end.month - start.month) + 1;
}

function formatDuration(months) {
  const years = Math.floor(months / 12);
  const remMonths = months % 12;
  const parts = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (remMonths > 0 || years === 0) {
    parts.push(`${remMonths} mo${remMonths !== 1 ? "s" : ""}`);
  }
  return parts.join(" ");
}

/** "May 2026 - Present · 3 mos" */
export function formatPeriod(startIso, endIso) {
  const start = parseYearMonth(startIso);
  const startLabel = `${MONTH_NAMES[start.month - 1]} ${start.year}`;
  const endLabel = endIso
    ? (() => {
        const end = parseYearMonth(endIso);
        return `${MONTH_NAMES[end.month - 1]} ${end.year}`;
      })()
    : "Present";
  return `${startLabel} - ${endLabel} · ${formatDuration(monthsBetween(startIso, endIso))}`;
}

/** Aggregate duration across all roles at a company, from earliest start to latest end (or now). */
export function formatTotalDuration(roles) {
  const earliestStart = roles.map((role) => role.start).reduce((a, b) => (a < b ? a : b));
  const isOngoing = roles.some((role) => !role.end);
  const latestEnd = isOngoing
    ? null
    : roles.map((role) => role.end).reduce((a, b) => (a > b ? a : b));
  return formatDuration(monthsBetween(earliestStart, latestEnd));
}
