// // ===============================================================================
// // DATA
// // Below data will hold all of the possible friends.
// // ===============================================================================
// var names = ['Patrick', 'Taylor', 'Nate', 'Manny', 'Nick', 'Austin', 'Cody', 'Chip', 'Matt', 'Dave'];
// var pictures = [
//   "https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock.png",
//   "https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock.png",
//   "https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock.png",
//   "https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock.png",
//   "https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock.png",
//   "https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock.png",
//   "https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock.png",
//   "https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock.png",
//   "https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock.png",
//   "https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock.png",
// ];
// var friends = [];

// function Friend(name, photo, score) {
//   this.name = name;
//   this.photo = photo;
//   this.score = score
// };

// function addFriend(name, photo, score) {
//   var newFriend = new Friend(name, photo, score); // here we create instance
//   friends.push(newFriend);
// }

// function createFriend() {
//   for (var i = 0; i < 10; i++) {
//     newName = randomName();
//     newPhoto = randomPhoto();
//     newScore = randomScore();
//     addFriend(newName, newPhoto, newScore);
//   };
// };

// createFriend();
// console.log(friends)

// function randomName() {
//   var ranName = names.splice([Math.floor(Math.random() * names.length)], 1);
//   return ranName;
// };

// function randomPhoto() {
//   var ranPhoto = pictures.splice([Math.floor(Math.random() * pictures.length)], 1);
//   return ranPhoto;
// };

// function randomScore() {
//   var scores = new Array;
//   for (var i = 0; i < 10; i++) {
//     var newScore = Math.floor(Math.random() * 6);
//     scores.push(newScore);
//   };
//   return scores;
// };
var friends = [
  {
    name: "Jesus Quintana",
    photo: "https://1w0eqx36klwk3lol8s1na5ig-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/BigLebowski_094Pyxurz.jpg",
    scores: [
      "5",
      "1",
      "4",
      "4",
      "5",
      "1",
      "2",
      "5",
      "4",
      "1"
    ]
  },
  {
    name: "Knox Harrington",
    photo: "https://pbs.twimg.com/profile_images/3756813003/1420c69e0a8469d128e1d12a0403e02f_400x400.jpeg",
    scores: [
      "4",
      "2",
      "5",
      "1",
      "3",
      "2",
      "2",
      "1",
      "3",
      "2"
    ]
  },
  {
    name: "Tony Dang",
    photo: "https://media.licdn.com/dms/image/C4E03AQFHwI9fw5wRCw/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=5vIyDBk27DS_ya0lyNNWG9rplOv7cW5Pom75kDWgPws",
    scores: [
      "5",
      "2",
      "2",
      "2",
      "4",
      "1",
      "3",
      "2",
      "5",
      "5"
    ]
  },
  {
    name: "Jeffrey Lebowski",
    photo: "https://media.breitbart.com/media/2016/08/Huddleston2-640x480.jpg",
    scores: [
      "3",
      "3",
      "4",
      "2",
      "2",
      "1",
      "3",
      "2",
      "2",
      "3"
    ]
  },
  {
    name: "The Dude",
    photo: "https://gq-images.condecdn.net/image/N25V1omb0Qa/crop/405/landscape/f/The-Big-Lebowski-hp-GQ-25Feb16_rex_b.jpg",
    scores: [
      "4",
      "3",
      "4",
      "1",
      "5",
      "2",
      "5",
      "3",
      "1",
      "4"
    ]
  },
  {
    name: "Walter Sobchak",
    photo: "https://amp.businessinsider.com/images/540a72ceecad0416123bbe73-750-563.jpg",
    scores: [
      "4",
      "4",
      "2",
      "3",
      "2",
      "2",
      "3",
      "2",
      "4",
      "5"
    ]
  },
  {
    name: "Donny Kerabatsos",
    photo: "https://vignette.wikia.nocookie.net/p__/images/0/03/DonnyKerabatsos.jpg/revision/latest?cb=20160119030354&path-prefix=protagonist",
    scores: [
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1"
    ]
  },
  {
    name: "Jackie Treehorn",
    photo: "https://pbs.twimg.com/profile_images/957436653529894913/Ztd69a8z_400x400.jpg",
    scores: [
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5"
    ]
  },
  {
    name: "Bunny Lebowski",
    photo: "https://movie-fanatic-res.cloudinary.com/iu/s--EjIyMDYe--/t_full/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1364991028/bunny-lebowski.jpg",
    scores: [
      "1",
      "5",
      "1",
      "5",
      "1",
      "5",
      "1",
      "5",
      "1",
      "5"
    ]
  },
  {
    name: "Uli Kunkel",
    photo: "https://i.imgur.com/X6fqrHqh.jpg",
    scores: [
      "3",
      "3",
      "3",
      "3",
      "3",
      "3",
      "3",
      "3",
      "3",
      "3"
    ]
  }


];
// Here we export the array. This makes it accessible to other files using require.
module.exports = friends;
