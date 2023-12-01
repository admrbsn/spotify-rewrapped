import { defineStore } from 'pinia';

// Dummy arrays for demonstration. Replace these with your actual arrays.
const allArtists = [
  'Artist A',
  'Artist B',
  'Artist C',
  'Artist D',
  'Artist E',
  'Artist F',
  'Artist G',
];
const allSongs = [
  'MMMBop',
  'Thong Song',
  'Call Me Maybe',
  'My Heart Will Go On',
  'Achy Breaky Heart',
  'Ice Ice Baby',
  'Who Let the Dogs Out',
  "Don't Worry Be Happy",
  'Invisible',
  'Mmm Mmm Mmm Mmm',
  'Barbie Girl',
  'She Bangs [Remix]',
  'I Wanna Sex U Up',
  "I'm Too Sexy",
  'Any Nickleback Song',
  'Twinkle, Twinkle, Little Star',
  'Mary Had a Little Lamb',
  'The Wheels on the Bus',
  'Old MacDonald Had a Farm',
  'Baa, Baa, Black Sheep',
  'Humpty Dumpty',
  'Row, Row, Row Your Boat',
  'Itsy Bitsy Spider',
  'Hickory Dickory Dock',
  'London Bridge is Falling Down',
  'Jack and Jill',
  'Three Blind Mice',
  "If You're Happy and You Know It",
  "I'm a Little Teapot",
  'Head, Shoulders, Knees, and Toes',
  'B-i-n-g-o',
  'Ring Around the Rosie',
  'This Old Man',
  'Chick A Boom',
  'Five Little Monkeys',
  'Hot Cross Buns',
  'Pop Goes the Weasel',
  'The Hokey Pokey',
  'Yankee Doodle',
  'Skip to My Lou',
];

// Function to randomly pick elements from an array
function pickRandomElements(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export const useFormStore = defineStore('form', {
  state: () => ({
    artists: pickRandomElements(allArtists, 5).reduce((acc, artist, index) => {
      acc[index + 1] = artist;
      return acc;
    }, {}),
    songs: pickRandomElements(allSongs, 5).reduce((acc, song, index) => {
      acc[index + 1] = song;
      return acc;
    }, {}),
    minutes: '10,000',
    genre: 'Pop',
  }),
  actions: {
    loadFromLocalStorage() {
      const artistsData = localStorage.getItem('artists');
      const songsData = localStorage.getItem('songs');
      if (artistsData) {
        this.artists = JSON.parse(artistsData);
      }
      if (songsData) {
        this.songs = JSON.parse(songsData);
      }
    },
    saveToLocalStorage() {
      localStorage.setItem('artists', JSON.stringify(this.artists));
      localStorage.setItem('songs', JSON.stringify(this.songs));
    },
  },
});
