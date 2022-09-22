<template>
    <div class="flex items-center justify-between cursor-pointer"  @click="isOpen = !isOpen"> 
  <p 
    class="font-medium text-lg capitalize "
  >
    {{ title }}
    
  </p>
  <font-awesome-icon :icon="isOpen ?   'fa-arrow-up' :'fa-arrow-down' "  />
</div>
  <Divider />
  <div  :class="isOpen ? 'd-block' : 'hidden'">
            <slot></slot>
        </div>
</template>

<script>
import Divider from "./Divider.vue";
export default {
  data: () => {
    return {
      isOpen: false,
    };
  },
  name: "Accordion",
  props: {
    title: String,
  },
  components: { Divider },
};
</script>
