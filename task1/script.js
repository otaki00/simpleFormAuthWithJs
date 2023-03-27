

function calculateOrder(){
    event.preventDefault();

    let tripCost = document.getElementById("tripCost").value;
    let puzzelsNumber = document.getElementById("puzzelsNumber").value;
    let dollsNumber = document.getElementById("dollsNumber").value;
    let bearsNumber = document.getElementById("bearsNumber").value;
    let minionsNumber = document.getElementById("minionsNumber").value;
    let trucksNumber = document.getElementById("trucksNumber").value;

    // check if they empty
    if(tripCost == "" || puzzelsNumber == "" || dollsNumber == "" || bearsNumber == "" || minionsNumber == "" || trucksNumber == ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill all the fields!',
        })
        return false;
    }else {
        let totalTpys = parseInt(puzzelsNumber) + parseInt(dollsNumber) + parseInt(bearsNumber) + parseInt(minionsNumber) + parseInt(trucksNumber);
        
        let totalCost = (parseInt(puzzelsNumber) * 2.60) + (parseInt(dollsNumber) * 3) + (parseInt(bearsNumber) * 4.10) + (parseInt(minionsNumber) * 8.20) + (parseInt(trucksNumber) * 2);
        
        let discount = 0;
        if (totalTpys >= 50) {
            discount = totalCost * 0.25;
        }

        let rentCost = totalCost * 0.10;
        let finalCost = totalCost - (discount + rentCost);

        if (finalCost >= tripCost) {
            let moneyLeft = finalCost - tripCost;
            Swal.fire({
                icon: 'success',
                title: `You have enough money! ${finalCost.toFixed(2)}$`,
                text: `You have ${moneyLeft.toFixed(2)}$ left. after the trip.`,
            })
        }else {
            let moneyNeeded = tripCost - finalCost;
            Swal.fire({
                icon: 'error',
                title: 'You don\'t have enough money!',
                text: `You need ${moneyNeeded.toFixed(2)}$ more.`,
            })
        }

    }
}