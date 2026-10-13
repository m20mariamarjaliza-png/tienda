<template>
  <svg viewBox="0 0 200 200" class="figure-art" role="img" :aria-label="nombre">
    <defs>
      <linearGradient :id="gradId" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" :stop-color="color1" />
        <stop offset="100%" :stop-color="color2" />
      </linearGradient>
    </defs>

    <circle cx="100" cy="100" r="92" :fill="`url(#${gradId})`" opacity="0.18" />

    <!-- Silueta simplificada tipo figura de acción -->
    <g :fill="color1">
      <circle cx="100" cy="66" r="26" />
      <path d="M62 118 Q100 96 138 118 L132 168 Q100 180 68 168 Z" />
      <rect x="52" y="112" width="14" height="46" rx="7" />
      <rect x="134" y="112" width="14" height="46" rx="7" />
      <rect x="80" y="160" width="16" height="30" rx="8" />
      <rect x="104" y="160" width="16" height="30" rx="8" />
    </g>

    <!-- Accesorio distintivo -->
    <g :fill="color2" v-if="accesorio === 'espada'">
      <rect x="150" y="40" width="8" height="90" rx="4" transform="rotate(25 154 85)" />
    </g>
    <g :fill="color2" v-else-if="accesorio === 'katana'">
      <rect x="145" y="50" width="6" height="100" rx="3" transform="rotate(18 148 100)" />
    </g>
    <g :fill="color2" v-else-if="accesorio === 'estrella'">
      <path
        d="M150 40 L156 56 L173 56 L159 66 L164 83 L150 73 L136 83 L141 66 L127 56 L144 56 Z"
      />
    </g>
    <g :fill="color2" v-else-if="accesorio === 'alas'">
      <path d="M60 90 Q30 70 20 100 Q45 100 60 118 Z" />
      <path d="M140 90 Q170 70 180 100 Q155 100 140 118 Z" />
    </g>
    <g :fill="color2" v-else-if="accesorio === 'luna'">
      <path d="M158 44 A22 22 0 1 0 158 84 A17 17 0 1 1 158 44 Z" />
    </g>

    <text
      x="100"
      y="192"
      text-anchor="middle"
      class="figure-art__badge"
      :fill="color1"
    >
      {{ escala }}
    </text>
  </svg>
</template>

<script setup>
defineProps({
  nombre: { type: String, required: true },
  color1: { type: String, required: true },
  color2: { type: String, required: true },
  accesorio: { type: String, default: '' },
  escala: { type: String, default: '' }
})

// id único por instancia para que el degradado no choque entre tarjetas
const gradId = `grad-${Math.random().toString(36).slice(2, 9)}`
</script>

<style scoped>
.figure-art {
  width: 100%;
  height: 100%;
  display: block;
}

.figure-art__badge {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  opacity: 0.75;
}
</style>
