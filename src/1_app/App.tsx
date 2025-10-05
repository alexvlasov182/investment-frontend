import { useStore } from "@nanostores/react"
import { Home } from "page/home"
import { Track } from "page/track"
import { Tutorials } from "page/tutorials"

import { $router } from "shared/router"


export default function App() {
  const page = useStore($router)

  if (!page) return null // TODO: add 404 page
  
  switch (page.route) {
    case 'home':
      return <Home />
    case 'tutorials':
      return <Tutorials />
    case 'track':
      return <Track  trackId={page.params.trackId} />
  }

}
