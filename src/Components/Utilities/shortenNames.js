const shortenNames = (name) => {
  if (name.length > 50) {
    return name.slice(0, 50) + "...";
  } else {
    return name;
  }
};

export default shortenNames;
