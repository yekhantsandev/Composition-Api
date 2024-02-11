<template>
  <div class="home">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length > 0">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";

export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    let { posts, error, load } = getPosts();
    load();

    return { posts, error };
  },
};
</script>
