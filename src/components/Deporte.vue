<template>
    <div>
        <h1 style="color:blue">{{deporte}}</h1>
        <button @click="seleccionarFavorito(deporte)">
            Seleccionar favorito
        </button>
    </div>
</template>

<script>
export default {
    name: "Deporte",
    props: ["deporte"],
    mounted() {
        //console.log(this.deporte);
    }, methods: {
        seleccionarFavorito(depor) {
            this.$emit("seleccionarFavoritoParent", depor);
        }
    }, data() {
        return {}
    }
}
</script>