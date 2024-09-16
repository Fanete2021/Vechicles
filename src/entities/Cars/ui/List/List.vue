<script setup>
import Card from "../Card/Card.vue";
import { Input, Select } from "@/shared/ui/index.js";
import {computed, ref, watch} from "vue";
import Loupe from "@/shared/assets/icons/loupe.svg";
import {useStore} from "vuex";
import Paginator from "@/shared/ui/Paginator/Paginator.vue";

const store = useStore();

const cars = computed(() => store.state.cars.data);
const meta = computed(() => store.state.cars.meta);

const searchedValue = ref("");
const selectedVehiclesPerPage = ref(9);
const currentPage = ref(1);
const allPage = computed(() => {
  return Math.ceil((meta.value.total || 0) / selectedVehiclesPerPage.value);
});

const optionsSelectPerPage = Array.from({ length: 9 }, (_, index) => index + 1);

let debounceTimeout;
const debounceDelay = 300;

const fetchCars = (search, perPage, page) => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    store.dispatch('cars/fetchCars', { search, perPage, page });
  }, debounceDelay);
};

watch([searchedValue, selectedVehiclesPerPage], ([newSearch, newPerPage]) => {
  currentPage.value = 1;
  fetchCars(newSearch, newPerPage, 1);
});

watch([currentPage], ([newCurrentPage]) => {
  fetchCars(searchedValue.value, selectedVehiclesPerPage.value, newCurrentPage);
});

</script>

<template>
  <div class="List">
    <div class="List__header">
      <Input
          v-model="searchedValue"
          :icon="Loupe"
          placeholder="Search VIN"
      />

      <div class="List__select">
        <span class="List__select__description">Select vehicles per page:</span>

        <Select
          :options="optionsSelectPerPage"
          v-model="selectedVehiclesPerPage"
        />
      </div>

      <div class="List__add">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C12.5523 4 13 4.44772 13 5V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V5C11 4.44772 11.4477 4 12 4Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" fill="white"/>
        </svg>

        <span>
          Add Vechicle
        </span>
      </div>
    </div>

    <div class="List__cards">
      <Card
          v-for="car in cars"
          :key="car.id"
          :car="car"
      />
    </div>

    <div class="List__footer">
      <div class="List__footer__vechiclesPerPage">
        <template v-if="selectedVehiclesPerPage <= meta.total">
          Showing {{ selectedVehiclesPerPage }} of {{ meta.total }}
        </template>
        <template v-else>
          Showing {{ meta.total }} of {{ meta.total }}
        </template>
      </div>

      <div class="List__footer__paginator">
        <Paginator
            v-model="currentPage"
            :allPage="allPage"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.List__header {
  display: flex;

  input {
    width: 354px;
  }

  .List__select {
    margin-left: 32px;
    display: flex;
    align-items: center;
    justify-content: center;

    &__description {
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: #293148;
      margin-right: 16px;
    }
  }

  .List__add {
    margin-left: auto;
    background: #D90E32;
    box-shadow: 0px 8px 24px 0px #D90E321F;
    border-radius: 10px;
    padding: 9px 18px;
    height: 42px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 1px;
    cursor: pointer;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-right: 16px;
    }
  }
}

.List__cards {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 32px;
}

.List__footer {
  display: flex;
  align-items: center;
  margin-top: 32px;

  &__vechiclesPerPage {
    font-size: 16px;
    line-height: 22px;
    color: #293148CC;
  }

  &__paginator {
    margin-left: auto;
  }
}
</style>