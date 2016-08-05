export function getRandom(videos) {
  console.log('getRandom')
  const length = videos.length;
  const randomIndex = Math.floor(Math.random() * (length - 1));
  return videos[randomIndex];
}
