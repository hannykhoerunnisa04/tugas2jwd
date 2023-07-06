const items = []
let totalPrice = 0

function clicked(id, price) {
    const index = items.indexOf(id)
    if (index === -1) {
        items.push(id)
        totalPrice += price
    } else {
        items.splice(index, 1)
        totalPrice -= price
    }

    const total = document.getElementById('total')
    total.innerText = 'Rp. ' + totalPrice
}