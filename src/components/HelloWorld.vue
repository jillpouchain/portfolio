<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

interface Section {
  id: string
  text: string
  title: string
}

interface Skill {
  title: string
  items: string[]
}

defineProps<{ msg: string }>()

const sections: Section[] = [
  {
    id: 'home',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus erat quam, at ornare odio facilisis condimentum. Curabitur facilisis venenatis lectus. Ut et vehicula velit, bibendum venenatis elit. Donec in tellus vel lectus ultricies finibus id et ligula. Nullam ultrices arcu non tortor fermentum eleifend. Sed id sem augue. Nunc facilisis justo a lorem aliquam, et pretium dui tincidunt. Quisque vitae sodales enim. Nunc rutrum auctor odio quis lobortis. Cras mauris est, lobortis at fermentum in, efficitur vitae ex. Donec sit amet libero at risus auctor gravida sed id mauris. Phasellus in massa tempus, convallis metus non, varius elit. Vestibulum sed libero eget elit scelerisque luctus. Quisque euismod nunc sed ex imperdiet, eu faucibus erat lobortis. Morbi sodales neque pharetra, suscipit velit nec, volutpat justo. Maecenas justo felis, mollis a tempus sit amet, venenatis vel erat. Suspendisse fermentum arcu quis laoreet mollis. Nunc vel nisi eu arcu lobortis suscipit. Nullam ipsum arcu, hendrerit id imperdiet ac, laoreet quis diam. Integer id blandit dolor. Curabitur tortor ante, egestas at tincidunt eget, convallis id orci. Pellentesque gravida quam tortor, id euismod massa luctus quis. Aliquam cursus libero sem, eget consectetur quam sagittis id. Curabitur mollis in lectus quis pretium. Curabitur vel odio pellentesque, ornare arcu quis, blandit odio. Donec eget ipsum a nisi scelerisque rutrum. Sed sed urna at elit cursus congue sit amet eu tortor. Maecenas auctor metus aliquam dignissim ullamcorper. Integer tincidunt dui vitae dui bibendum, sed auctor quam ullamcorper. Etiam suscipit sapien ac consequat venenatis. Suspendisse at magna felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eu euismod turpis. Vivamus semper massa felis, at eleifend massa tempor in. Nam convallis quam justo, vel ornare dui viverra ut. In in nunc nec eros convallis sollicitudin non at augue. Proin non fringilla odio, quis bibendum ante. Sed finibus erat ut arcu mollis, a interdum ligula tristique. Nunc sed nisi eu tellus feugiat rhoncus. Ut blandit massa leo. Sed nisl tortor, mattis id efficitur nec, porttitor quis ligula. Duis convallis, augue in pulvinar pellentesque, purus libero vehicula dui, ac cursus turpis nisi sollicitudin sem.',
    title: 'Home',
  },
  {
    id: 'about',
    text: 'Sed ac mauris cursus, dictum libero eget, gravida enim. Donec at suscipit tellus. Vestibulum vestibulum at urna nec elementum. Donec condimentum odio vel sapien volutpat, ac tristique velit placerat. Nunc sit amet erat ex. Curabitur nec molestie arcu. Integer mattis, neque at semper pharetra, erat ex feugiat sem, nec elementum lorem metus dictum lacus. Suspendisse sapien turpis, feugiat in imperdiet a, posuere vel eros. Nulla justo risus, sagittis ac nisl sit amet, hendrerit mollis nisi. Integer vel quam mauris. Nunc ut velit elit. Nullam et tortor porttitor, imperdiet lorem a, porta orci. Sed consectetur sollicitudin tellus sed luctus. Morbi purus diam, dapibus sit amet arcu nec, euismod consequat odio. Fusce vitae posuere tortor. Aliquam suscipit quam eget dolor pulvinar, eget vulputate tellus egestas. Curabitur eu maximus sem. Curabitur viverra lectus vitae felis sollicitudin, eu mattis lacus semper. Aliquam nec felis sollicitudin nunc mattis placerat id at ex. Vivamus porttitor enim dignissim congue tincidunt. Etiam in velit ultrices, egestas lectus id, aliquet felis. Nam eget dapibus sem. Aenean at ullamcorper diam. Suspendisse ac accumsan orci. Curabitur ornare nunc quam, sit amet viverra nisl malesuada at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris scelerisque erat lectus, at aliquam leo fermentum nec. Donec lacinia porttitor eros in fermentum. Sed lacus lacus, porta vel consectetur in, tincidunt et nibh. Vestibulum pulvinar pharetra felis sit amet maximus. Vestibulum nec placerat metus. Morbi nec odio eu odio placerat eleifend nec ac turpis. Morbi posuere tortor in urna vehicula congue. Quisque eget mi porta, ornare mauris et, congue odio. Aliquam nec mattis metus, at malesuada elit.',
    title: 'About Me',
  },
  {
    id: 'experiences',
    text: 'Maecenas orci ante, semper at ultricies sit amet, volutpat sed enim. Nunc at lacus placerat, maximus eros nec, porttitor erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris varius dui sodales metus volutpat scelerisque. Quisque ac metus ullamcorper eros vehicula elementum vel a ligula. Nunc venenatis quis ipsum id vulputate. Vestibulum at erat lacus. Sed ac nibh lectus. In a magna neque. Mauris vestibulum id est et varius. Nam a nisl id quam ultrices vestibulum sed vitae est. Duis congue quam sit amet tortor lacinia, a vestibulum justo interdum. Aenean nec eros et arcu consequat dignissim. Curabitur tortor quam, molestie a dignissim sollicitudin, ultrices non arcu. Praesent vel orci vitae augue convallis vehicula ac et libero. Etiam porta scelerisque euismod. Sed sit amet feugiat diam, sed ornare lectus. Curabitur finibus ipsum quis ex tempor, a varius arcu mollis. Ut eu nulla in dui tempor congue. Phasellus luctus finibus quam ac congue. In tincidunt magna quis varius suscipit. Suspendisse tempus dolor porta mi tincidunt egestas. Donec eget sollicitudin augue. Mauris in nisi in augue pharetra elementum in eu neque. Curabitur in sodales velit. Morbi scelerisque justo id vulputate iaculis. Donec hendrerit facilisis leo, quis semper nibh malesuada eget. Suspendisse scelerisque dolor augue, vel tincidunt lacus aliquam quis.',
    title: 'Experiences',
  }
];

const skills: Skill[] = [
  {
    items: ['Javascript', 'Typescript', 'Python', 'Golang'],
    title: 'Languages',
  },
  {
    items: ['React', 'Next.js', 'Angular', 'Vue.js', 'Tailwind', 'CSS', 'SCSS', 'Figma'],
    title: 'Frontend and Design',
  },
  {
    items: ['Node.js', 'Nest.Js', 'Express', 'Golang', 'PostgreSQL', 'MySQL', 'MongoDB'],
    title: 'Backend',
  },
  {
    items: ['Git', 'Jest', 'Docker', 'Jira', 'Redux'],
    title: 'Tools',
  },
];

const activeSection = ref<string>('home');

let observer: IntersectionObserver;

onMounted(() => {
  const elements = document.querySelectorAll<HTMLElement>("div.text-start");
  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    });
  },{
      threshold: 0.5,
      rootMargin: '0px 0px -40% 0px'
    });
  elements.forEach((element) => observer.observe(element));
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <div class="d-flex">
    <BNav class="align-items-start sticky-sidebar" style="width: 30%;" vertical>
      <BNavText class="fs-2 fw-bold">John SMITH</BNavText>
      <BNavText class="fw-bold">Fullstack Developer</BNavText>
      <BNavText class="text-start">Making full-stack apps, and enjoying my time while I do it</BNavText>
      <BNavItem link-class="p-0" href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin fa-xl"></i></BNavItem>
      <!-- <BBadge><i class="fa-brands fa-linkedin"></i> Let's keep in touch !</BBadge> -->
       <template v-for="section in sections">
        <BNavItem
          :id="`menu-${section.id}`"
          :class="{ active: activeSection === section.id }"
          :href="`#${section.id}`"
          :link-class="`fw-bold px-0 ${activeSection === section.id ? 'text-primary' : 'text-dark'}`"
        >
          {{ section.title }}
        </BNavItem>
       </template>
      <BNavItem
        id="menu-skills"
        :class="{ active: activeSection === 'skills' }"
        href="#skills"
        :link-class="`fw-bold px-0 ${activeSection === 'skills' ? 'text-primary' : 'text-dark'}`"
      >Skills</BNavItem>
      <BButton class="text-white" href="mailto:jillpouchain@gmail.com" variant="success">Contact me</BButton>
    </BNav>

    <div style="padding-bottom: 20rem; width: 70%;">
      <template v-for="section in sections">
        <div :id="section.id" class="text-start p-3">
          <h1>{{ section.title }}</h1>
          <p>{{ section.text }}</p>
        </div>
      </template>

      <div id="skills" class="text-start p-3">
        <h1>Skills</h1>
        <template v-for="skill in skills">
          <div>{{ skill.title }}</div>
          <BBadge v-for="item in skill.items" pill>{{ item }}</BBadge>
        </template>
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

.active {
  font-weight: 700;
  font-size: 1.25rem;
}
</style>
