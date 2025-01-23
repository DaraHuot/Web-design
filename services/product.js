export async function getAllProduct() {
  const data = await fetch("https://dummyjson.com/products").then((response) =>
    response.json()
  );
  return data;
}
