<script lang="ts">
  import { Button } from '$lib/components/ui/button'
  import { Smile } from 'lucide-svelte'

  let clicked = 0
</script>

<svelte:head>
  <title>Home | SynthEQ</title>
  <meta name="description" content="SynthEQ is a decentralized exchange for synthetic equities." />
</svelte:head>

<main>
  <h1 class="flex items-center text-green-500">Welcome<Smile /></h1>
  <Button on:click={() => clicked++}>Clicked {clicked} time{clicked === 1 ? '' : 's'}</Button>
</main>
