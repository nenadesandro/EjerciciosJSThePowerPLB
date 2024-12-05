fetch(`https://pokeapi.co/api/v2/pokemon/ditto`).then((res) => res.json()).then((response) => console.log(response));
const main = async () => {
  console.log("pedimos un pokemon a la api")
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
    const response = await res.json();
    console.log(response)
  } catch (err) {
    console.log(err)
  }
  console.log("ya hemos pedido el pokemon a la api");
};