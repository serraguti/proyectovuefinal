<template>
    <div>
        <h1 style="color:red">La suma es {{suma}}</h1>
        <button @click="insertarHijo()">
            Nuevo número
        </button>
        <div v-for="(num, index) in numeros" :key="index">
            <NumeroHijo :numero="num"
            v-on:sumarNumerosParent="sumarNumerosParent"/>
        </div>
    </div>
</template>

<script>
import NumeroHijo from './NumeroHijo.vue';

export default {
    name: "NumerosPadre",
    methods: {
        sumarNumerosParent(valor) {
            this.suma += valor;
        },
        insertarHijo(){
            var aleat = Math.round((Math.random() * 99) + 1);
            this.numeros.push(aleat);
        }
    },
    components: {
        NumeroHijo,
    },
    data() {
        return {
            numeros: [4, 19],
            suma: 0
        }
    }
}
</script>