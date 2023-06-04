export default defineEventHandler(async (event) => {
  const { code } = event.context.params;
  const apiKey = "tWFq5bXtaVSxxmuZN6NaoXFXsYmGaDvQO9aMIlOe";
  const uri = `https://api.freecurrencyapi.com/v1/currencies?apikey=${apiKey}&currencies=${code}`;
  const data = await $fetch(uri);

  return data;
});
