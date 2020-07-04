const shortenNames = (name) => {
  if (name.length > 32) {
    return name.slice(0, 32) + "...";
  } else {
    return name;
  }
};

export default shortenNames;
