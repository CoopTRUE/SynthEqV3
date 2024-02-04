<script lang="ts">
  import '../app.postcss'
  import ProgressBar from '$lib/components/ProgressBar.svelte'
  import Header from '$lib/components/Header.svelte'
  import { chain, walletAddress } from '$lib/stores'
  import { Toaster } from '$lib/components/ui/sonner'

  $: console.log($chain, $walletAddress)
</script>

<Toaster />
<ProgressBar />
<div class="container mx-auto">
  <Header />
  <slot />
</div>
