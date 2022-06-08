let priceOfPizza = 0;
let priceOfSize = 0;
let priceOfTopping = 0;

document.addEventListener("click", function () {
    let selectorTopping = document.querySelectorAll('input[name="topping"]');

    for (let selectedPizza of document.querySelectorAll('input[name="pizza"]')) {
        selectedPizza.onclick = (e) => {
            if (e.target.value === "pizza_1") {
                priceOfPizza = 8;

                let selectable = [
                    "avocado",
                    "broccoli",
                    "onions",
                    "zucchini",
                    "tuna",
                    "ham"
                ];

                let unselectable = [
                    "lobster",
                    "oyster",
                    "salmon",
                    "bacon",
                    "duck",
                    "sausage"
                ];

                selectable.forEach((e) => {
                    document.getElementById(e).disabled = false;
                });

                unselectable.forEach((e) => {
                    document.getElementById(e).disabled = true;
                    document.getElementById(e).checked = false;
                });
            } else if (e.target.value === "pizza_2") {
                priceOfPizza = 10;

                let selectable = [
                    "broccoli",
                    "onions",
                    "zucchini",
                    "lobster",
                    "oyster",
                    "salmon",
                    "bacon",
                    "ham"
                ];

                let unselectable = [
                    "avocado",
                    "tuna",
                    "duck",
                    "sausage"
                ];

                selectable.forEach((e) => {
                    document.getElementById(e).disabled = false;
                });

                unselectable.forEach((e) => {
                    document.getElementById(e).disabled = true;
                    document.getElementById(e).checked = false;
                });
            } else if (e.target.value === "pizza_3") {
                priceOfPizza = 12;

                let selectable = [
                    "broccoli",
                    "onions",
                    "zucchini",
                    "tuna",
                    "bacon",
                    "duck",
                    "ham",
                    "sausage"
                ];

                let unselectable = [
                    "avocado",
                    "lobster",
                    "oyster",
                    "salmon"
                ];

                selectable.forEach((e) => {
                    document.getElementById(e).disabled = false;
                });

                unselectable.forEach((e) => {
                    document.getElementById(e).disabled = true;
                    document.getElementById(e).checked = false;
                });
            }
        };
    }

    for (let selectedSize of document.querySelectorAll('input[name="size"]')) {
        selectedSize.onclick = (e) => {
            if (e.target.value === "small") {
                priceOfSize = -1;
            } else if (e.target.value === "medium") {
                priceOfSize = 0;
            } else if (e.target.value === "large") {
                priceOfSize = 2;
            }
        };
    }

    selectorTopping.forEach(() => {
        addEventListener("click", () => {
            let sumOfToppings = 0;

            for (let i = 0; i < selectorTopping.length; i++) {
                let selected = selectorTopping[i];

                if (selected.checked) {
                    switch (selectorTopping[i].id) {
                        case "lobster":
                        case "oyster":
                        case "salmon":
                        case "tuna":
                            sumOfToppings += 2;
                            break;
                        case "bacon":
                        case "duck":
                        case "ham":
                        case "sausage":
                            sumOfToppings += 3;
                            break;
                        default:
                            sumOfToppings += 1;
                            break;
                    }
                }
            }

            priceOfTopping = sumOfToppings;
        });
    });
});

document.addEventListener("change", function () {
    let total = priceOfPizza + priceOfSize + priceOfTopping;

    if (priceOfPizza > 0) {
        document.getElementById("price").innerHTML = "$" + total;
    }
});