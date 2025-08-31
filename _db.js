let games = [
  { id: '1', title: 'Zelda: Tears of the Kingdom', platform: ['Switch'] },
  { id: '2', title: 'Final Fantasy 7 Remake', platform: ['PS5', 'Xbox'] },
  { id: '3', title: 'Elden Ring', platform: ['PS5', 'Xbox', 'PC'] },
  { id: '4', title: 'Mario Kart 8 Deluxe', platform: ['Switch'] },
  { id: '5', title: 'Pokemon Scarlet', platform: ['PS5', 'Xbox', 'PC'] },
];


let authors = [
  { id: '1', name: 'Mario', verified: true },
  { id: '2', name: 'Yoshi', verified: false },
  { id: '3', name: 'Peach', verified: true },
  { id: '4', name: 'Luigi', verified: true },
];


let reviews = [
  { id: '1', rating: 9, content: 'Incredible world design!', author_id: '1', game_id: '1' },
  { id: '2', rating: 10, content: 'Best RPG experience ever.', author_id: '2', game_id: '3' },
  { id: '3', rating: 7, content: 'Fun but a bit repetitive.', author_id: '3', game_id: '2' },
  { id: '4', rating: 8, content: 'Multiplayer is awesome!', author_id: '4', game_id: '4' },
  { id: '5', rating: 6, content: 'Decent but has bugs.', author_id: '1', game_id: '5' },
  { id: '6', rating: 9, content: 'A must-play classic.', author_id: '2', game_id: '1' },
];


export default { games , authors , reviews }