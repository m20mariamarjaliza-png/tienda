<template>
  <section class="about">
    <h1>Sobre Marja</h1>
    <p>
      Marja nació de una colección personal que se quedó sin espacio en la
      estantería. Empezamos importando piezas para uso propio y, poco a poco,
      se convirtió en una tienda dedicada a figuras de anime y coleccionables
      de calidad.
    </p>
    <p>
      Trabajamos con un número reducido de referencias para poder revisar cada
      pieza antes de enviarla: pintura, articulaciones y embalaje. Priorizamos
      ediciones bien fabricadas frente a catálogos enormes de baja calidad.
    </p>

    <div class="about__grid">
      <div class="about__item">
        <h3>Revisión pieza a pieza</h3>
        <p>Cada figura se inspecciona antes de salir del almacén.</p>
      </div>
      <div class="about__item">
        <h3>Envío protegido</h3>
        <p>Embalaje reforzado para evitar daños en el transporte.</p>
      </div>
      <div class="about__item">
        <h3>Atención directa</h3>
        <p>Dudas sobre stock o reservas, respondidas por el mismo equipo.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  max-width: 720px;
}

.about p {
  line-height: 1.6;
  color: #374151;
}

.about__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-top: 1.75rem;
}

.about__item {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 1rem 1.1rem;
}

.about__item h3 {
  font-size: 0.95rem;
  margin: 0 0 0.35rem;
}

.about__item p {
  font-size: 0.85rem;
  margin: 0;
}

@media (max-width: 640px) {
  .about__grid {
    grid-template-columns: 1fr;
  }
}
</style>
