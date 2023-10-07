const ErrorPage = () => {
  return (
    <div className='h-screen flex flex-col gap-4 justify-center items-center'>
      <img src="/error.svg" alt="error" className='max-w-lg' />
      <h2 className='font-semibold'>Sorry, an unexpected error has occurred</h2>
      <button type='button' className='bg-primary-600 text-[#ffffff] text-sm font-semibold px-6 py-2 rounded-full'>
        <a href='/'>Go to home</a>
      </button>
    </div>
  )
}

export default ErrorPage