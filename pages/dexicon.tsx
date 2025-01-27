import type { NextPage } from "next"
import ComingSoon from "@components/ui/ComingSoon"

const Dexicon: NextPage = () => {
  return (
    <div>
      <ComingSoon
        title="Coming Soon!"
        description="Dexicon shows all discovered Basic Beasts"
      />
    </div>
  )
}

export default Dexicon
