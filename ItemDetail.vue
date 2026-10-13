<template>
  <section v-if="item" class="detalle">
    <button class="volver" @click="$router.back()">← Volver al catálogo</button>

    <div class="detalle__grid">
      <div class="detalle__art" :style="{ background: `linear-gradient(160deg, ${item.color1}14, ${item.color2}14)` }">
        <span v-if="item.nuevo" class="detalle__badge">Nuevo</span>
        <img
          v-if="item.imagen && !imgError"
          :src="item.imagen"
          :alt="item.nombre"
          class="detalle__foto"
          @error="imgError = true"
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

      <div class="detalle__info">
        <span class="detalle__categoria">{{ item.categoria }}</span>
        <h1>{{ item.nombre }}</h1>
        <StarRating :rating="item.rating" :reseñas="item.reseñas" />

        <span class="detalle__precio">{{ formatearPrecio(item.precio) }}</span>
        <p class="detalle__stock" :class="{ 'detalle__stock--bajo': item.stock <= 3 }">
          {{ item.stock <= 3 ? `Solo quedan ${item.stock} unidades` : 'En stock' }}
        </p>

        <p class="detalle__desc">{{ item.descripcion }}</p>

        <table class="detalle__specs">
          <tbody>
            <tr>
              <th>Escala</th>
              <td>{{ item.escala }}</td>
            </tr>
            <tr>
              <th>Altura aprox.</th>
              <td>{{ item.altura }}</td>
            </tr>
            <tr>
              <th>Material</th>
              <td>{{ item.material }}</td>
            </tr>
          </tbody>
        </table>

        <button class="detalle__comprar" type="button">Añadir al carrito</button>
      </div>
    </div>
  </section>

  <section v-else class="no-encontrado">
    <p>No se encontró el artículo.</p>
    <router-link to="/">Volver al catálogo</router-link>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import items from '../data/items.js'
import FigureArt from '../components/FigureArt.vue'
import StarRating from '../components/StarRating.vue'

const props = defineProps({
  id: {
    type: [String, Number],
    required: true
  }
})

const item = computed(() => items.find((i) => i.id === Number(props.id)))
// Si la foto no carga (no existe todavía en public/images), vuelve a la ilustración.
const imgError = ref(false)

function formatearPrecio(precio) {
  return precio.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })
}
</script>

<style scoped>
.volver {
  background: none;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 0.45rem 0.9rem;
  cursor: pointer;
  font-size: 0.88rem;
  margin-bottom: 1.5rem;
  color: #374151;
}

.volver:hover {
  background: #f3f4f6;
}

.detalle__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: start;
}

.detalle__art {
  position: relative;
  border-radius: 14px;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.detalle__art :deep(.figure-art) {
  max-width: 240px;
}

.detalle__foto {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.detalle__badge {
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  background: #111827;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  text-transform: uppercase;
}

.detalle__categoria {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: #b91c1c;
}

.detalle__info h1 {
  margin: 0.2rem 0 0.5rem;
  font-size: 1.6rem;
}

.detalle__precio {
  display: block;
  font-weight: 700;
  font-size: 1.4rem;
  color: #111827;
  margin: 0.7rem 0 0.15rem;
}

.detalle__stock {
  font-size: 0.85rem;
  color: #16a34a;
  margin: 0 0 1rem;
}

.detalle__stock--bajo {
  color: #b91c1c;
  font-weight: 600;
}

.detalle__desc {
  line-height: 1.6;
  color: #374151;
  margin-bottom: 1.25rem;
}

.detalle__specs {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
}

.detalle__specs th,
.detalle__specs td {
  text-align: left;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e5e7eb;
}

.detalle__specs th {
  width: 40%;
  color: #6b7280;
  font-weight: 600;
}

.detalle__comprar {
  background: #b91c1c;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  width: 100%;
}

.detalle__comprar:hover {
  background: #991b1b;
}

.no-encontrado {
  text-align: center;
  padding: 3rem 1rem;
}

/* --- Responsive --- */
@media (max-width: 720px) {
  .detalle__grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .detalle__art {
    max-width: 320px;
    margin: 0 auto;
  }
}
</style>
