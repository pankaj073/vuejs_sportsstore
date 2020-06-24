<template>
	<router-view />
</template>

<script>
	import { mapActions } from "vuex";

	export default {
		name: "App",
		methods: {
			...mapActions(["getData"])
		},
		created() {
			this.getData();
		}
	};
</script>
