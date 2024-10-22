<template>
    <div id="showProductTemplate" class="container text-center mt-3">
      <div class="row">
        <div
          class="p-0 col-md-4"
          v-for="(product, index) in displayedProducts"
          :key="index"
        >
          <div class="card rounded-0">
            <div class="w-100 p-3">
              <img :src="product.img" class="card-img-top w-75" alt="..." />
            </div>
            <div class="card-body">
              <p class="card-text text-start">
                {{ product.title }}
              </p>
            </div>
            <div
              class="card-footer text-body-secondary d-flex justify-content-between align-items-center"
            >
              <button
                class="btn btn-outline-success py-0 px-4"
                @click="addToCartHandler(product.id)"
              >
                <i class="bi bi-cart-plus fs-5"></i>
              </button>
              <span id="price" class="iranyekan_ebold"
                >{{ Number(product.price).toLocaleString("fa-IR")
                }}<span class="ms-1">تومان</span></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

//   import { computed, inject, ref } from "vue";
//   import Swal from "sweetalert2";
//   const data = inject("data");
//   const products = ref(data.products);
//   const selectedBrands = inject("selectedBrands");
//   const showAvailable = inject("availabilityStatus");
//   const sortUpdated = inject("sortUpdated");
//   const displayedProducts = computed(() => {
//     let filtered = products.value;
//     if (selectedBrands.value.length) {
//       filtered = filtered.filter((product) =>
//         selectedBrands.value.includes(product.brand.name)
//       );
//     }
//     if (showAvailable.value) {
//       filtered = filtered.filter((product) => product.stock > 0);
//     }
//     switch (sortUpdated.value) {
//       case "cheapest":
//         filtered = filtered.sort((a, b) => a.price - b.price);
//         break;
//       case "mostExpensive":
//         filtered = filtered.sort((a, b) => b.price - a.price);
//         break;
//       case "Bestselling":
//         filtered = filtered.sort((a, b) => b.sell - a.sell);
//         break;
//       case "newest":
//         filtered = filtered.sort(
//           (a, b) => new Date(b.created) - new Date(a.created)
//         );
//         break;
//       case "oldest":
//         filtered = filtered.sort(
//           (a, b) => new Date(a.created) - new Date(b.created)
//         );
//         break;
//       default:
//         break;
//     }
  
//     return filtered;
//   });
  
//   const cart = inject("cart");
//   function addToCartHandler(id) {
//     const productSelected = products.value.find((element) => element.id == id);
//     if (productSelected) {
//       if (cart.value.includes(productSelected)) {
//         productSelected.qty += 1;
//       } else {
//         productSelected.qty = 1;
//         cart.value.push(productSelected);
//       }
//     }
//     if (productSelected.qty > productSelected.stock) {
//       productSelected.qty = productSelected.stock;
//       Swal.fire({
//         position: "top-start",
//         icon: "warning",
//         text: `فقط ${productSelected.stock.toLocaleString(
//           "fa-IR"
//         )} عدد از محصول در انبار موجود است.`,
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     }
//   }
  </script>
  
  <style>
  </style>