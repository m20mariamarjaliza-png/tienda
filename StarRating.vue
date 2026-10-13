<template>
  <span class="rating" :aria-label="`Valoración ${rating} de 5`">
    <span class="rating__stars">
      <span v-for="n in 5" :key="n" class="rating__star" :class="{ 'rating__star--on': n <= Math.round(rating) }">★</span>
    </span>
    <span class="rating__num">{{ rating.toFixed(1) }}</span>
    <span v-if="reseñas" class="rating__count">({{ reseñas }})</span>
  </span>
</template>

<script setup>
defineProps({
  rating: { type: Number, required: true },
  reseñas: { type: Number, default: 0 }
})
</script>

<style scoped>
.rating {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.8rem;
  color: #6b7280;
}

.rating__stars {
  display: inline-flex;
}

.rating__star {
  color: #d1d5db;
  font-size: 0.9rem;
  line-height: 1;
}

.rating__star--on {
  color: #f59e0b;
}

.rating__num {
  font-weight: 600;
  color: #374151;
}
</style>
