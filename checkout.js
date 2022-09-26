const taxRate = 0.18;
const shippingPrice = 15;
const shippingFreePrice = 300;

window.addEventListener("load", () => {
    //? set items to local storage
    localStorage.setItem("taxRate", taxRate)
    localStorage.setItem("shippingPrice", shippingPrice)
    localStorage.setItem("shippingFreePrice", shippingFreePrice)

    //? set items to session storage
    sessionStorage.setItem("taxRate", taxRate)
    sessionStorage.setItem("shippingPrice", shippingPrice)
    sessionStorage.setItem("shippingFreePrice", shippingFreePrice)
})

const productsDiv = document.querySelector(".products")
//! Capturing vs Bubbling 
productsDiv.addEventListener("click", (event) =>{
    if(event.target.className == "fa-solid fa-minus"){
        //* console.log("minus btn is clicked");
        if(event.target.parentElement.querySelector(".quantity").innerText > 1){
            event.target.parentElement.querySelector(".quantity").innerText--
            calculateProductPrice(event.target)
            calculateCartPrice()
        }
        else{
            if(confirm("Product will be removed ?")){
                //* remove
                event.target.parentElement.parentElement.parentElement.remove(event.target);
                calculateCartPrice()
            }
        }
    }
    else if(event.target.classList.contains("fa-plus")){
        //* console.log("plus btn is clicked");
        event.target.previousElementSibling.innerText++
        calculateProductPrice(event.target)
        calculateCartPrice()
    }
    else if (event.target.className == "remove-product"){
       //*  console.log("remove btn is clicked");
    }
    else("other element is clicked")
})

const calculateProductPrice = (clickedBtn) =>  {
const productInfoDiv = clickedBtn.parentElement.parentElement
/* console.log(productInfoDiv); */
const price = productInfoDiv.querySelector(".product-price strong").innerText
alert(price)
}

const calculateCartPrice = () =>  {

}