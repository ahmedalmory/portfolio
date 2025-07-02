<template>
    <div class="py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 max-w-xl mx-auto">
            <div class="absolute inset-0 bg-turquoise dark:bg-gray-700 shadow-lg transform -skew-y-6 sm:skew-y-0 -rotate-6 rounded-3xl"></div>
            <div class="relative bg-white shadow-lg dark:shadow-none rounded-3xl p-12 lg:p-20 dark:bg-gray-800 border border-opacity-0 border-gray-300 dark:border-opacity-100">
                <div class="max-w-md mx-auto">
                    <div>
                        <h1 class="text-3xl font-extrabold dark:text-gray-300">{{$t('Contact')}}</h1>
                        <p class="mt-3 text-sm md:text-base text-gray-500 dark:text-gray-300 leading-loose tracking-relaxed md:leading-loose md:tracking-relaxed whitespace-pre-line" :class="this.$i18n.locale == 'ar' ? 'text-right' : 'text-left'">{{$t('contactslogan')}}</p>
                        <hr class="mt-3 border-gray-300">
                    </div>
                    <div class="divide-y divide-gray-200">
                        <form @submit.prevent="sendEmail" class="pt-4 text-base leading-6 space-y-2 text-gray-700 sm:text-lg sm:leading-7 -mb-8">
                            <label class="block font-bold text-sm text-gray-500 dark:text-gray-300 leading-loose tracking-relaxed " :class="this.$i18n.locale == 'ar' ? 'text-right' : 'text-left'">
                                {{$t('Name')}} <span class="text-red-500">*</span>
                            </label>
                            <input required v-model="from_name" class="appearance-none text-sm block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name">
                            
                            <label class="block font-bold text-sm text-gray-500 dark:text-gray-300 leading-loose tracking-relaxed " :class="this.$i18n.locale == 'ar' ? 'text-right' : 'text-left'">
                                {{$t('Email')}} <span class="text-red-500">*</span>
                            </label>
                            <input v-model="email" required class="appearance-none text-sm block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="Email">
                            
                            <label class="block font-bold text-sm text-gray-500 dark:text-gray-300 leading-loose tracking-relaxed " :class="this.$i18n.locale == 'ar' ? 'text-right' : 'text-left'">
                                {{$t('Message')}} <span class="text-red-500">*</span>
                            </label>
                            <textarea v-model="message" required class="resize-y text-sm py-3 px-4 border focus:outline-none focus:bg-white rounded-md w-full bg-gray-200 dark:bg-gray-700 dark:text-gray-300" placeholder="Your message..."></textarea>
                            
                            <div class="flex items-end justify-end">
                                <button type="submit" class="bg-fakhti hover:bg-turquoise text-white font-semibold py-2 px-4 rounded text-sm">
                                    <p v-if="!isSending">{{$t('Send')}}</p>
                                    <i v-if="isSending" class="fas fa-circle-notch animate-spin"></i>
                                </button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import i18n from '@/i18n/index.js'

const SwalEmail = Swal.mixin({
    customClass: {
        popup: 'dark:bg-gray-700',
        title: 'dark:text-gray-300',
        content: 'dark:text-gray-300',
        confirmButton: 'bg-fakhti hover:bg-turquoise text-white font-semibold py-2 px-4 rounded',
    },
    buttonsStyling: false,
})

export default {
    data(){
        return{
            from_name : '',
            email: '',
            message: '',
            isSending: false
        }
    },
    methods: {
        async sendEmail(){
            this.isSending = true
            if(this.from_name !== "" || this.email !== "" || this.message !== ""){
                try {
                    await emailjs.send("service_9tk1mlb","template_d66po7d",{
                        to_name: "Ahmed Almory",
                        from_name: this.from_name,
                        message: this.message,
                        reply_to: this.email,
                    },'v3bOgNALuXq3n2HLr').then(() => {
                        SwalEmail.fire({
                            icon: 'success',
                            title: i18n.t('Email Sent!'),
                            text: i18n.t('Thanks'),
                        })
                    }).finally(()=>{
                        this.isSending = false
                    })
                } catch (error) {
                    console.log(error)
                    SwalEmail.fire({
                        icon: 'error',
                        title: i18n.t('Email Not Sent!'),
                        text: error
                    })
                }
            }
        }
    }
}
</script>
