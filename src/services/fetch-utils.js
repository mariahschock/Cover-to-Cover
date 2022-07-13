export async function getBooks(title) {
  const rawData = await fetch(`/.netlify/functions/books?bookQuery=${title}`);
  const data = await rawData.json();

  return data;
}