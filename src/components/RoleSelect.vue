<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'RoleSelect',
  props: {
    roles: {
      type: Array as () => any,
      required: true
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const selectedRole = ref(props.modelValue)

    watch(
      () => props.modelValue,
      (newValue) => {
        selectedRole.value = newValue
      }
    )

    const emitRole = () => {
      emit('update:modelValue', selectedRole.value)
    }

    return {
      selectedRole,
      emitRole
    }
  }
})
</script>

<template>
  <div class="flex w-[400px] flex-col max-xl:w-full">
    <label for="role" class="mb-2 block font-medium">Fakultet nomi</label>
    <select
      v-model="selectedRole"
      @change="emitRole"
      class="w-full rounded-md border border-[#e0e0e0] bg-transparent px-4 py-3 text-base outline-none focus:border-primary focus:shadow-md"
    >
      <option disabled value="">Select teacher role</option>
      <option v-for="role in roles" :key="role" :value="role">
        {{ role.name }}
      </option>
    </select>
  </div>
</template>
