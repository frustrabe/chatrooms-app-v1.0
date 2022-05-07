const chatrooms = [
  {
    id: 1,
    name: "Music 🎷",
    description: "Enjoy the vibes, welcome to the room about music!",
    messages: [
      {
        id: "a",
        text: "Hey what did you think about the new Red Hot Chili Peppers album?",
        user_id: 1,
      },
      {
        id: "b",
        text: "I actually quite enjoyed it!",
        user_id: 2,
      },
      {
        id: "c",
        text: "I agree! Flea is a beast!!",
        user_id: 3,
      },
      {
        id: "d",
        text: "RHCP !!!",
        user_id: 1,
      },
      {
        id: "d",
        text: "RHCP !!!",
        user_id: 1,
      },
      {
        id: "d",
        text: "RHCP !!!",
        user_id: 1,
      },
      {
        id: "d",
        text: "RHCP !!!",
        user_id: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Books 📚",
    description: "Hi, and welcome to the hub of book lovers!",
  },
  {
    id: 3,
    name: "Coding 💻",
    description: "<Hello World, room compiled successfully!/>",
  },
  {
    id: 4,
    name: "Running 👟",
    description: "Hey! Put on the shoes and go for it!",
  },
  {
    id: 5,
    name: "Gaming 🕹️",
    description: "For all the gaming connoisseurs, press to play.",
  },
  {
    id: 6,
    name: "Crypto 🐕",
    description: "To the moon!",
  },
  {
    id: 7,
    name: "Weather 🌧️",
    description: "Its definitely sunny somewhere on the planet!",
  },
];

export function getChatrooms() {
  return chatrooms;
}
