import Link from 'next/link'

export default function Page({ params: { lng } }:{ params: any }) {
  return (
    <>
      <h1>Hi from second page!</h1>
      <Link href={`/${lng}`}>
        back
      </Link>
    </>
  )
}