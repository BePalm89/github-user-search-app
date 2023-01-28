function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    day: "numeric",
    month: "short",
  });
}

export default formatDate;
