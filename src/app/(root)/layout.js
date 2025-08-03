import Footer from '@/components/Layout/Footer'

export default function RootLayout ({ children }) {
  return (
    <>
      <main>
        {children}
        <div>
          <Footer />
        </div>
      </main>
    </>
  )
}
