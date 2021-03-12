const convertTime = (durationMinutes) => {
  let hours = Math.floor(durationMinutes / 60);
  let minutes = Math.floor(durationMinutes % 60);
  return `${hours}ч ${minutes}м`;
}

export default convertTime;
