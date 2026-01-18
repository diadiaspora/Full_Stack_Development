const music = {};
console.log(typeof music); // 'object'


music.currentTrack = ['Just Ken']
console.log(music);

music.volume = ['70']
console.log(music);

music.currentPlaylist = ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'];
console.log(music);

console.log(music.currentPlaylist)  // ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'] 

music.volume = 60;

console.log(music);
console.log(music.volume);

music.currentPlaylist = ['Goodbye Horses'];

console.log(music);

music.morningPlaylist = ["lullabye"];

console.log(music);

delete music.morningPlaylist

console.log(music);

const netflix = {
  myMovies: ['Titanic', "Godzilla", "Cinderella"],
  myDocumentaries: ['True Crime LA', 'Blackfish', 'Making of the moviee', 'The story of the Actress'],
  users: ['Dia', 'Cobra'],
  rating: "R",
  // add the following:
  kids() {
    netflix.rating = ["G"];
  },
};

console.log(netflix);

console.log(netflix.kids());