document.getElementById('submit').onclick = function calculateCost() {
    const quantity = parseInt(document.getElementById('calculator__intput').value);
    const price = parseInt(document.getElementById('calculator__select').value);
    const totalCost = quantity * price;

    document.getElementById('result').textContent = `Стоимость заказа: ${totalCost} руб.`;
}