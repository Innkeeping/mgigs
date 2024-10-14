import { createLazyFileRoute } from '@tanstack/react-router'
import Profile from '../components/Profile'
import Navbar from '../components/Navbar'

export const Route = createLazyFileRoute('/profile')({
  component: myProfile,
})

function myProfile() {
  return (
    <>
      <Navbar />
      <Profile />
    </>
  )
}
