// Define a painting class with properties: title, artist, value
class Painting {
  constructor(title, artist, value) {
    this.title = title;
    this.artist = artist;
    this.value = value;
  }
}

// Define a collection of paintings
let paintings = [
  new Painting("Mona Lisa", "Leonardo da Vinci", 780000000),
  new Painting("Starry Night", "Vincent van Gogh", 100000000),
  new Painting("The Persistence of Memory", "Salvador Dali", 48000000),
  new Painting("The Scream", "Edvard Munch", 120000000),
  new Painting("The Last Supper", "Leonardo da Vinci", 200000000),
];

// Display all paintings in the collection
function displayPaintings() {
  console.log("Paintings in the collection:");
  paintings.forEach((painting) => {
    console.log(painting.title + " by " + painting.artist + ", valued at $" + painting.value);
  });
}

// Search for paintings by artist
function searchByArtist(artistName) {
  console.log("Paintings by " + artistName + ":");
  paintings.forEach((painting) => {
    if (painting.artist.toLowerCase() === artistName.toLowerCase()) {
      console.log(painting.title + ", valued at $" + painting.value);
    }
  });
}

// Calculate the total value of the collection
function calculateTotalValue() {
  let totalValue = 0;
  paintings.forEach((painting) => {
    totalValue += painting.value;
  });
  console.log("The total value of the collection is $" + totalValue);
}

// Get user input to perform actions
let userInput = prompt(
  "Enter 1 to view paintings, 2 to search by artist, 3 to calculate total value, or 0 to exit"
);

while (userInput !== "0") {
  switch (userInput) {
    case "1":
      displayPaintings();
      break;
    case "2":
      let artistName = prompt("Enter the name of the artist");
      searchByArtist(artistName);
      break;
    case "3":
      calculateTotalValue();
      break;
    default:
      console.log("Invalid input");
      break;
  }
  userInput = prompt(
    "Enter 1 to view paintings, 2 to search by artist, 3 to calculate total value, or 0 to exit"
  );
}
