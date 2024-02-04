import { mainnet, arbitrum, avalanche, polygon, fantom } from '@wagmi/core/chains'

const chains = [arbitrum] as const
export type Chains = typeof chains
export type Chain = Chains[number]
export type ChainId = Chain['id']

export default chains
