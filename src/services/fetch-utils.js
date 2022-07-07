export async function getBooks(filter) {
  const rawData = await fetch(`http://localhost:8888/.netlify/functions/books?bookQuery=${filter}`);
  const data = await rawData.json();

  return data;
}