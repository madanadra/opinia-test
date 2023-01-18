export default function Modal({content, setModal}) {
    return (
        <div className="z-50 fixed grid place-items-center bg-[rgba(0,0,0,0.5)] w-screen h-screen" onClick={() => setModal('')}>
            <div className="rounded-lg bg-one p-4" onClick={(e) => e.stopPropagation()}>
                <div className="bg-nine grid gap-y-px">
                {content.map(item => 
                    <div className="bg-one p-2">
                        <h1>{item.title}</h1>
                        {item.sub &&
                            <h2 className="text-sm text-eight">{item.sub}</h2>
                        }
                    </div>
                )}
                </div>
            </div>
        </div>
    );
}