export function parseName(name) {
  return name
    .split('-')
    .map(part => {
      if (part.length <= 2) return part;

      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(' ');
}
