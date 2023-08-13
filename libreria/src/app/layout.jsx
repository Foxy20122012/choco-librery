import '../styles/globals.css'
import Navigation from '../components/shared/Navigation'
import NavMobil from '../components/shared/NavMovil'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navigation/>
        <NavMobil/>
      
        {children}
      </body>
    </html>
  )
}