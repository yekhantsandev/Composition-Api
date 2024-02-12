<template>
  <h2>Post List</h2>
  <router-link :to="{ name: 'create' }" class="create">Create Post</router-link>
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post" />
  </div>
</template>

<script>
import SinglePost from "../components/SinglePost.vue";

export default {
  props: ["posts"],
  components: { SinglePost },
};
</script>

<style>
.create {
  text-decoration: none;
  font-size: 17px;
  font-weight: bold;
}
</style>
