<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">صفحه اصلی</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-danger" href="#">شگفت انگیزها</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">درباره ما</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">تماس باما</a>
          </li>
      </ul>

      <div class="d-flex">
          <i class="bi bi-person-fill fs-4 btn border-0 p-0"></i>
          <span class="bg-dark mx-3 my-1" style="width: 1px;"></span>
          <i class="bi bi-cart-fill fs-4 btn border-0 p-0" @click="cartBtnHandler"></i>
      </div>
    </div>
  </div>
</nav>
</template>

<script setup>
</script>

<style>
</style>