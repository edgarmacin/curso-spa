const getHash = () =>
  location.hash.slice(1)
  .toLocaleLowerCase()
  .split('/')[1] || '/'; // esto es para obtener el elemento que queremos en este caso se le va quitando lo que no nos sirve para solo tener "1" o en su caso solo "/""

export default getHash;