<template>
  <div>
    <div class="setting-item">
      <label>
        <input type="checkbox" v-model="autoAddEnabled" @change="toggleAutoAdd">
        Auto-add new apps to target.txt
      </label>
    </div>
  </div>
</template>

<script setup>
const autoAddEnabled = ref(false)

onMounted(async () => {
  const status = await $fetch('/api/getAutoAddStatus')
  autoAddEnabled.value = status.enabled
})

const toggleAutoAdd = async () => {
  await $fetch('/api/toggleAutoAdd', {
    method: 'POST',
    body: { enabled: autoAddEnabled.value }
  })
}
</script>
