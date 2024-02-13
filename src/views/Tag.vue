<template>
  <div v-if="error">
    {{ error.message }}
  </div>
  <div v-if="posts.length">
    <PostList :posts="filteredPosts" />
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import getPosts from "../composables/getPosts";
import PostList from "../components/PostList.vue";
import { computed } from "vue";
export default {
  props: ["tag"],
  components: { PostList },
  setup(props) {
    let { posts, error, load } = getPosts();
    load();
    let filteredPosts = computed(() => {
      return posts.value.filter((post) => {
        return post.tags.includes(props.tag);
      });
    });

    return { posts, error, filteredPosts };
  },
};
</script>

<style></style>
