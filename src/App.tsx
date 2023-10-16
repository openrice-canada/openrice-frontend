import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import SearchInput from './components/Input/SearchInput';

function App() {
  const { control, handleSubmit } = useForm()
  return (
    <div>
      <form
        className='relative h-screen flex justify-center items-center'
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <img src={process.env.PUBLIC_URL + "/hero.jpg"} alt="hero" className='absolute top-0 left-0 w-full h-screen object-cover z-[-10] brightness-75' />
        <div className='flex flex-col justify-center items-center'>
          <h1 className='md:text-6xl text-4xl font-bold text-[#FFFFFF] text-center drop-shadow-xl mb-12'>Discovered Restaurant <br/>& Delicious Food</h1>
          <Controller
            name='email'
            control={control}
            render={({ field: { onChange, value } }) => (
              <SearchInput
                type='text'
                placeholder='tacos, pizza, chinese'
                onChange={onChange}
                value={value}
              />
            )}
          />
        </div>
      </form>
    </div>
  );
}

export default App;