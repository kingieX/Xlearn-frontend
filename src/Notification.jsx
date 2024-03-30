
import Navbar from './Components/Navbar'

const Notification = () => {
  const Notification1 = [
    'All courses will be available soon.',
    'Introduction to JavaScript has been added to your List.'
  ]
  return (
    <div>
        <Navbar />
        <div className='p-4'>
            <h1 className='text-4xl font-semibold text-black mb-2'>Notifications</h1>
            <div className='flex flex-col gap-2'>
              <p className='border-2 px-2 py-2'>{Notification1}</p>
              <p className='border-2 px-2 py-2'>{Notification1}</p>
            </div>
        </div>
    </div>
  )
}

export default Notification