<script setup lang="ts">

defineProps<{ msg: string }>()

function onClick() {
  window.scrollTo(0, 0);
}
</script>

<template>
  <div class="d-flex">
    <BNav class="align-items-start sticky-sidebar" style="width: 30%;" vertical>
      <BNavText class="fs-2 fw-bold">John SMITH</BNavText>
      <BNavText class="fw-bold">Fullstack Developer</BNavText>
      <BNavText class="text-start">Making full-stack apps, and enjoying my time while I do it</BNavText>
      <BNavItem link-class="p-0" href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin fa-xl"></i></BNavItem>
      <!-- <BBadge><i class="fa-brands fa-linkedin"></i> Let's keep in touch !</BBadge> -->
      <BNavItem link-class="fw-bold px-0" @click="onClick">Home</BNavItem>
      <BNavItem link-class="fw-bold px-0" href="#about">About me</BNavItem>
      <BNavItem link-class="fw-bold px-0" href="#experiences">Experiences</BNavItem>
      <BNavItem link-class="fw-bold px-0" href="#skills">Skills</BNavItem>
      <BButton class="text-white" href="mailto:jillpouchain@gmail.com" variant="success">Contact me</BButton>
    </BNav>
    <div style="width: 70%;">
      <div id="home" class="text-start p-3">
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus mattis maximus. Duis eu posuere quam, sit amet pharetra dolor. Quisque quis ultricies nisi. Morbi rutrum dolor ac sem maximus elementum. Etiam ut ligula nibh. Aenean quis aliquam neque, id pharetra lacus. Nullam scelerisque est ac elit hendrerit blandit. Ut dignissim hendrerit faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque congue magna et dui laoreet eleifend.</p>
        <p>Maecenas feugiat euismod ornare. Aliquam a fringilla elit. Curabitur eleifend nisi eget sapien pretium pretium. Duis bibendum leo nibh. Suspendisse vel egestas mi. Donec sollicitudin eros lacus, ut gravida lorem scelerisque at. Donec ex sem, consectetur in ullamcorper nec, commodo eget est. Etiam id quam lacus. Vestibulum nibh nisi, hendrerit ac consectetur quis, euismod sit amet ipsum. Maecenas non tortor commodo, gravida dolor vel, gravida sem. Nulla eu purus ac ante faucibus posuere vitae quis quam. Nulla facilisi.</p>
      </div>
      <div id="about" class="text-start p-3">
        <h1>About</h1>
        <p>Donec pellentesque maximus sem ac tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec dolor dui. Vivamus ac felis at lorem facilisis auctor in in est. Vestibulum euismod at nisi quis egestas. Sed dignissim condimentum odio non gravida. Praesent non ipsum eu enim fringilla commodo. Duis ut dolor risus. Nulla dapibus porttitor ligula, at pellentesque sapien mattis eu. Pellentesque aliquet sed lacus ut molestie. Morbi hendrerit justo turpis, eget dignissim odio tristique id. Morbi gravida pretium purus sit amet tristique. Fusce interdum arcu a tortor facilisis, hendrerit faucibus mauris lacinia. Sed id leo eget tortor aliquam hendrerit eu quis nunc.</p>
        <p>Mauris vehicula nunc at cursus placerat. Proin euismod bibendum eros molestie venenatis. Fusce vitae nunc purus. Donec lobortis metus ac arcu ultricies, vel rutrum eros pellentesque. Donec egestas placerat urna id faucibus. Ut molestie tempor leo, nec pharetra ex malesuada et. Duis interdum rutrum sem tempor suscipit. Duis vitae iaculis nisl. Mauris iaculis eu leo non posuere. Sed sed nibh consequat, consectetur odio at, vehicula velit. Cras eu diam sit amet quam dapibus lacinia.</p>
      </div>
      <div id="experiences" class="text-start p-3">
        <h1>Experiences</h1>
        <p>Aliquam malesuada enim et diam maximus blandit. Morbi sed eros gravida, cursus metus et, tempor velit. Nam sit amet velit vitae libero volutpat tincidunt vitae ullamcorper orci. Etiam vel finibus lectus. In eget nunc eu risus accumsan faucibus. Donec dignissim velit non tellus ultrices facilisis. Phasellus elementum nibh id tempus cursus. Nam eu dui lobortis, vulputate arcu ac, hendrerit magna. Aliquam lobortis magna libero, id tristique eros commodo at. Pellentesque egestas ligula est, at pretium massa pulvinar a. Suspendisse luctus velit diam, ut malesuada velit vulputate ut. Sed faucibus justo eu turpis iaculis mattis. Aliquam in bibendum augue, sit amet sollicitudin velit. Aenean felis lacus, bibendum ut congue vel, commodo a est. Nam consectetur ultricies convallis. Maecenas nibh enim, blandit nec egestas eu, congue sed libero.</p>
        <p>Nam tellus ex, aliquet sed malesuada ut, placerat eget lectus. Suspendisse commodo, felis vitae iaculis feugiat, turpis eros bibendum purus, vel aliquet nulla ligula vel odio. Aliquam erat volutpat. Aenean quis leo quis diam congue faucibus non ut leo. Cras sapien dolor, tempus sit amet justo eget, gravida cursus diam. Vivamus at condimentum dolor. Cras consequat quam at arcu laoreet convallis. In leo massa, vulputate eget mauris vel, semper sollicitudin nisi. Quisque in gravida nulla. Integer nec tellus ac ligula tincidunt sagittis. Phasellus in sem nec turpis tincidunt sagittis eu quis erat.</p>
      </div>
      <div id="skills" class="text-start p-3">
        <h1>Skills</h1>
        <div>Languages</div>
        <BBadge pill>Javascript</BBadge>
        <BBadge pill>Typescript</BBadge>
        <BBadge pill>Python</BBadge>
        <BBadge pill>Golang</BBadge>
        <div>Frontend and Design</div>
        <BBadge pill>React</BBadge>
        <BBadge pill>Next.js</BBadge>
        <BBadge pill>Angular</BBadge>
        <BBadge pill>Vue.js</BBadge>
        <BBadge pill>Tailwind</BBadge>
        <BBadge pill>CSS</BBadge>
        <BBadge pill>SCSS</BBadge>
        <BBadge pill>Figma</BBadge>
        <div>Backend</div>
        <BBadge pill>Node.js</BBadge>
        <BBadge pill>Nest.Js</BBadge>
        <BBadge pill>Express</BBadge>
        <BBadge pill>Golang</BBadge>
        <BBadge pill>PostgreSQL</BBadge>
        <BBadge pill>MySQL</BBadge>
        <BBadge pill>MongoDB</BBadge>
        <div>Tools</div>
        <BBadge pill>Git</BBadge>
        <BBadge pill>Jest</BBadge>
        <BBadge pill>Docker</BBadge>
        <BBadge pill>Jira</BBadge>
        <BBadge pill>Redux</BBadge>
      </div>
    </div>
  </div>
</template>

<style scoped>
.badge.rounded-pill {
  margin: 0.2rem;
}

.sticky-sidebar {
  position: sticky;
  top: 3rem;
  align-self: flex-start;
}

</style>
