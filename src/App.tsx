import { useState } from 'react'
import { Button, Card, CardContent, Typography, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center gap-8 mb-8">
          <a href="https://vite.dev" target="_blank" className="transition-transform hover:scale-110">
            <img src={viteLogo} className="h-24" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="transition-transform hover:scale-110">
            <img src={reactLogo} className="h-24" alt="React logo" />
          </a>
        </div>

        <Typography variant="h2" className="text-center mb-8 text-white">
          Vite + React + MUI + Tailwind
        </Typography>

        <Card className="max-w-md mx-auto bg-white/10 backdrop-blur-sm">
          <CardContent className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <IconButton 
                color="primary" 
                onClick={() => setCount(count => count - 1)}
                className="bg-blue-500/10 hover:bg-blue-500/20"
              >
                <RemoveIcon />
              </IconButton>

              <Typography variant="h4" className="text-white">
                Count: {count}
              </Typography>

              <IconButton 
                color="primary" 
                onClick={() => setCount(count => count + 1)}
                className="bg-blue-500/10 hover:bg-blue-500/20"
              >
                <AddIcon />
              </IconButton>
            </div>

            <Button 
              variant="contained" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              onClick={() => setCount(0)}
            >
              Reset Counter
            </Button>

            <Typography className="text-gray-300 mt-4 text-center">
              Edit <code className="text-yellow-300">src/App.tsx</code> and save to test HMR
            </Typography>
          </CardContent>
        </Card>

        <Typography className="text-center mt-8 text-gray-400">
          Click on the Vite and React logos to learn more
        </Typography>
      </div>
    </div>
  )
}

export default App