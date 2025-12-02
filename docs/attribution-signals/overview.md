<script setup>
import { useFilter } from '../.vitepress/useFilter'

const { filteredItems } = useFilter()
</script>

# Attribution Signals

Attribution signals are the specific elements that make Wikimedia’s role as a source visible when its content is reused outside our projects. Each signal provides either a direct acknowledgment of origin, or additional context that helps users evaluate and engage with the knowledge they encounter.

The signals included in this framework were selected because they serve one or more of the following purposes:

- Ensure compliance with licensing and attribution requirements.
- Strengthen trust by making visible the processes and community behind Wikimedia content.
- Provide transparency about how current or widely used the knowledge is.
- Support the long-term growth of the free knowledge ecosystem by guiding users back to contribute.



<br>
<div>
  <FilterButtons />
  
  <GridLayout>
    <Card v-for="item in filteredItems" :key="item.id" :title="item.name" :description="item.description" :url="item.url" />
  </GridLayout>
</div>
