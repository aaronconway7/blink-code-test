'use client'

import { SWRConfig } from 'swr'

export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((res) => res.json()),
        // Disabling revalidation for the purposes of this app as we don't want to refetch
        // the original json after adding or editing a message
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      }}
    >
      {children}
    </SWRConfig>
  )
}
