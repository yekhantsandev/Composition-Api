<template>
  <h1>Create</h1>
  <form @submit.prevent="handleAddPost">
    <label>Title</label>
    <input type="text" v-model="title" required />

    <label>Body</label>
    <textarea v-model="body" required></textarea>

    <label>Tags(hit enter to add a tag)</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="handleKeyDown" />
    <div v-for="tag in tags" :key="tag" class="pill">
      <h4>{{ tag }}</h4>
    </div>

    <button>add post</button>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let title = ref("");
    let body = ref("");
    let tag = ref("");
    let tags = ref([]);

    let handleKeyDown = () => {
      if (!tags.value.includes(tag.value)) {
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    let handleAddPost = async () => {
      let response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: title.value,
          body: body.value,
          tags: tags.value,
        }),
      });
    };

    return { title, body, tag, handleKeyDown, tags, handleAddPost };
  },
};
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
  padding: 10px;
}

input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #eee;
}

textarea {
  height: 150px;
}

label {
  display: inline-block;
  margin-top: 30px;
  margin-bottom: 10px;
  position: relative;
  font-size: 20px;
  color: white;
}

label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}

button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}

.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
