<script setup lang="ts">
import { ref, onMounted } from 'vue'
import TheEditor from '@/components/TheEditor.vue'
import ButtonLoader from '@/components/ButtonLoader.vue'
import { getAuth, updateProfile } from 'firebase/auth'
import { db } from '@/firebase'
import { setDoc, doc, getDocs, collection } from 'firebase/firestore'
import { useAuthStore } from '@/stores/auth'
import RoleSelect from '@/components/RoleSelect.vue'
import { fetchData } from '@/composables/fetchData'

const store = useAuthStore()
const user = ref({
  ...store.user
})
const currentUser = getAuth().currentUser
const updatedUser = ref({
  ...user.value
})
const isLoading = ref(false)
const content = ref('')
const shortContent = ref('')
const template = `<p></p><h1 class="ql-align-center"><strong style="background-color: rgb(255, 255, 255); color: rgb(20, 20, 20);">Biografiya</strong></h1><p><br></p><p class="ql-align-center"><strong style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">Ta’lim darajasi</strong></p><ol><li data-list="bullet" class="ql-align-justify"><span class="ql-ui" contenteditable="false"></span><span style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">2005-2009 –Toshkent avtomobil-yo’llar instituti (bakalavriatura)</span></li><li data-list="bullet" class="ql-align-justify"><span class="ql-ui" contenteditable="false"></span><span style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">2009-2011 – Toshkent avtomobil-yo’llar instituti (magistratura)</span></li><li data-list="bullet" class="ql-align-justify"><span class="ql-ui" contenteditable="false"></span><span style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">2013-2016 – Toshkent avtomobil’ - yo’llar instituti avtomobil’ yo’llari va aerodromlarni loyihalash kafedrasi katta ilmiy xodim - izlanuvchisi</span></li></ol><p class="ql-align-center"><strong style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">Mukofotlar</strong></p><ol><li data-list="bullet" class="ql-align-justify"><span class="ql-ui" contenteditable="false"></span><span style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">2015 - "Eng faol transport xodimi" nominatsiyasida "Yilning eng faol yosh mutaxassisi" tanlovida "Vatanim rivojiga qo'shgan hissam" tanlovida qatnashgani uchun faxriy diplom va sertifikat bilan taqdirlandi.</span></li><li data-list="bullet" class="ql-align-justify"><span class="ql-ui" contenteditable="false"></span><span style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">2020 -&nbsp;"BOBEK" Milliy harakati "loyihasida qatnashgani uchun" Eng yaxshi yosh olim -2020 "medali va diplom bilan taqdirlandi.&nbsp;&nbsp;</span></li></ol><p class="ql-align-center"><strong style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">Kasbiy faoliyat bosqichlari</strong></p><ol><li data-list="bullet" class="ql-align-justify"><span class="ql-ui" contenteditable="false"></span><span style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">2011-2013 - Toshkent avtomobil’ - yo’llar instituti avtomobil’ yo’llari va aerodromlar kafedrasi assistenti</span></li><li data-list="bullet" class="ql-align-justify"><span class="ql-ui" contenteditable="false"></span><span style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">2016-2017 - Toshkent avtomobil’ yo’llarini loyihalash, qurish va ekspluatatsiyasi instituti avtomobil’ yo’llari va aerodromlarni loyihalash kafedrasi assistenti</span></li><li data-list="bullet" class="ql-align-justify"><span class="ql-ui" contenteditable="false"></span><span style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">2017-2018 - Toshkent avtomobil’ yo’llarini loyihalash, qurish va ekapluatatsiyasi instituti avtomobil’ yo’llarini qidiruv va loyihalash&nbsp;kafedrasi assistenti</span></li><li data-list="bullet" class="ql-align-justify"><span class="ql-ui" contenteditable="false"></span><span style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">2018-2020 - Toshkent avtomobil’ yo’llarini loyihalash, qurish va ekapluatatsiyasi instituti avtomobil’ yo’llarini qidiruv va loyihalash&nbsp;kafedrasi mudiri</span></li><li data-list="bullet" class="ql-align-justify"><span class="ql-ui" contenteditable="false"></span><span style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">2020 – h. v.- Toshkent davlat transport universiteti avtomobil yo’llarni qidiruv va loyihalash kafedrasi mudiri, Professor, Texnika fanlari nomzodi.</span></li></ol><p class="ql-align-center"><strong style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">Kasbiy yutuqlar va ijodiy loyihalar</strong></p><ol><li data-list="bullet" class="ql-align-justify"><span class="ql-ui" contenteditable="false"></span><span style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">2014-2017 - "Innovatsion g'oyalar" respublika tanlovi g'olibi</span></li></ol><p class="ql-align-center"><strong style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">Malaka oshirish</strong></p><ol><li data-list="bullet" class="ql-align-justify"><span class="ql-ui" contenteditable="false"></span><span style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">2012 - Toshkent axborot texnologiyalari universiteti «Axborot texnologiyalari» (O’zbekiston, Toshkent)</span></li><li data-list="bullet" class="ql-align-justify"><span class="ql-ui" contenteditable="false"></span><span style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">2013&nbsp;- Nizomiy nomidagi TDPI huzuridagi PKQT va ularning malakasini oshirish tarmoq markazi PEDAGOGIKA (Kasbiy ta’lim), (O’zbekiston, Toshkent)</span></li><li data-list="bullet" class="ql-align-justify"><span class="ql-ui" contenteditable="false"></span><span style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">2018 - “Oliy ta’lim muassasalari boshqaruv kadrlari zaxirasini shakllantirish” bo’yicha O’zbekiston Respublikasi Oliy va o’rta maxsus ta’lim vazirligi kurslari (O’zbekiston, Toshkent)</span></li><li data-list="bullet" class="ql-align-justify"><span class="ql-ui" contenteditable="false"></span><span style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">2019 - “КРЕДО-ДИАЛОГ” kompaniyasi mutaxassislari ishtirokida AvaYTHAda malaka oshirish kurslari (Rossiya, Moskva);</span></li><li data-list="bullet" class="ql-align-justify"><span class="ql-ui" contenteditable="false"></span><span style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">2019 - BMTU qoshidagi KMOvaQT tarmoqlararo institutida malaka oshirish va kadrlarni qayta tayyorlash kurslari (Belorussiya, Minsk)</span></li><li data-list="bullet" class="ql-align-justify"><span class="ql-ui" contenteditable="false"></span><span style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">2019 - “КРЕДО-ДИАЛОГ” kompaniyasida “Transport komminikatsiyalarini loyihalanshni zamonaviy avtomatlashgan texnologiyalari” mavzusida kurs (Belorussiya, Minsk)</span></li></ol><p><br></p><h5><span style="background-color: rgb(255, 255, 255); color: rgb(0, 79, 236);">F.I.O.:</span></h5><p><span style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">&nbsp;Xudayqulov Rashidbek Mansurjonovich</span></p><h5><span style="background-color: rgb(255, 255, 255); color: rgb(0, 79, 236);">Tavallud kuni:</span></h5><h5><span style="background-color: rgb(255, 255, 255); color: rgb(0, 79, 236);">Darajasi:</span></h5><p><span style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">&nbsp;Texnika fanlari nomzodi</span></p><h5><span style="background-color: rgb(255, 255, 255); color: rgb(0, 79, 236);">Tajriba:</span></h5><p><span style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">&nbsp;Yil</span></p><h5><span style="background-color: rgb(255, 255, 255); color: rgb(0, 79, 236);">Telefon:</span></h5><p><span style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">&nbsp;+998909590208</span></p><h5><span style="background-color: rgb(255, 255, 255); color: rgb(0, 79, 236);">Email:</span></h5><p><span style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">&nbsp;Rashidbek_19_87@mail.ru</span></p><h5><span style="background-color: rgb(255, 255, 255); color: rgb(0, 79, 236);">ORCID:</span></h5><h5><span style="background-color: rgb(255, 255, 255); color: rgb(0, 79, 236);">Scopus ID:</span></h5><h5><span style="background-color: rgb(255, 255, 255); color: rgb(0, 79, 236);">Manzil:</span></h5><p><span style="color: rgb(100, 100, 100); background-color: rgb(255, 255, 255);">&nbsp;Toshkent shahar Mirobod tumani Temiryo‘lchilar ko‘chasi 1-uy</span></p><p><br></p><p> </p><p> content.value</p> content.value`
const teacherRoles = ref<any>([])
const selectedRole = ref('')

const faculties = ref<any>([])
const subFaculties = ref<any>([])
const selectedFaculty = ref<any>(null)
const selectedSubFaculty = ref<any>(null)

onMounted(async () => {
  faculties.value = await fetchData('faculties')
  await fetchTeacherRoles()
})

const loadSubFaculties = () => {
  if (selectedFaculty.value && selectedFaculty.value.kafedra) {
    subFaculties.value = selectedFaculty.value.kafedra
  } else {
    subFaculties.value = []
  }
}
const fetchTeacherRoles = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'faculties'))
    querySnapshot.forEach((doc) => {
      teacherRoles.value.push(doc.data())
    })
  } catch (error) {
    console.error('Error fetching teacher roles: ', error)
  }
}
const handleShortDescriptionFromChild = (shortDescription: string) => {
  content.value = shortDescription
}
const sendQuil = async () => {
  if (currentUser !== null) {
    try {
      isLoading.value = true

      const colRef = doc(db, 'users', updatedUser.value.id)

      await setDoc(colRef, {
        ...updatedUser.value,
        biography: content.value
      })

      await updateProfile(currentUser, { displayName: updatedUser.value.name })

      store.fetchProfile()
    } catch (error) {
      console.error('Error updating profile:', error)
    } finally {
      isLoading.value = false
    }
  }
}
const sendQuil2 = async () => {
  if (currentUser !== null) {
    try {
      isLoading.value = true

      const colRef = doc(db, 'users', updatedUser.value.id)

      await setDoc(colRef, {
        ...updatedUser.value,
        shortBiography: content.value
      })

      await updateProfile(currentUser, { displayName: updatedUser.value.name })

      store.fetchProfile()
    } catch (error) {
      console.error('Error updating profile:', error)
    } finally {
      isLoading.value = false
    }
  }
}
const useTemplate = () => {
  content.value = template
}

const updateValue = (event: any, slug: string) => {
  const newValue = event.target.value
  updatedUser.value[slug] = newValue
}
const updateProfileInformation = async () => {
  if (currentUser !== null) {
    try {
      isLoading.value = true
      await updateProfile(currentUser, { displayName: updatedUser.value.name })
      const colRef = doc(db, 'users', updatedUser.value.id)
      updatedUser.value.role = selectedRole.value
      updatedUser.value.faculty = selectedFaculty.value.name
      updatedUser.value.kafedra = selectedSubFaculty.value
      setDoc(colRef, updatedUser.value)
      store.fetchProfile()
    } catch (error) {
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }
}
</script>

<template>
  <div class="relative">
    <div class="mb-7">
      <h1 class="text-[20px] font-medium">Shaxsiy ma'lumot</h1>
      <span class="text-gray-400">Sizning asosiy profilingiz ma'lumotlari</span>
    </div>
    <role-select v-if="false" class="mb-5" :roles="teacherRoles" v-model="selectedRole" />

    <div class="flex gap-5 justify-between mb-5">
      <!-- Faculties Dropdown -->
      <div class="flex w-[400px] flex-col max-xl:w-full">
        <select
          v-model="selectedFaculty"
          @change="loadSubFaculties"
          class="rounded-md border border-[#e0e0e0] bg-transparent px-4 py-3 text-base outline-none focus:border-primary focus:shadow-md"
        >
          <option value="" disabled selected>Fakultet nomi</option>
          <option v-for="faculty in faculties" :key="faculty.name" :value="faculty">
            {{ faculty.name }}
          </option>
        </select>
      </div>
      <!-- Sub-Faculties Dropdown -->
      <div class="flex w-[400px] flex-col max-xl:w-full">
        <select
          v-if="subFaculties.length > 0"
          v-model="selectedSubFaculty"
          class="rounded-md border border-[#e0e0e0] bg-transparent px-4 py-3 text-base outline-none focus:border-primary focus:shadow-md"
        >
          <option v-for="subFaculty in subFaculties" :key="subFaculty" :value="subFaculty">
            {{ subFaculty }}
          </option>
        </select>
      </div>
    </div>
    <div class="flex flex-col gap-5 pb-10">
      <div class="flex flex-wrap justify-between gap-5 text-base">
        <div class="flex w-[400px] flex-col max-xl:w-full">
          <label for="name" class="mb-2 block font-medium">Your name</label>
          <input
            type="text"
            required
            name="name"
            @input="updateValue($event, 'name')"
            v-model="user.name"
            autocomplete="off"
            placeholder="name"
            class="w-full rounded-md border border-[#e0e0e0] bg-transparent px-4 py-3 text-base outline-none focus:border-primary focus:shadow-md"
          />
        </div>
        <div class="flex w-[400px] flex-col max-xl:w-full">
          <label for="email" class="mb-2 block font-medium text-gray-900">Email address</label>
          <input
            type="email"
            required
            disabled
            v-model="user.email"
            autocomplete="off"
            placeholder="email@company.com"
            class="w-full cursor-not-allowed rounded-md border border-[#e0e0e0] bg-transparent px-4 py-3 text-base text-tg-paragraph-color outline-none focus:border-primary focus:shadow-md"
          />
        </div>
      </div>
      <div class="flex flex-wrap justify-between gap-5 text-base">
        <div class="flex w-[400px] flex-col max-xl:w-full">
          <label for="linkedin" class="mb-2 block font-medium text-gray-900">Your Linkedin</label>
          <input
            type="text"
            name="linkedin"
            @input="updateValue($event, 'linkedin')"
            v-model="user.linkedin"
            autocomplete="off"
            placeholder="link"
            class="w-full rounded-md border border-[#e0e0e0] bg-transparent px-4 py-3 text-base outline-none focus:border-primary focus:shadow-md"
          />
        </div>
      </div>
      <div class="flex flex-wrap justify-between gap-5 text-base">
        <div class="flex w-[400px] flex-col max-xl:w-full">
          <label for="telegram" class="mb-2 block font-medium text-gray-900">Your telegram</label>
          <input
            type="text"
            name="telegram"
            @input="updateValue($event, 'telegram')"
            v-model="user.telegram"
            autocomplete="off"
            placeholder="https://t.me/n_akramjon"
            class="w-full rounded-md border border-[#e0e0e0] bg-transparent px-4 py-3 text-base outline-none focus:border-primary focus:shadow-md"
          />
        </div>
        <div class="flex w-[400px] flex-col max-xl:w-full">
          <label for="phone" class="mb-2 block font-medium text-gray-900">Your phone</label>
          <input
            type="text"
            name="phone"
            @input="updateValue($event, 'phone')"
            v-model="user.phone"
            autocomplete="off"
            placeholder="+998901234567"
            class="w-full rounded-md border border-[#e0e0e0] bg-transparent px-4 py-3 text-base outline-none focus:border-primary focus:shadow-md"
          />
        </div>
      </div>
      <div class="flex flex-wrap justify-between gap-5 text-base">
        <div class="flex w-[400px] flex-col max-xl:w-full">
          <label for="twitter" class="mb-2 block font-medium text-gray-900">Your Twitter</label>
          <input
            type="text"
            name="twitter"
            @input="updateValue($event, 'twitter')"
            v-model="user.twitter"
            autocomplete="off"
            placeholder="https://x.com/elonmusk"
            class="w-full rounded-md border border-[#e0e0e0] bg-transparent px-4 py-3 text-base outline-none focus:border-primary focus:shadow-md"
          />
        </div>
        <div class="flex w-[400px] flex-col max-xl:w-full">
          <label for="facebook" class="mb-2 block font-medium text-gray-900">Your Facebook</label>
          <input
            type="text"
            name="facebook"
            @input="updateValue($event, 'facebook')"
            v-model="user.facebook"
            autocomplete="off"
            placeholder="https://www.facebook.com/zuck/"
            class="w-full rounded-md border border-[#e0e0e0] bg-transparent px-4 py-3 text-base outline-none focus:border-primary focus:shadow-md"
          />
        </div>
      </div>
      <div class="flex justify-end">
        <button
          @click="updateProfileInformation"
          class="w-[180px] update-btn bg-primary flex justify-center items-center h-16 gap-2"
        >
          <button-loader v-if="isLoading" />
          <span v-else>Yangilash</span>
        </button>
      </div>
    </div>
  </div>
  <button @click="useTemplate">Shablondan foydalanish</button>
  <the-editor @input="handleShortDescriptionFromChild" :content="content" :edit-editor="content" />
  <button
    @click="sendQuil"
    class="w-[180px] update-btn bg-primary flex justify-center items-center h-16 gap-2"
  >
    Send Biography
  </button>

  <!-- SHORT BIO -->
  <the-editor
    @input="handleShortDescriptionFromChild"
    :content="shortContent"
    :edit-editor="shortContent"
    class="mt-10"
  />
  <button
    @click="sendQuil2"
    class="w-[180px] update-btn bg-primary flex justify-center items-center h-16 gap-2"
  >
    Send Info
  </button>
</template>

<style scoped>
.update-btn {
  border: 0px;
  color: #fff;
  font-weight: 600;
  text-transform: capitalize;
  padding: 13px;
  border-radius: 6px;
}
</style>
