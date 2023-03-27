// cont menu 
const menu = {
    "ramallah": [{"coffee":2},{"water":2},{"choco":3}, {"sweets":4},{"vanilla":5}],
    "jerusalem": [{"coffee":5},{"water":4},{"choco":6}, {"sweets":8},{"vanilla":10}],
    "jericho": [{"coffee":3},{"water":3},{"choco":4}, {"sweets":5},{"vanilla":7}]
}

const cities = ["ramallah", "jerusalem", "jericho"];
const products = ["coffee", "water", "choco", "sweets", "vanilla"];

// create options for the select tag city
for(let i=0; i<cities.length; i++){
    let option = document.createElement("option");
    option.value = cities[i];
    option.innerHTML = cities[i];
    option.classList.add("text-capitalize");
    document.getElementById("city").appendChild(option);
}

// create options for the select tag product
for(let i=0; i<products.length; i++){
    let option = document.createElement("option");
    option.value = products[i];
    option.innerHTML = products[i];
    document.getElementById("product").appendChild(option);
}


function placeOrder(){
    event.preventDefault();
    let city = document.getElementById("city").value;
    let product = document.getElementById("product").value;
    let quantity = document.getElementById("quantity").value;

    // check if the value is empty
    if(city == "" || product == "" || quantity == ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill all the fields!',
        })
        return false;
    }else{
        // check if the city is in the menu
        if(menu[city] == undefined){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sorry, we do not have this city!',
            })
            return false;
        }else{
            // check if the product is in the menu array
            let productPrice = 0;
            for(let i = 0; i < menu[city].length; i++){
                if(menu[city][i][product] != undefined){
                    productPrice = menu[city][i][product];
                    break;
                }
            }
                let totalPrice = productPrice * quantity;
                Swal.fire({
                    icon: 'success',
                    title: 'Thank you!',
                    text: `Your order has been placed!, the total price is ${totalPrice} NIS `,
                })
                return true;
        }
    }
}