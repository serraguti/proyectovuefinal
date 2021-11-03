<template>
    <div>
        <h1 style="color:blue">Numero Hijo: {{numero}}</h1>
        <button @click="sumarNumerosHijo()">
            Sumar {{numero}}
        </button>
    </div>
</template>

<script>
export default {
    name: "NumeroHijo",
    props: ["numero"],
    methods: {
        sumarNumerosHijo() {
            this.$emit("sumarNumerosParent", this.numero);
        }
    }
}
</script>