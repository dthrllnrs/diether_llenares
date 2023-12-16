<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 py-5">
        <!-- personal info -->
        <PersonalInfo />
      </div>
      <div class="col-12 col-md-6"></div>
    </div>
  </div>
</template>
<script>
import PersonalInfo from '@/components/PersonalInfo.vue';
export default {
  components: {
    PersonalInfo,
  },
}
</script>