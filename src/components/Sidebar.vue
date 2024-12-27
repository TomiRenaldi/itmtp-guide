<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleSidebar = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div>
    <!-- Mobile menu button -->
    <button 
      @click="toggleSidebar"
      class="md:hidden fixed top-4 left-4 z-20 p-2 rounded-md bg-gray-800 text-white"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Sidebar -->
    <div 
      :class="[isOpen ? 'translate-x-0' : '-translate-x-full', 'md:translate-x-0']"
      class="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transition-transform duration-200 ease-in-out z-10"
    >
      <div class="p-6">
        <h2 class="text-xl font-bold mb-6">Documentation</h2>
        <nav class="space-y-2">
          <router-link 
            to="/" 
            class="block px-4 py-2 rounded hover:bg-gray-700"
            active-class="bg-gray-700"
          >
            Home
          </router-link>
          <router-link 
            to="/guide" 
            class="block px-4 py-2 rounded hover:bg-gray-700"
            active-class="bg-gray-700"
          >
            Guide
          </router-link>
          <router-link 
            to="/components" 
            class="block px-4 py-2 rounded hover:bg-gray-700"
            active-class="bg-gray-700"
          >
            Components
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>