document.addEventListener("DOMContentLoaded", function () {
    let selectedChocolates = [];
    let totalPrice = 0;

    function updateCartSummary() {
        const cartList = document.getElementById("cart-list");
        const totalPriceSpan = document.getElementById("total-price");

        cartList.innerHTML = "";

        selectedChocolates.forEach((chocolate) => {
            const cartItem = document.createElement("li");
            cartItem.textContent = `${chocolate.name} - $${chocolate.price.toFixed(2)}`;
            cartList.appendChild(cartItem);
        });

        totalPriceSpan.textContent = `$${totalPrice.toFixed(2)}`;
    }

    const addToCartButtons = document.querySelectorAll(".add-to-cart-button");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const chocolateItem = button.closest(".chocolate-item");
            const chocolateId = chocolateItem.getAttribute("data-id");
            const chocolateName = chocolateItem.querySelector("h3").textContent;
            const chocolatePrice = parseFloat(chocolateItem.querySelector("p").textContent.replace("Price: $", ""));

            const selectedChocolate = {
                id: chocolateId,
                name: chocolateName,
                price: chocolatePrice
            };

            if (selectedChocolates.length < 8) {
                selectedChocolates.push(selectedChocolate);
                totalPrice += selectedChocolate.price;
                updateCartSummary();
            } else {
                alert("You can select a maximum of 8 chocolates.");
            }
        });
    });

    const checkoutButton = document.getElementById("checkout-button");

    checkoutButton.addEventListener("click", () => {
        if (selectedChocolates.length > 0) {
            alert("Checkout completed!");
        } else {
            alert("Your cart is empty. Add chocolates to the cart before checkout.");
        }
    });
});
