<script setup lang="ts">
defineProps({
  teacher: Object
})
</script>

<template>
  <div v-if="teacher" class="container mx-auto bg-white py-5 px-4">
    <div v-html="teacher.biography"></div>
    <div v-if="false" class="space-y-8">
      <!-- Biography Title -->
      <div class="text-center">
        <h2 class="text-2xl font-bold pb-2 mb-4">Biografiya</h2>
      </div>

      <!-- Education -->
      <div class="space-y-4">
        <div class="text-center font-bold">Ta’lim darajasi</div>
        <ul class="list-disc pl-6 space-y-2">
          <li>2005-2009 – Toshkent avtomobil-yo’llar instituti (bakalavriatura)</li>
          <li>2009-2011 – Toshkent avtomobil-yo’llar instituti (magistratura)</li>
          <li>
            2013-2016 – Toshkent avtomobil’ - yo’llar instituti avtomobil’ yo’llari va aerodromlarni
            loyihalash kafedrasi katta ilmiy xodim - izlanuvchisi
          </li>
        </ul>
      </div>

      <!-- Awards -->
      <div class="space-y-4">
        <div class="text-center font-bold">Mukofotlar</div>
        <ul class="list-disc pl-6 space-y-2">
          <li>
            2015 - "Eng faol transport xodimi" nominatsiyasida "Yilning eng faol yosh mutaxassisi"
            tanlovida "Vatanim rivojiga qo'shgan hissam" tanlovida qatnashgani uchun faxriy diplom
            va sertifikat bilan taqdirlandi.
          </li>
          <li>
            2020 - "BOBEK" Milliy harakati "loyihasida qatnashgani uchun" Eng yaxshi yosh olim -2020
            "medali va diplom bilan taqdirlandi.
          </li>
        </ul>
      </div>

      <!-- Professional Experience -->
      <div class="space-y-4">
        <div class="text-center font-bold">Kasbiy faoliyat bosqichlari</div>
        <ul class="list-disc pl-6 space-y-2">
          <li>
            2011-2013 - Toshkent avtomobil’ - yo’llar instituti avtomobil’ yo’llari va aerodromlar
            kafedrasi assistenti
          </li>
          <li>
            2016-2017 - Toshkent avtomobil’ yo’llarini loyihalash, qurish va ekspluatatsiyasi
            instituti avtomobil’ yo’llari va aerodromlarni loyihalash kafedrasi assistenti
          </li>
          <li>
            2017-2018 - Toshkent avtomobil’ yo’llarini loyihalash, qurish va ekapluatatsiyasi
            instituti avtomobil’ yo’llarini qidiruv va loyihalash kafedrasi assistenti
          </li>
          <li>
            2018-2020 - Toshkent avtomobil’ yo’llarini loyihalash, qurish va ekapluatatsiyasi
            instituti avtomobil’ yo’llarini qidiruv va loyihalash kafedrasi mudiri
          </li>
          <li>
            2020 – h. v.- Toshkent davlat transport universiteti avtomobil yo’llarni qidiruv va
            loyihalash kafedrasi mudiri, Professor, Texnika fanlari nomzodi.
          </li>
        </ul>
      </div>

      <!-- Professional Achievements and Projects -->
      <div class="space-y-4">
        <div class="text-center font-bold">Kasbiy yutuqlar va ijodiy loyihalar</div>
        <ul class="list-disc pl-6 space-y-2">
          <li>2014-2017 - "Innovatsion g'oyalar" respublika tanlovi g'olibi</li>
        </ul>
      </div>

      <!-- Training -->
      <div class="space-y-4">
        <div class="text-center font-bold">Malaka oshirish</div>
        <ul class="list-disc pl-6 space-y-2">
          <li>
            2012 - Toshkent axborot texnologiyalari universiteti «Axborot texnologiyalari»
            (O’zbekiston, Toshkent)
          </li>
          <li>
            2013 - Nizomiy nomidagi TDPI huzuridagi PKQT va ularning malakasini oshirish tarmoq
            markazi PEDAGOGIKA (Kasbiy ta’lim), (O’zbekiston, Toshkent)
          </li>
          <li>
            2018 - “Oliy ta’lim muassasalari boshqaruv kadrlari zaxirasini shakllantirish” bo’yicha
            O’zbekiston Respublikasi Oliy va o’rta maxsus ta’lim vazirligi kurslari (O’zbekiston,
            Toshkent)
          </li>
          <li>
            2019 - “КРЕДО-ДИАЛОГ” kompaniyasi mutaxassislari ishtirokida AvaYTHAda malaka oshirish
            kurslari (Rossiya, Moskva);
          </li>
          <li>
            2019 - BMTU qoshidagi KMOvaQT tarmoqlararo institutida malaka oshirish va kadrlarni
            qayta tayyorlash kurslari (Belorussiya, Minsk)
          </li>
          <li>
            2019 - “КРЕДО-ДИАЛОГ” kompaniyasida “Transport komminikatsiyalarini loyihalanshni
            zamonaviy avtomatlashgan texnologiyalari” mavzusida kurs (Belorussiya, Minsk)
          </li>
        </ul>
      </div>

      <!-- Personal Information -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h5 class="font-bold text-primary">F.I.O.:</h5>
          <p>Xudayqulov Rashidbek Mansurjonovich</p>
        </div>
        <div>
          <h5 class="font-bold text-primary">Tavallud kuni:</h5>
          <p></p>
        </div>
        <div>
          <h5 class="font-bold text-primary">Darajasi:</h5>
          <p>Texnika fanlari nomzodi</p>
        </div>
        <div>
          <h5 class="font-bold text-primary">Tajriba:</h5>
          <p>Yil</p>
        </div>
        <div>
          <h5 class="font-bold text-primary">Telefon:</h5>
          <p>+998909590208</p>
        </div>
        <div>
          <h5 class="font-bold text-primary">Email:</h5>
          <p>Rashidbek_19_87@mail.ru</p>
        </div>
        <div>
          <h5 class="font-bold text-primary">ORCID:</h5>
          <p></p>
        </div>
        <div>
          <h5 class="font-bold text-primary">Scopus ID:</h5>
          <p></p>
        </div>
        <div class="col-span-2">
          <h5 class="font-bold text-primary">Manzil:</h5>
          <p>Toshkent shahar Mirobod tumani Temiryo‘lchilar ko‘chasi 1-uy</p>
        </div>
      </div>
    </div>
  </div>
  <div v-if="false" class="container mx-auto bg-white pt-5 pb-3 px-4">
    <div class="space-y-4">
      <!-- Title and Placeholder Text -->
      <div class="text-center">
        <h2 class="text-2xl font-bold pb-2 mb-4">Ilmiy faoliyat</h2>
        <p class="text-center text-gray-600">Ma'lumotlar yo'q</p>
      </div>

      <div class="space-y-4">
        <div class="py-1">
          <h5 class="font-bold text-primary inline">h-indeks:</h5>
          10
        </div>
        <div class="py-1">
          <h5 class="font-bold text-primary inline">i10 indeksi:</h5>
          10
        </div>
        <div class="py-1">
          <h5 class="font-bold text-primary inline">Iqtibos indeksi:</h5>
          100
        </div>
      </div>

      <div class="text-center">
        <h2 class="text-2xl font-bold border-b-2 pb-2 mb-4">&nbsp;</h2>
      </div>

      <!-- Uncomment and adjust as needed for services -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="service-item mb-3">
          <h5 class="text-lg font-semibold mb-2">Web Design</h5>
          <p class="text-gray-600">
            Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem
            est amet labore
          </p>
        </div>
        <div class="service-item mb-3">
          <h5 class="text-lg font-semibold mb-2">Apps Development</h5>
          <p class="text-gray-600">
            Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem
            est amet labore
          </p>
        </div>
        <div class="service-item mb-3">
          <h5 class="text-lg font-semibold mb-2">SEO</h5>
          <p class="text-gray-600">
            Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem
            est amet labore
          </p>
        </div>
        <div class="service-item mb-3">
          <h5 class="text-lg font-semibold mb-2">Content Creating</h5>
          <p class="text-gray-600">
            Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem
            est amet labore
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  @apply font-font2 text-3xl;
}
</style>
