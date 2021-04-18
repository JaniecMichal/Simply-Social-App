export const createDate = (date, edit) => {
  const dateString = date.toLocaleDateString('en-EN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const timeString = date.toLocaleTimeString();
  return `${!edit ? 'Created' : 'Edited'} at ${timeString} on ${dateString}`;
};
