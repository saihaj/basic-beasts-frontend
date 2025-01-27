import { FC, useState } from "react"
import Navbar from "@components/common/Navbar"
import Footer from "@components/common/Footer"
import SideNavbar from "@components/common/SideNavbar"
import * as fcl from "@onflow/fcl"
import Head from "next/head"

//Configure FCL
fcl
  .config()
  .put("accessNode.api", process.env.NEXT_PUBLIC_ACCESS_NODE_API)
  .put("challenge.handshake", process.env.NEXT_PUBLIC_CHALLENGE_HANDSHAKE)
  .put("0xFungibleToken", process.env.NEXT_PUBLIC_FUNGIBLE_TOKEN_ADDRESS)
  .put("0xFUSD", process.env.NEXT_PUBLIC_FUSD_ADDRESS)

const Layout: FC = ({ children }) => {
  const [isSideNavbarOpen, setIsSideNavbarOpen] = useState(false)

  const toggle = () => {
    setIsSideNavbarOpen(!isSideNavbarOpen)
  }

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Pixelar/Pixelar-Regular-W01-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <SideNavbar isSideNavbarOpen={isSideNavbarOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
