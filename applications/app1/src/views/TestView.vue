<script setup lang="ts">
import { bar } from '@boost/utils'
import { useCounterStore, type CounterStore } from '@boost/repository'

const myStore:CounterStore = useCounterStore();

const inc = () => {
  myStore.increment();
}
</script>

<template>
  <div>
    <h2>App1</h2>
    <br/>
    myStore count: {{ myStore.count }} 
    <br/>
    <button @click="inc">Increment</button>
    <br/>
    CounterStore imported from @boost/repository
    <hr/>
    <br/>
    {{ bar('This is just a test to call bar function imported from @boost/utils (foo.ts)') }}
    <br/><br/>
    <pre>
    export function bar(s: string): string {
        return s;
    }      
    </pre>
  </div>
</template>