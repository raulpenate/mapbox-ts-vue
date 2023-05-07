import { computed, defineComponent, ref } from 'vue'
import SearchResult from '@/components/search-results/SearchResults.vue'
import { usePlacesStore } from '@/composables'

export default defineComponent({
  name: 'SearchBar',
  components: { SearchResult },
  setup() {
    const debounceTimeout = ref()
    const debouncedValued = ref('')

    const { searchPlacesByTerm } = usePlacesStore()

    return {
      debouncedValued,

      searchTerm: computed({
        get() {
          return debouncedValued.value
        },
        set(val: string) {
          if (debounceTimeout.value) clearTimeout(debounceTimeout.value)

          debounceTimeout.value = setTimeout(() => {
            debouncedValued.value = val
            searchPlacesByTerm(val)
          }, 500)
        },
      }),
    }
  },
})
