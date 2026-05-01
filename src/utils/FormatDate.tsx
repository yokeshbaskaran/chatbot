export const FormatTime = (time: number) => {
  const formatted = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(time);

  return formatted;
};
