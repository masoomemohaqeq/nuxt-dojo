export default defineEventHandler(async (event) => {
  //   const { name } = getQuery(event);

  //   const { age } = await readBody(event);
  //   return {
  //     message: `Hello, ${name} your ${age} years old`,
  //   };

  const data = await $fetch(
    `https://api.freecurrencyapi.com/v1/latest?apikey=tWFq5bXtaVSxxmuZN6NaoXFXsYmGaDvQO9aMIlOe&currencies=EUR%2CUSD%2CCAD`
  );

  return { data };
});
