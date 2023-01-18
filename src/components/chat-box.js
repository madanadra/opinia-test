export default function ChatBox() {
    const data = [
        {text: 'Halo Adam', date: '10.19', right: false},
        {text: 'Halo Oktavia', date: '10.19', right: true},
        {text: 'Apa ada yang bisa saya bantu?', date: '10.19', right: true},
        {text: 'Apakah saya bisa menemuimu siang ini?', date: '10.20', right: false},
        {text: 'Ada beberapa hal yang ingin saya bicarakan dengan mu', date: '10.20', right: false},
        {text: 'Mohon maaf okt, siang ini saya harus menemui client. bagaimana jika nanti malam?', date: '10.25', right: true},
        {text: 'Baiklah jika begitu, saya akan menunggu di Cafe dekat rumah mu pukul 19.00', date: '10.26', right: false},
        {text: 'Baiklah, sampai nanti oktavia', date: '10.27', right: true},
        {text: 'sampai nanti adam', date: '10.27', right: false},
    ]

    return (
        <div className="grow relative">
            <div className="grid p-2 gap-y-2 absolute inset-0 z-10 overflow-y-auto overflow-x-hidden">
                <h3 className="text-xs text-eight w-full text-center p-2.5 mt-8">22 September 2022</h3>
                {data.map(item => 
                    <div className={`grid gap-y-1 py-1 px-2 max-w-[360px] w-max  ${item.right ? 'rounded-[7px_7px_0_7px] bg-ten justify-self-end' : 'rounded-[0_7px_7px_7px] bg-one '}`}>
                        <h1 className="leading-5">{item.text}</h1>
                        <h2 className="text-[8px] text-eight">{item.date}</h2>
                    </div>  
                )}
            </div>
            <img src="/bg.jpg" alt="Background" className="w-full h-full object-cover brightness-95" />
        </div>
    );
}