import type { Chain } from './constants/chains'
import chains from './constants/chains'
import { switchNetwork, watchAccount, watchNetwork } from '@wagmi/core'
import { toast } from 'svelte-sonner'
import { writable } from 'svelte/store'

export const chain = writable<Chain>(chains[0])
export const walletAddress = writable<string | null>(null)

function revertNetwork() {
  switchNetwork({ chainId: chains[0].id }).catch(revertNetwork)
}
export function watchCore() {
  const networkUnsubscribe = watchNetwork(({ chain: switchedChain }) => {
    if (!switchedChain || switchedChain.unsupported) {
      toast.error(`Unsupported network, switching back to ${chains[0].name}...`)
      revertNetwork()
      return
    }
    chain.set(switchedChain as Chain)
  })
  const accountUnsubscribe = watchAccount(({ address }) => {
    walletAddress.set(address ?? null)
  })
  return () => {
    networkUnsubscribe()
    accountUnsubscribe()
  }
}
