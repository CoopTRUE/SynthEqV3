<script lang="ts">
  import { PUBLIC_WALLET_CONNECT_PROJECT_ID } from '$env/static/public'
  import { chains } from '$lib/constants'
  import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi'
  import { onMount } from 'svelte'
  import { watchCore } from '$lib/stores'

  const wagmiConfig = defaultWagmiConfig({
    chains: [...chains],
    projectId: PUBLIC_WALLET_CONNECT_PROJECT_ID,
    metadata: {
      name: 'Web3Modal',
      description: 'Web3Modal Example',
      url: 'https://web3modal.com',
      icons: ['https://avatars.githubusercontent.com/u/37784886'],
    },
  })
  const modal = createWeb3Modal({
    wagmiConfig,
    projectId: PUBLIC_WALLET_CONNECT_PROJECT_ID,
    chains: [...chains],
  })

  onMount(watchCore)
</script>

<w3m-button {...$$restProps} />
