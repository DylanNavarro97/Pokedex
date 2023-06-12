import { AppRouter } from './AppRouter'
import { PokemonProvider } from './components/PokemonProvider'

function App() {

  return (
    <PokemonProvider>
      <AppRouter />
    </PokemonProvider>
  )
}

export default App
