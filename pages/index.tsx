import { Layout } from '@components/common'
import { Grid, Marquee, Hero, Container } from '@components/ui'
import Image from 'next/image'
import { ProductCard } from '@components/product'

import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

import { getConfig } from '@framework/api'
import getAllProducts from '@framework/product/get-all-products'
import getSiteInfo from '@framework/common/get-site-info'
import getAllPages from '@framework/common/get-all-pages'
import Jumbotron from '@components/ui/Jumbotron/Jumbotron'
import Link from '@components/ui/Link'
import ContentTitle from '@components/ui/ContentTitle/ContentTitle'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })

  const { products } = await getAllProducts({
    variables: { first: 12 },
    config,
    preview,
  })

  const { categories, brands } = await getSiteInfo({ config, preview })
  const { pages } = await getAllPages({ config, preview })

  return {
    props: {
      products,
      categories,
      brands,
      pages,
    },
    revalidate: 14400,
  }
}

export default function Home({
  products,
  brands,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Jumbotron>
        <Link href="/search">
          <div className="lg:bg-large bg-mobile h-screen bg-cover bg-no-repeat"></div>
        </Link>
      </Jumbotron>
      <ContentTitle
        title="The Newest Looks...Straight From The Runway"
        subtitle="Shop Cute Tops, Trendy Dresses, Accessories & More"
      />
      <div style={{ margin: 30 }}>
        <Grid>
          {products.slice(0, 3).map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              imgProps={{
                width: i === 0 ? 1080 : 540,
                height: i === 0 ? 1080 : 540,
              }}
            />
          ))}
        </Grid>
      </div>

      {/* <HomeAllProductsGrid
        newestProducts={products}
        categories={categories}
        brands={brands}
      /> */}
    </>
  )
}

Home.Layout = Layout
