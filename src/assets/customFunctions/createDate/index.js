export const createDate = (date) => {
  const dateString = date.toLocaleDateString('en-EN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const timeString = date.toLocaleTimeString();
  return `Created at ${timeString} on ${dateString}`;
};
