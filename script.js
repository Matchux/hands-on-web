let quantity = 0;
let qty = 0;
let subtotal = 0;
let fee = 50;
let total = 0;
let checkQty = 0;
let checkTotal = 0;

    function addQuantity() {
        
        quantity = quantity + 1;
        qty = qty + 1;
        subtotal = subtotal + 500;
        total = fee + subtotal;

        document.getElementById('quantity').innerHTML = quantity;
        document.getElementById('qty').innerHTML = qty;
        document.getElementById('subtotal').innerHTML = subtotal;
        document.getElementById('total').innerHTML = total;

        if (quantity == 11) {
            alert('Exceed to the stock of the item!');
            quantity = 10;
            qty = 10;
            subtotal = 5000;
            total = 5050;

            document.getElementById('quantity').innerHTML = quantity;
            document.getElementById('qty').innerHTML = qty;
            document.getElementById('subtotal').innerHTML = subtotal;
            document.getElementById('total').innerHTML = total;
        }
    }


    function subQuantity() {
        
        quantity = quantity - 1;
        qty = qty - 1;

        subtotal = subtotal - 500;
        total = total - 500;
        
        document.getElementById('quantity').innerHTML = quantity;
        document.getElementById('qty').innerHTML = qty;
        document.getElementById('subtotal').innerHTML = subtotal;
        document.getElementById('total').innerHTML = total;


        if (quantity <= 0) {
            alert('Negative, please proceed to add quantity!');
            quantity = 1;
            qty = 1;
            subtotal = 500;
            total = 550;

            document.getElementById('quantity').innerHTML = quantity;
            document.getElementById('qty').innerHTML = qty;
            document.getElementById('subtotal').innerHTML = subtotal;
            document.getElementById('total').innerHTML = total;
        }
    }


    function checkout() {
        checkQty = checkQty + qty;
        checkTotal = checkTotal + total;

        document.getElementById('check-qty').innerHTML = checkQty;
        document.getElementById('check-total').innerHTML = checkTotal;
        document.getElementById('product-page').style.display = "None";
        document.getElementById('check-out-page').style.display = "";

    
    }


    



