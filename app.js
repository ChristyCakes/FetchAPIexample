const container = document.querySelector("#container");

async function init() {
  const cars = await fetch( "https://gist.githubusercontent.com/scottburton11/66a921c458f9500a773a6b0ac65006df/raw/629bfd6a3125e3428bd85a53231bd8018c407a65/Javascript%2520Working%2520With%2520Data%2520Challenge%2520data"
  ).then(response => response.json())
  
  const coolCars = cars
    .filter(car => car["Cool Factor"] >= 7)                   // filter cars with cool factor 7 & up
    .sort((a, b) => b["Total Score"] - a["Total Score"])      // sort by total score
    .splice(0, 10);                                           // select top 10
  
  return display(coolCars)                                    // send data to display function
}

const display = function(ten) {
  ten.forEach(car => {
    const fullName = `${car.Year} ${car.Make} ${car.Model}`;    // use select data for name heading & score
    const score = car["Total Score"];                            

    const htmlContent = `
        <div class="cell">
          <div class="textbox">
              <div>
                <p1 class="fullname">${fullName}</p1>
                <h1 class='score'>${score}</h1>
              </div>
          </div>
        </div>`;

    container.insertAdjacentHTML("beforeend", htmlContent);
  });
};

init()