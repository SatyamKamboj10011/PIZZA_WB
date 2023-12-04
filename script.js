// Function to validate login credentials
function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "user" && password === "p@ssword123") {
             // Redirect to pizza page
             window.location.href = "index.html";
             return false;
    } 
    else {
         // Redirect back to login page
        alert("Invalid credentials. Please try again.");
        window.location.href = "login.html";
        return false;
        
    }  
}

// Function to handle adding items to the cart
var cart = [];

function addToCart(itemName, itemPrice) {
    var size = document.getElementById("pizza-size").value;
    var quantity = document.getElementById("quantity").value;

    var item = {
        name: itemName,
        size: size,
        price: itemPrice,
        quantity: quantity
    };

    cart.push(item);

    
    alert("Item added to cart: " + itemName + " - Size: " + size + " - Quantity: " + quantity);

    
    return false;
}
