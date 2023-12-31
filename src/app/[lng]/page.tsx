import Link from 'next/link'
import { useTranslation } from '../i18n'
export default async function Page({ params: { lng } }:{ params: any }) {
    console.log({lng})
  const { t }:{t:any} = await useTranslation(lng)
  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${lng}/second-page`}>
        {t('to-second-page')}
      </Link>
    </>
  )
}