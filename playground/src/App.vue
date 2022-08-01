<script setup lang="ts">
//自动注入ref
import { ref } from "vue";

defineTest({ name: "test" });

const msg = ref("hello");
</script>

<template>
	<div class="text-while">{{ msg }}</div>
	<HAHA msg="hello world" />
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
.text-while {
	color: #fff;
}
</style>
