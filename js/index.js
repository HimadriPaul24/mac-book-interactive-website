function memory(cost, price) {
    const memoryCost = document.getElementById(cost);
    memoryCost.innerText = price;
    memoryCostValue = memoryCost.innerText;

    totalCost();

}

// 8GB memory cost
document.getElementById('memory-8GB').addEventListener('click', function () {
    memory('memory-cost', 0);


});
// 16GB memory cost
document.getElementById('memory-16GB').addEventListener('click', function () {

    memory('memory-cost', 180);


});
// storage cost

// 256GB 
document.getElementById('SSD-256GB').addEventListener('click', function () {
    memory('storage-cost', 0);
});

// 512GB 
document.getElementById('SSD-512GB').addEventListener('click', function () {
    memory('storage-cost', 100);
});

// 1tb 
document.getElementById('SSD-1TB').addEventListener('click', function () {
    memory('storage-cost', 180);
});

// delivery cost

// 28 august 
document.getElementById('delivery-Aug-28').addEventListener('click', function () {
    memory('delivery-cost', 0);
});
// 20 aug 
document.getElementById('delivery-Aug-20').addEventListener('click', function () {

    memory('delivery-cost', 20);

});


// total cost

function totalCost() {
    const totalPriceId = document.getElementById('total-Price');
    const extraMemoryCostId = document.getElementById('memory-cost');

    const memoryCost = parseInt(extraMemoryCostId.innerText);

    const extraStorageCostId = document.getElementById('storage-cost');
    const storageCost = parseInt(extraStorageCostId.innerText);

    const deliveryCostId = document.getElementById('delivery-cost');
    const deliveryCost = parseInt(deliveryCostId.innerText);
    const sum = memoryCost + storageCost + deliveryCost + 1299;
    totalPriceId.innerText = sum;
    const lastTotalPrice = document.getElementById('discount-Price');
    lastTotalPrice.innerText = sum;

}
// Apply promo code
document.getElementById('apply-code').addEventListener('click', function () {
    const applyField = document.getElementById('promo-apply');
    const applyCode = applyField.value;
    const lastTotalPrice = document.getElementById('discount-Price');
    const totalPriceId = document.getElementById('total-Price')
    const totalPrice = parseInt(totalPriceId.innerText);

    if (applyCode == 'stevekaku') {
        const discount = totalPrice - ((totalPrice * 20) / 100);
        lastTotalPrice.innerText = discount;
    }
    else{
        window.alert('Invalid Promo Code');
    }
    applyField.value = '';
})