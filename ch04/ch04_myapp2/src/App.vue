<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Vue 3 Events Example </h1>
      <EventComp />
      <InlineEventComp />
      <EventHandleComp />
      <EventObjectComp />
      <EventPropComp />
      <EventModifierComp />
    </div>
  </section>
</template>

<!--template를 먼저 작성해야지 Script가 자동으로 import 됨.-->

<script>
import EventComp from "@/components/EventComp.vue";
import InlineEventComp from "@/components/InlineEventComp.vue";
import EventHandleComp from "@/components/EventHandleComp.vue";
import EventObjectComp from "@/components/EventObjectComp.vue";
import EventPropComp from "@/components/EventPropComp.vue";
import EventModifierComp from "@/components/EventModifierComp.vue";

export default {
  components: {
    EventComp,
    EventModifierComp,
    EventPropComp,
    EventObjectComp,
    EventHandleComp,
    InlineEventComp,
  },
} ;
</script>

