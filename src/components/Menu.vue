<template>
    <div>
        <nav>
            <ul id="menu">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/numerospadre">
                        Números Parent Child 
                    </router-link>
                </li>                
                <li>
                    <router-link to="/deportes">
                        Deportes 
                    </router-link>
                </li>
                <li>
                    <router-link to="/tablamultiplicar">
                    Tabla multiplicar
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Menu"
}
</script>

<style scoped>
ul#menu li {
    display: inline;
    padding-right: 10px;
}
</style>