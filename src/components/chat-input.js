import { CameraIcon, PaperClipIcon, HandRaisedIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ChatInput() {
    const [input, setInput] = useState('')

    return (
        <div className="z-10 flex items-center bg-one py-2 px-4 gap-x-2 border-l border-nine shadow-[0_-3px_2px_-2px_rgba(0,0,0,0.12)]">
            <CameraIcon className="h-6 text-three cursor-pointer" />
            <PaperClipIcon className="h-6 text-three cursor-pointer" />
            <input type='text' onChange={(e) => setInput(e.target.value)} placeholder="Pesan" className='grow font-main bg-six rounded-full h-11 p-3 placeholder:text-seven outline-none' />
            <div className={`h-10 p-2 aspect-square ${input ? 'bg-three' : 'bg-four'} rounded-full`}>
                {input
                ? <PaperAirplaneIcon className="h-6 text-one" />
                : <HandRaisedIcon className="h-6 text-one" />
                }
            </div>
        </div>
    );
}