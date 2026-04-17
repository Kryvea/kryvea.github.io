<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #doc-after>
      <footer class="custom-footer">
        <p>
          Made with ❤️ for the security community by
          <a href="https://github.com/Alexius22">Alexius</a>,
          <a href="https://github.com/CharminDoge">CharminDoge</a> and
          <a href="https://github.com/JJJJJJack">Jack</a>
        </p>
      </footer>
    </template>
  </Layout>
</template>

<style scoped>
.custom-footer {
  margin-top: 1.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
  text-align: center;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.custom-footer a {
  color: var(--vp-c-brand);
  text-decoration: underline;
}
</style>
