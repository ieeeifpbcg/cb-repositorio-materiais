module.exports = {
  parseName(name) {
    const newName = name
      .split('-')
      .map(s => {
        if (s.length > 2) {
          return s.charAt(0).toUpperCase() + s.slice(1);
        }
        return s;
      })
      .join(' ');
    return newName;
  },
};
