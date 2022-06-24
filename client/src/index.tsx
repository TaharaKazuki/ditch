import React from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(<App />)
