<template>
    <div class="max-w-4xl mx-auto">
      <h1>Welcome to Our Documentation</h1>
      <p class="text-lg text-gray-600">
        This documentation will help you get started with our platform and understand its features.
      </p>
      <div class="grid md:grid-cols-2 gap-6 mt-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2>Getting Started</h2>
          <p>Learn the basics and get up and running quickly with our platform.</p>
          <router-link to="/guide" class="text-blue-600 hover:text-blue-800">Read more →</router-link>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2>Components</h2>
          <p>Explore our component library and learn how to use them effectively.</p>
          <router-link to="/components" class="text-blue-600 hover:text-blue-800">Read more →</router-link>
        </div>
      </div>
    </div>
  </template>