<script setup>
import MoreHorizontal from "@/shared/assets/icons/more_horizontal.svg";
import Check from "@/shared/assets/icons/check.svg";

const props = defineProps({
  car: Object
})

const uploadsMax = 30;

</script>

<template>
  <div class="Card">
    <img
      :src="MoreHorizontal"
      width="24px"
      height="24px"
      class="more"
    />

    <img
        :src="(car.photo && car.photo.url) || car.placeholder"
        class="photo"
        alt="photo"
        width="260px"
        height="135px"
    />

    <div class="name">
      {{ car.vehicle_name || "No name " }}
    </div>

    <div class="vin">
      WDB {{ car.vin }}
    </div>

    <div class="separator" />

    <div class="footer">
      <div
          class="uploads"
          :class="{'uploads-max': car.uploads === uploadsMax }"
      >
        <img
          v-if="car.uploads >= uploadsMax"
          width="16px"
          height="16px"
          :src="Check"
        />

        <span>{{ car.uploads }} / {{ uploadsMax }}</span>
      </div>

      <div class="time">
        3 days left
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Card {
  background: #F3F6F8;
  border-radius: 10px;
  padding: 40px 24px 16px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 354px;
  height: 335px;
}

.more {
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
}

.photo {
  width: 260px;
  height: 135px;
  margin-left: 23px;
  margin-right: 8px;
}

.name {
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: #293148;
  margin-top: 24px;
}

.vin {
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.3px;
  color: #29314899;
  margin-top: 12px;
}

.separator {
  width: 100%;
  border-top: 1px solid #E4E4E4;
  margin-top: 18px;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
}

.uploads {
  border-radius: 6px;
  padding: 4px 14px;
  background: #EDEDED;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #293148CC;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.uploads-max {
  background: #E4F5DD;
  color: #7FC75E;
}

.time {
  color: #29314899;
  font-weight: 500;
  font-size: 15px;
  line-height: 16px;
  margin-left: auto;
}
</style>