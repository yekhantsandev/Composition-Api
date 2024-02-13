<template>
  <div class="tag">
    <div v-if="error">
    {{ error.message }}
  </div>
  <div v-if="posts.length" class="layout">
    <div>
      <PostList :posts="filteredPosts" />
    </div>
    <div>
      <TagCloud />
    </div>
  </div>
  <div v-else>
    <Spinner />
  </div>
  </div>
</template>

<script>
import getPosts from "../composables/getPosts";
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue"
import Spinner from "../components/Spinner.vue";
import { computed } from "vue";

export default {
  props: ["tag"],
  components: { PostList, TagCloud, Spinner },
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

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
