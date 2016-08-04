export function getRandom(videos) {
  const length = videos.length;
  const randomIndex = Math.floor(Math.random() * (length - 1));
  console.log('getRandom::length', length, 'randomIndex', randomIndex);
  return videos[randomIndex];
}
