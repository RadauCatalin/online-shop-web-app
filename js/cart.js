window.Cart = {

    API_BASE_URL: "http://localhost:8085",

    getCart: function () {
        // todo: take this id dynamically
        let customerId = 9;

        $.ajax({
            url: Cart.API_BASE_URL + "/carts/" + customerId
            // default ajax method: "GET"
        }).done(function (response) {
            console.log(response);

            Cart.displayProducts(response.products);
        });
    },

    getProductHtml: function (product) {
        return `<tr class="cart_item">
                                            <td class="product-remove">
                                                <a title="Remove this item" class="remove" href="#">×</a> 
                                            </td>
                                            <td class="product-thumbnail">
                                                <a href="single-product.html"><img width="145" height="145" alt="poster_1_up" class="shop_thumbnail" src="img/product-thumb-2.jpg"></a>
                                            </td>
                                            <td class="product-name">
                                                <a href="single-product.html">${product.name}</a> 
                                            </td>
                                            <td class="product-price">
                                                <span class="amount">£${product.price}</span> 
                                            </td>
                                            <td class="product-quantity">
                                                <div class="quantity buttons_added">
                                                    <input type="button" class="minus" value="-">
                                                    <input type="number" size="4" class="input-text qty text" title="Qty" value="1" min="0" step="1">
                                                    <input type="button" class="plus" value="+">
                                                </div>
                                            </td>
                                            <td class="product-subtotal">
                                                <span class="amount">£${product.price}</span> 
                                            </td>
                                        </tr>`
    },

    displayProducts: function (products) {
        var productsHtml = "";

        products.forEach(oneProduct => productsHtml += Cart.getProductHtml(oneProduct));

        $(".shop_table.cart tbody").html(productsHtml);
    }
};

Cart.getCart();

//     getCarts: function () {
//         $.ajax({
//             url: Cart.API_BASE_URL + "/Carts"
//             // default ajax method: "GET"
//         }).done(function (response) {
//             console.log(response);
//
//             Cart.displayCart(response.content);
//         });
//     },
//
//     getProductHtml: function (product) {
//         return `<tr class="cart_item">
//     <td class="product-remove">
//         <a title="Remove this item" class="remove" href="#">×</a> 
//     </td>
//
//     <td class="product-thumbnail">
//         <a href="single-product.html"><img width="145" height="145" alt="poster_1_up" class="shop_thumbnail" src="img/product-thumb-2.jpg"></a>
//     </td>
//
//     <td class="product-name">
//         <a href="single-product.html">${product.name}</a> 
//     </td>
//
//     <td class="product-price">
//         <span class="amount">$${product.price}</span> 
//     </td>
//
//     <td class="product-quantity">
//         <div class="quantity buttons_added">
//         <input type="button" class="minus" value="-">
//         <input type="number" size="4" class="input-text qty text" title="Qty" value="1" min="0" step="1">
//         <input type="button" class="plus" value="+">
//         </div>
//     </td>
//
//     <td class="product-subtotal">
//     <span class="amount">$0.00</span> 
//     </td>
//     </tr>`
//     },
//     displayCart: function () {
//         var cartHtml = "";
//         carts.forEach(oneProductInCart => cartHtml += Cart.getProductHtml(oneProductInCart));
//
//         $(".single-product-area .cart_item").html(cartHtml);
//     },
// };
// Cart.getCarts();