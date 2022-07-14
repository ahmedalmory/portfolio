<template>
  <div>
    <h1 class="text-center text-gray-800 dark:text-gray-300 pb-20 text-5xl font-extrabold">
      {{$t('iwork')}}
    </h1>
    <carousel
      :perPageCustom="[[320, 1],[900, 3], [1199, 4]]"
      :mouse-drag="true"
      :autoplay="true"
      :paginationSize="0"
      :loop="true"
      :speed="800"
      :autoplayTimeout="3000"
      :autoplayHoverPause="false"
    >
      <slide v-for="(skill, index) in skills" :key="index">
        <div class="rounded-full flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-8 w-48 h-48 lg:w-52 lg:h-52 mx-6 space-y-6">
          <img class="w-1/2" :src="skill.image" />
          <h1 class="text-base dark:text-gray-300">{{ skill.name }}</h1>
        </div>
      </slide>
    </carousel>
  </div>
</template>


<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
    name:'Skills',
    components: { Carousel, Slide },
    data(){
        return{
            skills: [
                {name: 'Python', image: require("../assets/images/skills/python.png")},
                {name: 'PHP', image: require("../assets/images/skills/php.png")},
                {name: 'Bash', image: require("../assets/images/skills/bash.png")},
                { name: "JavaScript", image: require("../assets/images/skills/javascript.png")},
                { name: "TypeScript", image: require("../assets/images/skills/typescript.png")},
                { name: "SQL", image: require("../assets/images/skills/mysql.png")},
                { name: "HTML", image: require("../assets/images/skills/html.png")},
                { name: "CSS", image: require("../assets/images/skills/css.png")},

                { name: "Laravel", image: require("../assets/images/skills/laravel.png")},
                { name: "Django", image: require("../assets/images/skills/django.png")},
                { name: "Express.js", image: require("../assets/images/skills/expressjs.png")},
                { name: "Symfony", image: require("../assets/images/skills/symfony.png")},
                { name: "Livewire", image: require("../assets/images/skills/livewire.png")},
                { name: "Vue JS", image: require("../assets/images/skills/vue.png")},
                { name: "Alpine.js", image: require("../assets/images/skills/alpine.png")},
                { name: "React JS", image: require("../assets/images/skills/reactjs.png")},
                { name: "Bootstrap", image: require("../assets/images/skills/bootstrap.png")},
                { name: "Tailwind CSS", image: require("../assets/images/skills/tailwind.png")},

                { name: "Git", image: require("../assets/images/skills/git.png")},
                { name: "composer", image: require("../assets/images/skills/composer.png")},
                { name: "Docker", image: require("../assets/images/skills/docker.png")},
                { name: "Vim", image: require("../assets/images/skills/vim.png")},
                { name: "npm", image: require("../assets/images/skills/npm.png")},

                { name: "PHPUnit", image: require("../assets/images/skills/phpunit.png")},

                { name: "Linux", image: require("../assets/images/skills/linux.png")},
                { name: "Node JS", image: require("../assets/images/skills/nodejs.png")},
                { name: "AWS", image: require("../assets/images/skills/aws.png")},
                { name: "Digital Ocean", image: require("../assets/images/skills/digital_ocean.png")},
                { name: "Heroku", image: require("../assets/images/skills/heroku.png")},
                { name: "Mongo DB", image: require("../assets/images/skills/mongo_db.png")},
            ],
        }
    }
};
</script>
