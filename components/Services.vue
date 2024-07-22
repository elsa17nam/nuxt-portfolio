<template>
  <section class="services" id="services">
    <h2 class="heading">My <span>Services</span></h2>
    <div class="services-container">
      <div class="services-box">
        <i class="bx bx-code-alt"></i>
        <h3>Web Development</h3>
        <p>Actually, not yet. But soon!</p>
        <nuxt-link to="/web-dev" class="btn">Read More</nuxt-link>
      </div>
      <div class="services-box">
        <i class="bx bx-palette"></i>
        <h3>Web Designer</h3>
        <p>Actually, not yet. But soon!</p>
        <nuxt-link to="/web-designer" class="btn">Read More</nuxt-link>
      </div>
      <div class="services-box">
        <i class="bx bx-chalkboard"></i>
        <h3>Arabic Teacher</h3>
        <p>I had 2 years of teaching experience.</p>
        <nuxt-link to="/a-teacher" class="btn">Read More</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection'
}
</script>






