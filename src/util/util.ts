export function where(link: string) {
  const pattern = new RegExp('http|www');
  return pattern.test(link) ? '_blank' : '_self';
}
