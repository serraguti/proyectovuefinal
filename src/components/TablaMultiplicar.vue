<template>
    <div>
        <h1>Tabla multiplicar</h1>
        <hr/>
        <label>Introduzca número: </label>
        <input type="text" v-model="numero"/><br/>
        <button v-on:click="mostrarTabla()">
            Tabla multiplicar
        </button>
        <table border="1">
            <thead>
                <tr>
                    <th>Operación</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody v-html="tabla">{{tabla}}</tbody>
        </table>
        <hr/>
        <label>Número 1: </label>
        <input type="text" v-model="numero1"/><br/>
        <label>Número 2: </label>
        <input type="text" v-model="numero2"/><br/>
        <button @click="sumarNumeros()">
            Sumar números
        </button>
        <h1 v-html="mensaje" style="color:blue">{{mensaje}}</h1>
    </div>
</template>

<script>
export default {
    name: "TablaMultiplicar",
    methods: {
        sumarNumeros() {
            var suma = parseInt(this.numero1) +
            parseInt(this.numero2);
            this.mensaje = "La suma es <span style='color:red'>" 
            + suma + "</span>";
        }, mostrarTabla() {
            this.tabla = "";
            for (var i = 1; i <=10; i++){
                var op = parseInt(this.numero) * i;
                this.tabla += "<tr>";
                this.tabla += "<td>" + this.numero + " * "
                + i + "</td>";
                this.tabla += "<td>" + op + "</td>";
                this.tabla += "</tr>";
            }
        }
    },
    data() {
        return {
            numero1: 0,
            numero2: 0, 
            mensaje: "",
            numero: 0,
            tabla: ""
        }
    }
}
</script>
