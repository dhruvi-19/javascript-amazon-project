import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/cart-oop.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';
import '../data/backend-practice.js';
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

async function loadPage(){
  try{

    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
      loadCart(() => {
        // reject('error3');
        resolve('value3');
      });
    });
  } catch(error){
    console.log('Unexpected error. Pleae try again later.');
  }
  


  renderOrderSummary();
  renderPaymentSummary();


}
loadPage();



/*
Promise.all([
 loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })
]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
new Promise((resolve) =>{
  loadProducts(() => {
    resolve();
  });
}).then(() => {
  return new Promise(() => {
    loadCart(() => {
      resolve();
    });
  })
}).then(() => {
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();

    })
  });
}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });
