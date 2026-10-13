<template>
  <section>
    <div class="hero">
      <div class="hero__text">
        <span class="hero__kicker">Nueva colección</span>
        <h1>Figuras de anime para tu estantería</h1>
        <p>
          Piezas coleccionables con acabados pintados a mano, escalas fieles
          y ediciones limitadas numeradas.
        </p>
      </div>
    </div>

    <div class="filtros">
      <button
        v-for="cat in categorias"
        :key="cat"
        class="filtro"
        :class="{ 'filtro--activo': categoriaActiva === cat }"
        @click="categoriaActiva = cat"
      >
        {{ cat }}
      </button>
    </div>

    <div class="grid">
      <router-link
        v-for="item in itemsFiltrados"
        :key="item.id"
        :to="{ name: 'item-detail', params: { id: item.id } }"
        class="card"
      >
        <div class="card__art" :style="{ background: `linear-gradient(160deg, ${item.color1}14, ${item.color2}14)` }">
          <span v-if="item.nuevo" class="card__badge">Nuevo</span>
          <span v-if="item.stock <= 3" class="card__badge card__badge--stock">¡Últimas {{ item.stock }}!</span>
          <img
            v-if="item.imagen && !imgErrors[item.id]"
            :src="item.imagen"
            :alt="item.nombre"
            class="card__foto"
            @error="imgErrors[item.id] = true"
          />
          <FigureArt
            v-else
            :nombre="item.nombre"
            :color1="item.color1"
            :color2="item.color2"
            :accesorio="item.accesorio"
            :escala="item.escala"
          />
        </div>

        <div class="card__body">
          <span class="card__categoria">{{ item.categoria }}</span>
          <h2 class="card__nombre">{{ item.nombre }}</h2>
          <p class="card__desc">{{ item.descripcionCorta }}</p>
          <StarRating :rating="item.rating" :reseñas="item.reseñas" />
          <span class="card__precio">{{ formatearPrecio(item.precio) }}</span>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import items from '../data/items.js'
import FigureArt from '../components/FigureArt.vue'
import StarRating from '../components/StarRating.vue'

const categoriaActiva = ref('Todas')
// Si una foto no carga (no existe todavía en public/images), se marca aquí
// y la tarjeta vuelve a mostrar la ilustración de respaldo automáticamente.
const imgErrors = reactive({})

const categorias = computed(() => [
  'Todas',
  ...new Set(items.map((i) => i.categoria))
])

const itemsFiltrados = computed(() =>
  categoriaActiva.value === 'Todas'
    ? items
    : items.filter((i) => i.categoria === categoriaActiva.value)
)

function formatearPrecio(precio) {
  return precio.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })
}
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #111827, #1f2937);
  border-radius: 16px;
  padding: 2.25rem 1.75rem;
  color: #fff;
  margin-bottom: 1.5rem;
}

.hero__kicker {
  display: inline-block;
  background: #b91c1c;
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  margin-bottom: 0.75rem;
}

.hero h1 {
  margin: 0 0 0.6rem;
  font-size: 1.7rem;
  max-width: 26ch;
}

.hero p {
  margin: 0;
  color: #d1d5db;
  max-width: 42ch;
  line-height: 1.5;
}

.filtros {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.filtro {
  border: 1px solid #d1d5db;
  background: #fff;
  border-radius: 999px;
  padding: 0.4rem 0.9rem;
  font-size: 0.85rem;
  cursor: pointer;
  color: #374151;
  transition: background 0.15s ease, color 0.15s ease;
}

.filtro:hover {
  background: #f3f4f6;
}

.filtro--activo {
  background: #111827;
  color: #fff;
  border-color: #111827;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1.25rem;
}

.card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}

.card__art {
  position: relative;
  aspect-ratio: 4 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
}

.card__art :deep(.figure-art) {
  max-width: 130px;
}

.card__foto {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.card__badge {
  position: absolute;
  top: 0.6rem;
  left: 0.6rem;
  background: #111827;
  color: #fff;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 0.2rem 0.55rem;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.card__badge--stock {
  left: auto;
  right: 0.6rem;
  background: #b91c1c;
}

.card__body {
  padding: 0.9rem 1rem 1.1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.card__categoria {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: #b91c1c;
}

.card__nombre {
  font-size: 1.05rem;
  margin: 0;
}

.card__desc {
  font-size: 0.88rem;
  color: #6b7280;
  margin: 0 0 0.15rem;
}

.card__precio {
  font-weight: 700;
  color: #111827;
  margin-top: 0.3rem;
  font-size: 1.05rem;
}

@media (max-width: 640px) {
  .hero {
    padding: 1.75rem 1.25rem;
  }

  .hero h1 {
    font-size: 1.4rem;
  }
}
</style>
