<script setup>
import { scenarios } from './.vitepress/data'
</script>

# Wikimedia Attribution Framework

## About the framework

Context, purpose, why it exists, what problems it addresses. What is the framework and why is it important in the current tech paradigm. How it benefits Wikimedia but also the reusers of its content.

## Who is this for

This framework is for you in case you reuse Wikimedia data....

## How to use the framework

What reusers need to do, at a glance:

- Wikimedia as a declaring party is sharing a list of attribution signals with different levels of requirement
- Reusers of Wikidata content will observe and display the signals making them human-readable in their diverse contexts
- ...

## Reuse scenarios

The framework needs to be observed carefully by companies reusing Wikimedia content in the following scenarios:

<GridLayout>
  <Card 
    v-for="scenario in scenarios" 
    :key="scenario.id" 
    :title="scenario.name" 
    :description="scenario.description" 
    :url="scenario.url" 
  />
</GridLayout>

## Example of an embed

<iframe width="560" height="315" src="https://www.youtube.com/embed/MDnyhGLVkKU?si=wUq4fbnawwBvnVS2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
