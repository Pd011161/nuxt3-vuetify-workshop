<script lang="ts" setup>
    useHead({
        title: 'บล็อก',
        meta: [
            { 
            name: 'keywords', 
            content: 'บล็อก, Nuxt 3, Backend'
            },
            {
            name: 'Description',
            content: 'บล็อก Nuxt 3,  IT Genius Engineering'
            }
        ]
    })
</script>

<template>
    <div class="mb-5">

        <div class="wrapper">
            <v-row justify="center">
            <v-col cols="12" sm="10" md="9" lg="7">
                <div class="text-center">
                <h2 class="ui-title font-weight-bold text-white mb-4">บล็อกล่าสุด</h2>
                <p class="text-white">
                    You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time
                </p>
                </div>
            </v-col>
            </v-row>
        </div>

        <v-container>
        <v-row class="mt-13" justify="center">
          <v-col cols="12" md="6" lg="4">
            <v-card elevation="0" class="blog-card overflow-hidden mb-5">
              <div class="position-relative mb-5">
                <a href="#">
                  <v-img src="/images/blog/img1.jpg"
                    alt="blog"
                    class="blog-img"
                  />
                </a>
                <div class="date-badge bg-info-grediant">
                  Oct <span>23</span>
                </div>
              </div>
              <div class="pa-5">
                <a
                  href="#"
                  class="
                    blog-title
                    text-decoration-none
                    font-weight-medium font-18
                  "
                  >Learn from small things to create something bigger thing in blog.</a
                >
                <p class="mt-10 mb-10">
                  Business Park, Opp. Corns Sam Restaurant, New Yoark, US
                </p>
                <a
                  href="#"
                  class="
                    text-themecolor
                    linking
                    text-decoration-none
                    d-flex
                    align-center
                  "
                >
                  อ่านต่อ  &nbsp; <i class="mdi mdi-arrow-right"></i>
                </a>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <v-card elevation="0" class="blog-card overflow-hidden mb-5">
              <div class="position-relative mb-5">
                <a href="#">
                  <v-img src="/images/blog/img2.jpg"
                    alt="blog"
                    class="blog-img"
                  />
                </a>
                <div class="date-badge bg-info-grediant">
                  Oct <span>23</span>
                </div>
              </div>
              <div class="pa-5">
                <a
                  href="#"
                  class="
                    blog-title
                    text-decoration-none
                    font-weight-medium 
                    font-18
                  "
                  >New Seminar on Newest Food Recipe from World’s Best</a
                >
                <p class="mt-10 mb-10">
                  Business Park, Opp. Corns Sam Restaurant, New Yoark, US
                </p>
                <a
                  href="#"
                  class="
                    text-themecolor
                    linking
                    text-decoration-none
                    d-flex
                    align-center
                  "
                >
                  อ่านต่อ  &nbsp;<i class="mdi mdi-arrow-right"></i>
                </a>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <v-card elevation="0" class="blog-card overflow-hidden mb-5">
              <div class="position-relative mb-5">
                <a href="#">
                  <v-img src="/images/blog/img3.jpg"
                    alt="blog"
                    class="blog-img"
                  />
                </a>
                <div class="date-badge bg-info-grediant">
                  Oct <span>23</span>
                </div>
              </div>
              <div class="pa-5">
                <a
                  href="#"
                  class="
                    blog-title
                    text-decoration-none
                    font-weight-medium 
                    font-18
                  "
                  >You should have eagle’s eye on new trends and techonogies</a
                >
                <p class="mt-10 mb-10">
                  Business Park, Opp. Corns Sam Restaurant, New Yoark, US
                </p>
                <a
                  href="#"
                  class="
                    text-themecolor
                    linking
                    text-decoration-none
                    d-flex
                    align-center
                  "
                >
                  อ่านต่อ  &nbsp; <i class="mdi mdi-arrow-right"></i>
                </a>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

    </div>
</template>

<style scoped>
    .ui-title {
        font-size: 32px;
    }

    .font-18{
        font-size: 18px;
    }

    .wrapper {
        background: #2196F3;
        padding: 40px 0 20px;
        min-height: 400px;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    .blog-card {
        transition: 0.2s ease-in;
    }

    .blog-card:hover {
        transform: translateY(-10px);
    }

    .blog-title {
        color: #263238 !important;
        line-height: 22px;
        font-weight: bold;
    }

    .blog-title:hover {
        color: #607df9 !important;
    }


</style>