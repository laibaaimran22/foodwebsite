export default function handler(req, res) {
  const products = [
    {
      id: 1,
      name: "Cheese Pizza",
      price: 800,
      image:
        "https://t3.ftcdn.net/jpg/05/60/42/26/360_F_560422609_3nv30UESgwV4988d3rnk9yMJaGXw5x4T.jpg",
    },
    {
        id: 2,
        name: "BBQ Pizza",
        price: 900,
        image:
          "https://breadboozebacon.com/wp-content/uploads/2023/05/BBQ-Chicken-Pizza-SQUARE.jpg",
    },
    {
        id: 3,
        name: "Veg Pizza",
        price: 600,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOkN2Vc0CMbhBQbEpTcaZiaA2q_022efEmjg&s",
    },
    {
        id: 4,
        name: "Double Cheese Pizza",
        price: 900,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCklOjUiOBGGMnILMmftmKQdrEBjQMOHfeyg&s",
    },

  ];
  res.status(200).json(products);
}
