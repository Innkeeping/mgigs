import { createLazyFileRoute } from '@tanstack/react-router'
import Taskboard from '../components/Taskboard.tsx'
import Navbar from '../components/Navbar.tsx'


export const Route = createLazyFileRoute('/taskboard')({
  component: myTaskboard,
})

function myTaskboard() {
  return (
    <>
      <Navbar />
      <Taskboard />
    </>
  )
}
