<script lang="ts">
export default defineComponent({
    name: 'ClientOnly',
    setup: (props, { slots }) => {
      const mounted = ref(false)
      onMounted(() => (mounted.value = true))

      return (): VNode[] | undefined => {
        return mounted.value == null
          ? undefined
          : slots.default == null
            ? undefined
            : slots.default({})
      }
    }
  })
</script>
