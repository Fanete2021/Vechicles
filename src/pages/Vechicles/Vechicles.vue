<script setup>
import {Sidebar, Profile, LanguageSwitcher} from "@/widgets/index.js";
import {computed, onMounted} from "vue";
import { ListCars }  from "@/entities/Cars/index.js";
import { useStore } from "vuex";

const store = useStore();

const carsMeta = computed(() => store.state.cars.meta);

onMounted(() => {
  store.dispatch("cars/fetchCars");
})
</script>

<template>
  <div class="Vechicles">
    <Sidebar />

    <div class="content">
      <div class="header">
          <div class="left">
            <h1 class="header__title">Vechicles</h1>

            <div class="header__list-count">
              {{ carsMeta.total || 0  }}
            </div>
          </div>

         <div class="right">
           <div class="header__plus">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C12.5523 4 13 4.44772 13 5V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V5C11 4.44772 11.4477 4 12 4Z" fill="#E86E84"/>
               <path fill-rule="evenodd" clip-rule="evenodd" d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" fill="#E86E84"/>
             </svg>
           </div>

           <div class="header__profile">
             <Profile />
           </div>

           <LanguageSwitcher />
         </div>
       </div>

      <div class="list">
        <ListCars />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Vechicles {
  display: flex;
  width: 100%;
}

.content {
  width: 100%;
  height: 100%;
}

.header {
  padding: 34px 30px 30px 30px;
  display: flex;
  border-bottom: 1px solid #E4E4E4;

  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
  }

  .header__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #293148;
  }

  .header__list-count {
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 14px;
    color: #293148CC;
    background: #F3F6F8;
    border-radius: 6px;
  }

  .right {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }

  .header__plus {
    border: 1px solid #E86E84;
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    cursor: pointer;
    user-select: none;
  }

  .header__profile {
    margin-left: 8px;
  }
}

.list {
  padding: 36px 32px 45px 30px;
}
</style>