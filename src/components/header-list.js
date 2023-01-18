import { EllipsisHorizontalIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function HeaderList({setModal}) {
    return (
        <>
            <div className="flex py-3 px-4 justify-between w-full">
              <h1 className="text-xl font-bold">Pesan</h1>
              <EllipsisHorizontalIcon className="w-7 text-eight cursor-pointer"  onClick={() => setModal('list')} />
            </div>
            <div className="py-2 px-4 shadow-[0_3px_2px_-2px_rgba(0,0,0,0.12)]">
              <div className="h-[34px] relative">
                <div className='absolute h-full px-3 grid place-items-center pointer-events-none right-0'>
                  <MagnifyingGlassIcon className='h-4 text-seven' />
                </div>
                <input type='text' placeholder="Cari teman atau pengikut" className='font-main bg-six rounded-full h-full w-full pl-3 pr-10 placeholder:text-seven outline-none' />
              </div>
            </div>
        </>
    );
}