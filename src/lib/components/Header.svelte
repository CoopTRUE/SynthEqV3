<script lang="ts">
  import Wallet from './Wallet.svelte'
</script>

<header class="flex items-center p-10">
  <div class="flex-1" />
  <h1 class="font-mono text-5xl font-bold tracking-tight text-primary">SynthEq</h1>
  <div class="flex-1">
    <div class="float-right">
      <Wallet size="sm" />
    </div>
  </div>
</header>
