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
        <img src="/hero.jpg" alt="hero" className='absolute top-0 left-0 w-full object-fill z-[-10] brightness-75' />
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-6xl font-bold text-[#FFFFFF] text-center drop-shadow-xl mb-12'>Discovered Restaurant <br/>& Delicious Food</h1>
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