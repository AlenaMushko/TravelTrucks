export const formatDate = (date: Date | null): string => {
  if (!date) return "";
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const formatDateRange = (
  start: Date | null,
  end: Date | null,
): string => {
  if (!start) return "";
  if (!end) return formatDate(start);
  return `${formatDate(start)} - ${formatDate(end)}`;
};
