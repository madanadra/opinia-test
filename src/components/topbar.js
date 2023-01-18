import { MagnifyingGlassIcon, PencilIcon, HomeIcon, ChatBubbleLeftRightIcon, UserGroupIcon, BellIcon } from '@heroicons/react/24/outline'

export default function Topbar() {
    const icon = [
        <HomeIcon className='h-7 text-eight' />,
        <ChatBubbleLeftRightIcon className='h-7 text-three' />,
        <UserGroupIcon className='h-7 text-eight' />,
        <BellIcon className='h-7 text-eight' />,
    ]

    return (
        <div className='z-40 h-20 py-3.5 px-6 shadow-[0_3px_2px_-2px_rgba(0,0,0,0.12)]'>
            <div className='flex items-center h-full'>
                <div className='w-72 h-10 relative'>
                    <div className='absolute h-full px-3 grid place-items-center pointer-events-none'>
                        <MagnifyingGlassIcon className='h-4 text-seven' />
                    </div>
                    <input type='text' placeholder="Cari di Opinia" className='font-main bg-six rounded-full h-full pl-10 pr-3 placeholder:text-seven outline-none' />
                </div>
                <div className='grow h-full'>
                    <img src='/opinia.png' alt='Logo' className='h-full mx-auto' />
                </div>
                <div className='h-10 flex'>
                    {icon.map(item => 
                        <div className='h-full grid items-center px-4 cursor-pointer'>
                            {item}
                        </div>
                    )}
                    <div className='h-full grid items-center px-4 cursor-pointer'>
                        <img src='/premium.svg' alt='Premium' className='h-7' />
                    </div>
                </div>
                <div className='aspect-square h-full grid place-items-center rounded-full bg-three ml-2 cursor-pointer'>
                    <PencilIcon className='h-7 text-one' />
                </div>
            </div>
        </div>
    );
}