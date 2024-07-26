<template>
    <header class="header">
      <a href="#" class="logo">Portfolio</a>
      <nav class="navbar">
        <a href="#home" class="active">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <div class="bx bx-moon" id="darkMode-icon"></div>
    </header>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  
  onMounted(() => {
    window.onscroll = () => {
      let header = document.querySelector('.header')
      header.classList.toggle('sticky', window.scrollY > 100)
    }
  })
  </script>

<!-- <style scoped>
/* General styles for the header and navbar */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #695d5d; /* White bac kground */
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}



.nav-link {
  color: #333333; /* Dark gray color */
  text-decoration: none;
  font-size: 14px;
}

.nav-link:hover {
  color: #007bff; /* Blue color on hover */
  text-decoration: underline; /* Underline on hover */
}

.bx-moon {
  font-size: 24px;
  color: #333333; /* Dark gray color */
}

.header.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #989696; /* Ensures the background color persists when sticky */
}
</style> -->
  

