export const profiles = [
  { id: '1', name: 'Alice', avatar: 'https://placehold.co/160x160.png' },
  { id: '2', name: 'Bob', avatar: 'https://placehold.co/160x160.png' },
  { id: '3', name: 'Charlie', avatar: 'https://placehold.co/160x160.png' },
  { id: '4', name: 'Kids', avatar: 'https://placehold.co/160x160.png' },
];

export type Content = {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  largeImageUrl: string;
  videoUrl: string;
  genre: string;
  year: number;
  rating: string;
  duration: string;
  cast: string[];
  type: 'movie' | 'tv-show';
};

export const contentData: Content[] = [
  {
    id: '1',
    title: 'Cosmic Odyssey',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    thumbnailUrl: 'https://placehold.co/300x450.png',
    largeImageUrl: 'https://placehold.co/1280x720.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    genre: 'Sci-Fi',
    year: 2023,
    rating: 'PG-13',
    duration: '2h 49m',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    type: 'movie',
  },
  {
    id: '2',
    title: 'The Last Stand',
    description: 'A former LAPD officer is tasked with stopping a dangerous drug lord from escaping to Mexico.',
    thumbnailUrl: 'https://placehold.co/300x450.png',
    largeImageUrl: 'https://placehold.co/1280x720.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    genre: 'Action',
    year: 2013,
    rating: 'R',
    duration: '1h 47m',
    cast: ['Arnold Schwarzenegger', 'Forest Whitaker', 'Johnny Knoxville'],
    type: 'movie',
  },
  {
    id: '3',
    title: 'Echoes of the Past',
    description: 'A historian discovers a secret that changes her understanding of the past, putting her life in danger.',
    thumbnailUrl: 'https://placehold.co/300x450.png',
    largeImageUrl: 'https://placehold.co/1280x720.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    genre: 'Drama',
    year: 2021,
    rating: 'PG-13',
    duration: '2h 5m',
    cast: ['Emily Blunt', 'John Krasinski', 'Cillian Murphy'],
    type: 'tv-show',
  },
  {
    id: '4',
    title: 'Galactic Heist',
    description: 'A group of misfits plans to steal a powerful artifact from an evil intergalactic emperor.',
    thumbnailUrl: 'https://placehold.co/300x450.png',
    largeImageUrl: 'https://placehold.co/1280x720.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    genre: 'Sci-Fi',
    year: 2019,
    rating: 'PG-13',
    duration: '2h 1m',
    cast: ['Chris Pratt', 'Zoe Saldana', 'Dave Bautista'],
    type: 'movie',
  },
  {
    id: '5',
    title: 'The Comedian\'s Act',
    description: 'A struggling stand-up comedian finds his life spiraling out of control as he chases fame.',
    thumbnailUrl: 'https://placehold.co/300x450.png',
    largeImageUrl: 'https://placehold.co/1280x720.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    genre: 'Comedy',
    year: 2020,
    rating: 'R',
    duration: '2h 2m',
    cast: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz'],
    type: 'movie',
  },
  {
    id: '6',
    title: 'Midnight Shadow',
    description: 'A detective hunts a mysterious killer who strikes only in the dead of night.',
    thumbnailUrl: 'https://placehold.co/300x450.png',
    largeImageUrl: 'https://placehold.co/1280x720.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    genre: 'Thriller',
    year: 2022,
    rating: 'R',
    duration: '2h 15m',
    cast: ['Ben Affleck', 'Rosamund Pike', 'Neil Patrick Harris'],
    type: 'tv-show',
  },
  {
    id: '7',
    title: 'Mountain\'s Peak',
    description: 'A thrilling story of survival as a group of climbers face a deadly storm on K2.',
    thumbnailUrl: 'https://placehold.co/300x450.png',
    largeImageUrl: 'https://placehold.co/1280x720.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    genre: 'Action',
    year: 2018,
    rating: 'PG-13',
    duration: '1h 58m',
    cast: ['Jason Clarke', 'Jake Gyllenhaal', 'Josh Brolin'],
    type: 'movie',
  },
  {
    id: '8',
    title: 'The Silent House',
    description: 'A family is terrorized by a malevolent presence in their new home.',
    thumbnailUrl: 'https://placehold.co/300x450.png',
    largeImageUrl: 'https://placehold.co/1280x720.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    genre: 'Horror',
    year: 2016,
    rating: 'R',
    duration: '1h 35m',
    cast: ['Vera Farmiga', 'Patrick Wilson', 'Lili Taylor'],
    type: 'tv-show',
  },
  {
    id: '9',
    title: 'Laugh Riot',
    description: 'Two clumsy best friends accidentally get involved with a crime syndicate, leading to hilarious consequences.',
    thumbnailUrl: 'https://placehold.co/300x450.png',
    largeImageUrl: 'https://placehold.co/1280x720.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    genre: 'Comedy',
    year: 2023,
    rating: 'PG-13',
    duration: '1h 42m',
    cast: ['Will Ferrell', 'John C. Reilly', 'Sacha Baron Cohen'],
    type: 'tv-show',
  }
];

export const genres = ['Trending Now', 'Sci-Fi', 'Action', 'Drama', 'Comedy', 'Thriller', 'Horror'];