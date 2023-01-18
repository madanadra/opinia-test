export default function ListUser({image, user, text, date, notif}) {
    return (
        <div className="flex p-2 gap-x-3">
            <img src={image} alt="Avatar" className="w-12 aspect-square rounded-full" />
            <div className="grow grid gap-y-1 content-center">
                <h1 className="font-semibold leading-5">{user}</h1>
                <h2 className="text-xs text-seven">{text}</h2>
            </div>
            <div className="grid content-center gap-y-2 justify-items-end">
                <h3 className="text-[10px] text-seven">{date}</h3>
                {notif &&
                    <div className="aspect-square bg-five rounded-full h-4 text-[10px] text-one grid place-items-center">{notif}</div>
                }
            </div>
        </div>
    );
}