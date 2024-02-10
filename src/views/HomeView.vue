<template>
  <div class="home">
    <PostList :posts="posts" />
  </div>
</template>

<script>
import { ref } from "vue";
import PostList from "../components/PostList.vue";

export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    let posts = ref([]);

    return { posts };
  },
};
</script>
