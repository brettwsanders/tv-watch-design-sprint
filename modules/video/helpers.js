export function getRandom(videos) {
  console.log('getRandom')
  const length = videos.length;
  const randomIndex = Math.floor(Math.random() * (length - 1));
  return videos[randomIndex];
}

export function buildArtistString(artists) {
  if (Array.isArray(artists)) {
    let featureString = artists.slice(1).map(x => x.name).join(', ')
    if (featureString.length > 0) {
      featureString = ` ft. ${featureString}`
    }
    return `${artists[0].name}${featureString}`
  }
  return 'Unknown Artist'
}
