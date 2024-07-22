<template>
    <section class="about" id="about">
      <div class="about-img">
        <img src="~/assets/iu.png" alt="IU image">
      </div>

      <div class="about-content">
    <h2 class="heading">About <span>Me</span></h2>
    <h3>Hi, welcome to my first Nuxt Project!</h3>
    <ul>
        <li>I am very interested to learn about web development.</li>
        <li>I am an aspiring web developer and web designer.</li>

    </ul>
    <!-- <a href="#" class="btn">Read More</a> -->
    <nuxt-link to="/aboutMe" class="btn">Read More</nuxt-link>

    </div>

  </section>
</template>

<script>
export default {
  name: 'AboutMeSection'
}
</script>
     