const mq = (query: string, classes: string) => {
  return (
    " " +
    classes
      .replace(/\s+/g, " ")
      .trim()
      .split(" ")
      .map((c) => {
        return `${query}:${c}`;
      })
      .join(" ")
  );
};

export default mq;
