import type { GetStaticPropsContext } from 'next'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/common/get-all-pages'
import { Layout } from '@components/common'
import { Container } from '@components/ui'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })
  const { pages } = await getAllPages({ config, preview })
  return {
    props: { pages },
  }
}

export default function Blog() {
  return (
    <div className="pb-20">
      <div className="text-center pt-40 pb-56 bg-black">
        <Container>
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
            Welcome to LaRobe, the people centric clothier.
          </h2>
          <p className="mt-3 max-w-md mx-auto text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            LaRobe has never introduced change for it’s own sake. It has chosen
            instead, to refine constantly the design of garments. Each
            development is analysed carefully to ensure that it not only meet’s
            the brother’s meticulous standards but adds to the luxurious
            pleasure to be discovered when handling the garment. The LaRobe
            owner will find the silhouettes through & through, with more detail,
            finer finishings and crafted fabrics. Represent is progressing as it
            always has done, with infinite care, making certain the garments
            give exceptional wear.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
            <div className="flex">
              <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                <img
                  className="h-12 w-12 rounded-full"
                  src="/avatar.png"
                  alt="Avatar"
                />
              </div>
              <div className="ml-4">
                <div className="leading-6 font-medium text-white">
                  Dimitri Michel
                </div>
                <div className="leading-6 font-medium text-gray-200">
                  LaRobe
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        {/** Replace by HTML Content */}
        <div className="text-lg leading-7 font-medium py-6 text-justify max-w-6xl mx-auto">
          <p className="py-6">
            Creating our clothing range isn’t too different from our traditional
            graphics or any other apparel we release, as everything we do is
            extensive and meticulous. What we wanted to ensure with this
            collection is that the cottons and fit of the garment were soft,
            premium and comfy - as it was crucial to us that this was everyone's
            new minimalist essential. With this being said, the journey to
            releasing the capsule was much longer than a traditional release,
            with constant tweaks taking place through several in-house fittings
          </p>
          <p className="py-6">
            Through washing, printing and embroidering onto jersey, we saw a
            clear path to creating this collection at a more accessible price
            point compared to our mainline, but keeping in line with the
            quality, fabrication and manufacturing that is core to everything we
            do. We have identified the need for sustainable, reusable and longer
            life apparel in our market, an earth palette is our first step in
            providing the market with a ‘go to’ product that is ageless. In the
            next few months we are looking to switch to organic cottons to
            further represent our stance on the matter.
          </p>
        </div>
      </Container>
    </div>
  )
}

Blog.Layout = Layout
