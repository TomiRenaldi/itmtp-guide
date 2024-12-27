<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <Sidebar />
    <div class="md:ml-64 p-6">
      <router-view></router-view>
    </div>
  </div>
</template>