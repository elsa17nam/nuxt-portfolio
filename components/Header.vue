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
  



<!-- 
<template>
  <div>
   
    <button @click="toggleDarkMode" class="dark-mode-toggle">
        Toggle Dark Mode
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const darkMode = ref(false);
  
  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
    document.body.classList.toggle('dark-mode', darkMode.value);
    localStorage.setItem('dark-mode', darkMode.value ? 'true' : 'false');
  };
  
  // Check for saved user preference on mount
  onMounted(() => {
    const savedMode = localStorage.getItem('dark-mode') === 'true';
    darkMode.value = savedMode;
    document.body.classList.toggle('dark-mode', savedMode);
  });
  </script>
  
  <style>
  .dark-mode-toggle {
    /* Add styles for your toggle button */
  }
  </style> --> 
  


<!-- <template>
    <header class="header">
      <a href="#" class="logo">Portfolio</a>
      <nav class="navbar">
        <a href="#home" class="active">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
      <div class="bx bx-moon" id="darkMode-icon"></div>
    </header>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  onMounted(() => {
    window.onscroll = () => {
      let header = document.querySelector('.header')
      header.classList.toggle('sticky', window.scrollY > 100)
    }
  })
  </script>
   --> 