import Hero from '@/components/Hero'
import Features from '@/components/Features'
import News from '@/components/News'
import Events from '@/components/Events'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <News />
      <Events />
    </div>
  )
}
