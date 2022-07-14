<template>
  <nav class="flex flex-nowrap justify-between items-center text-gray-700 dark:text-gray-300 xl:text-xl text-base pb-8 xl:pb-12 flex-col lg:flex-row lg:space-y-0 space-y-5">
    <div>
      <h1 @click="goToRouter('Home')" style="font-family: 'Fuggles', cursive;" class="text-6xl tracking-wider font-extralight cursor-pointer">
        Ahmed Almory
      </h1>
    </div>
    <div>
      <router-link class="pr-6 font-light hover:text-gray-500" to="/">{{$t('Home')}}</router-link>
      <router-link class="pr-6 font-light hover:text-gray-500" to="/resume">{{$t('Resume')}}</router-link>
      <button class="rounded-lg bg-turquoise dark:bg-blue-500 hover:bg-fakhti py-1 px-2 lg:py-2 lg:px-4 text-sm lg:text-base text-white font-semibold" @click="goToRouter('Contact')">
        {{$t('Contact')}}
      </button>
      <v-drop-down ref="dropDown" class="ml-8">
          <div slot="trigger">
            <flag class="text-xl" :iso="choosenLanguage" />
            <i class="fas fa-chevron-down ml-2"></i>
          </div>
          <div slot="menu" class="dark:bg-gray-800">
            <div class="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-2"
              v-for="(language, index) in languages"
              :key="index"
              @click="changeLocale(index)">
              <div>
                <flag class="text-lg" :iso="language.flag" />
              </div>
              <div class="text-xs lg:text-sm">{{ $t(language.title) }}</div>
            </div>
          </div>
      </v-drop-down>

      <i v-if="!isDarkMode" @click="ToogleDarkMode" class="fas fa-moon ml-6 cursor-pointer border px-2 py-1 rounded-xl"></i>
      <i v-else @click="ToogleDarkMode" class="fas fa-sun ml-6 cursor-pointer text-yellow-500 border px-2 py-1 rounded-xl"></i>

    </div>
  </nav>
</template>


<script>
import i18n from "../i18n/index.js"
import VDropDown from "./DropDown.vue";

export default {
    name:'VNavbar',
    components:{VDropDown},
    data(){
      return{
        IamNotInHome: true,
        choosenLanguage: "",
        choosenLan: "",
        isDarkMode: false,
        languages: [
          // { flag: 'ma', language: 'ma', title: 'Tifinagh' },
          { id: 0, flag: "us", language: "en", title: "English" },
          { id: 1, flag: "eg", language: "ar", title: "Arabic" },
          { id: 2, flag: "tr", language: "tr", title: "Turkish" },
          { id: 3, flag: "fr", language: "fr", title: "French" },
        ],
      }
    },
    watch:{
        $route (to){
            if(to.path != "/"){
              this.IamNotInHome = false
            }else{
              this.IamNotInHome = true
            }
        }
    },
    methods: {
      changeLocale(index) {
        i18n.locale = this.languages[index].language
        this.choosenLanguage = this.languages[index].flag
        this.choosenLan = this.languages[index].title
        this.$store.commit('ToggleIsTranslated')
        this.$refs.dropDown.hide()
      },
      goToRouter(destination){
        this.$router.push({ name: destination })
      },
      ToogleDarkMode(){
        this.isDarkMode ? localStorage.theme = 'light' : localStorage.theme = 'dark'
        this.$router.go(0)
      }
    },
    created(){
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      this.isDarkMode = true
    } else {
      document.documentElement.classList.remove('dark')
      this.isDarkMode = false
      }
    },
    mounted() {
      this.choosenLanguage = 'us'
    }
};
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Fuggles&display=swap");
</style>