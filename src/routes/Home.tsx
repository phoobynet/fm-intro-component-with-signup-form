import Whatever from '@/components/home/Whatever'

export default function Home() {
  return (
    <div className="container mx-auto mt-10 max-w-6xl">
      <header>
        <h1 className="text-3xl font-bold tracking-wider">My React Template</h1>
      </header>
      <main>
        <Whatever />
      </main>
    </div>
  )
}
