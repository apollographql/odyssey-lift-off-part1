/**
 * Format seconds to human readable text in a compact form:
 * s, m or H:m (not m:s or H:m:s)
 */
export const humanReadableTimeFromSeconds = (seconds: number): string => {
  if (seconds < 60) {
    return `${seconds}s`;
  }
  const totalMinutes = Math.floor(seconds / 60);
  let hours = Math.floor(totalMinutes / 60) || 0;
  const minutestoDisplay = totalMinutes % 60;
  let timeStr = ``;
  if (hours > 0) {
    timeStr += `${hours}h `;
  }
  timeStr += `${minutestoDisplay}m`;

  return timeStr;
};
