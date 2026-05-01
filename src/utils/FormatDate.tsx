export const FormatTime = (time: number) => {
  const formatted = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(time);

  return formatted;
};
