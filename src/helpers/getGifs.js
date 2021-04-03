
export const getGifs = async ( category ) => {
  //encodeURI me remplaza los espacios por simbolos en la url
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category)}&limit=10&api_key=7vZIMd9ZpW5EuSq99abRSr6lSsUVEMMs`;

  const res = await fetch(url);
  //desesctructura xq en el jsonn viene en datas los git para no poner data.data
  const { data } = await res.json();
  //console.log("data",data) ;
  //con un map recorro la data y creo un nuevo obj con solo los datos que me <interesan></interesan>
  const gits = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gits ;
};   