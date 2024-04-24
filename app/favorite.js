function getFavoriteBooks(books) {
    const sortedBooks = [...books].sort((a, b) => b.favorites - a.favorites);
    const topFavorites = sortedBooks.slice(0, 5); // Misal, mengambil 5 buku teratas
    return topFavorites.map(book => ({
      id: book.id,
      name: book.name,
      publisher: book.publisher,
      favorites: book.favorites
    }));
  }
  
  module.exports = { getFavoriteBooks };