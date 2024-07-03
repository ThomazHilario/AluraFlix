import { RoutesPage } from "./Routes/routes"

import { PostContextProvider } from "./Context/context"

function App() {
  return <PostContextProvider><RoutesPage/></PostContextProvider>
}

export default App
