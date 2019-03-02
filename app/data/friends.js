// ===============================================================================
// DATA
// Below data will hold all of the possible friends.
// ===============================================================================
var names = ['Patrick', 'Taylor', 'Nate', 'Manny', 'Nick', 'Austin', 'Cody', 'Chip', 'Matt', 'Dave'];
var pictures = [
  "https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock.png",
  "https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock.png",
  "https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock.png",
  "https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock.png",
  "https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock.png",
  "https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock.png",
  "https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock.png",
  "https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock.png",
  "https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock.png",
  "https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock.png",
];
var friends = [];

function Friend(name, photo, score) {
  this.name = name;
  this.photo = photo;
  this.score = score
};

function addFriend(name, photo, score) {
  var newFriend = new Friend(name, photo, score); // here we create instance
  friends.push(newFriend);
}

function createFriend() {
  for (var i = 0; i < 10; i++) {
    newName = randomName();
    newPhoto = randomPhoto();
    newScore = randomScore();
    addFriend(newName, newPhoto, newScore);
  };
};

createFriend();
console.log(friends)

function randomName() {
  var ranName = names.splice([Math.floor(Math.random() * names.length)], 1);
  return ranName;
};

function randomPhoto() {
  var ranPhoto = pictures.splice([Math.floor(Math.random() * pictures.length)], 1);
  return ranPhoto;
};

function randomScore() {
  var scores = new Array;
  for (var i = 0; i < 10; i++) {
    var newScore = Math.floor(Math.random() * 6);
    scores.push(newScore);
  };
  return scores;
};
// var friends = [
//   {
//     name: "Jesus Quintana",
//     photo: "http://images.fanpop.com/images/image_uploads/Ross-Geller-ross-geller-322097_624_780.jpg",
//     scores: [
//       "5",
//       "1",
//       "4",
//       "4",
//       "5",
//       "1",
//       "2",
//       "5",
//       "4",
//       "1"
//     ]
//   },
//   {
//     name: "Knox Harrington",
//     photo: "https://vignette.wikia.nocookie.net/p__/images/e/ee/Ms._Gale_Weathers.png/revision/latest?cb=20141118184240&path-prefix=protagonist",
//     scores: [
//       "4",
//       "2",
//       "5",
//       "1",
//       "3",
//       "2",
//       "2",
//       "1",
//       "3",
//       "2"
//     ]
//   },
//   {
//     name: "Tony Dang",
//     photo: "http://images.hellogiggles.com/uploads/2015/08/10/Rachel-Green-friends-37542584-864-576.jpg",
//     scores: [
//       "5",
//       "2",
//       "2",
//       "2",
//       "4",
//       "1",
//       "3",
//       "2",
//       "5",
//       "5"
//     ]
//   },
//   {
//     name: "Master Chief",
//     photo: "https://timedotcom.files.wordpress.com/2018/10/david-schwimmer-ross-friends.jpg",
//     scores: [
//       "3",
//       "3",
//       "4",
//       "2",
//       "2",
//       "1",
//       "3",
//       "2",
//       "2",
//       "3"
//     ]
//   },
//   {
//     name: "The Dude",
//     photo: "https://i.pinimg.com/originals/7c/a8/08/7ca8081d3512d0ce7e50b0a3797ea2b6.jpg",
//     scores: [
//       "4",
//       "3",
//       "4",
//       "1",
//       "5",
//       "2",
//       "5",
//       "3",
//       "1",
//       "4"
//     ]
//   },
//   {
//     name: "Walter Sobchak",
//     photo: "https://sites.google.com/site/friends2365/_/rsrc/1472782816553/home/phoebe-buffay-1/Phoebe-Buffay-psd52229.png",
//     scores: [
//       "4",
//       "4",
//       "2",
//       "3",
//       "2",
//       "2",
//       "3",
//       "2",
//       "4",
//       "5"
//     ]
//   },
//   {
//     name: "Donny Kerabatsos",
//     photo: "http://digitalspyuk.cdnds.net/16/39/480x240/landscape-ustv-friends-gunther.jpg",
//     scores: [
//       "1",
//       "1",
//       "1",
//       "1",
//       "1",
//       "1",
//       "1",
//       "1",
//       "1",
//       "1"
//     ]
//   },
//   {
//     name: "Cortana",
//     photo: "https://vignette.wikia.nocookie.net/jaygt/images/c/c9/Mrheckles.png/revision/latest?cb=20180206140047",
//     scores: [
//       "5",
//       "5",
//       "5",
//       "5",
//       "5",
//       "5",
//       "5",
//       "5",
//       "5",
//       "5"
//     ]
//   },
//   {
//     name: "Bunny Lebowski",
//     photo: "https://gl-images.condecdn.net/image/oQYy7b8zjXN/crop/405/f/ross-geller_glamour_10aug17_cbs-sky_p.jpg",
//     scores: [
//       "1",
//       "5",
//       "1",
//       "5",
//       "1",
//       "5",
//       "1",
//       "5",
//       "1",
//       "5"
//     ]
//   },
//   {
//     name: "Karl Hungus",
//     photo: "http://i.imgur.com/R5xIL.png",
//     scores: [
//       "3",
//       "3",
//       "3",
//       "3",
//       "3",
//       "3",
//       "3",
//       "3",
//       "3",
//       "3"
//     ]
//   }


// ];
// console.log(friends);
// Here we export the array. This makes it accessible to other files using require.
module.exports = friends;
