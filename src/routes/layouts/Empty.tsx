import { useOutlet, ScrollRestoration } from 'react-router'

export default function Empty() {
  const outlet = useOutlet()
  return (
    <>
      {outlet}
      <ScrollRestoration />
    </>
  )
}
