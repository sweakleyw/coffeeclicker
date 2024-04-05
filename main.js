let score = 0;
let rateCount = 0;

const scoreDisplay = document.getElementById("score");
const rateDisplay = document.getElementById("rate-count");

const body = document.querySelector("body");

const producersList = document.getElementById("producers");

const coffeeMug = document.getElementById("mug");

const coffeeProducers = [
  {
    id: 0,
    name: "McCafé",
    isVisible: false,
    quantity: 0,
    rate: 1,
    cost: 10,
  },
  {
    id: 1,
    name: "Folgers",
    isVisible: false,
    quantity: 0,
    rate: 2,
    cost: 50,
  },
  {
    id: 2,
    name: "Starbucks",
    isVisible: false,
    quantity: 0,
    rate: 5,
    cost: 100,
  },
  {
    id: 3,
    name: "Nespresso",
    isVisible: false,
    quantity: 0,
    rate: 10,
    cost: 500,
  },
  {
    id: 4,
    name: "Dunkin",
    isVisible: false,
    quantity: 0,
    rate: 100,
    cost: 1000,
  },
  {
    id: 5,
    name: "Maxwell House",
    isVisible: false,
    quantity: 0,
    rate: 500,
    cost: 5000,
  },
];

function coffeeClick(producer) {
  // console.log(producer);
  let h3 = document.createElement("h3");
  h3.textContent = producer.name;
  const button = document.createElement("button");
  button.textContent = "Buy";
  button.id = producer.name;
  button.addEventListener("click", function (clickEvent) {
    if (score < producer.cost) {
      alert("Need more coffee");
      return;
    }
    score -= producer.cost;
    rateCount += producer.rate;
    producer.quantity++;
    producer.cost = Math.floor(producer.cost * 1.25);
    rateDisplay.innerText = rateCount;
    scoreDisplay.innerText = score;
    pQua.innerText = `Quantity: ${producer.quantity}`;
    pCost.innerText = `Cost: ${producer.cost} coffee`;
  });

  let pQua = document.createElement("p");
  pQua.textContent = `Quantity: ${producer.quantity}`;
  pQua.id = producer.id;
  let pRate = document.createElement("p");
  pRate.textContent = `Coffee/second: ${producer.rate}`;
  let pCost = document.createElement("p");
  pCost.textContent = `Cost: ${producer.cost}`;

  const produceInfo = document.createElement("div");

  produceInfo.className = "producer";
  produceInfo.appendChild(h3);
  produceInfo.appendChild(pQua);
  produceInfo.appendChild(pRate);
  produceInfo.appendChild(button);
  produceInfo.appendChild(pCost);

  producersList.appendChild(produceInfo);
}

function renderCoffee() {
  for (let producer of coffeeProducers) {
    // console.log(producer);
    if (!producer.isVisible && score >= Math.floor(producer.cost / 2)) {
      coffeeClick(producer);
      producer.isVisible = true;
    }
  }
}

function coffeeUp() {
  if (rateCount > 0) {
    score += rateCount;
    scoreDisplay.innerHTML = score;
    renderCoffee();
  }
}

setInterval(coffeeUp, 1000);

coffeeMug.addEventListener("click", function (clickEvent) {
  if (clickEvent.target.matches("#mug")) {
    score++;
    scoreDisplay.innerHTML = score;
    renderCoffee();
  }
});
