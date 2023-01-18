import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

export default function ChatHeader({setModal}) {
    return (
        <div className="z-10 flex py-2 px-4 gap-x-2 items-center bg-one border-l border-nine shadow-[0_3px_2px_-2px_rgba(0,0,0,0.12)]">
            <img src='/avatar1.jpg' alt="Avatar" className="w-[34px] aspect-square rounded-full" />
            <div className="grow">
                <h1 className="font-medium leading-5">Oktavia Nanda</h1>
                <h2 className="text-xs text-seven">Title</h2>
            </div>
            <EllipsisHorizontalIcon className="w-7 text-eight cursor-pointer" onClick={() => setModal('chat')} />
        </div>
    );
}