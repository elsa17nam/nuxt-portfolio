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
  

