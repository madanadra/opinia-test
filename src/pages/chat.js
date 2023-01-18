import ListUser from "@/components/list-user";
import ChatBox from "@/components/chat-box";
import ChatHeader from "@/components/chat-header";
import ChatInput from "@/components/chat-input";
import HeaderList from "@/components/header-list";
import Layout from "@/components/layout";
import { useState } from "react";
import Modal from "@/components/modal";

export default function Chat() {
  const [modal, setModal] = useState('')

  return (
    <Layout title='Chat'>
      <div className="grow grid py-5">
        <div className="flex w-full max-w-4xl shadow-[0_0_2px_rgba(0,0,0,0.12)] mx-auto rounded-lg overflow-hidden">
          <div className="w-full max-w-[360px]">
            <HeaderList setModal={setModal} />
            <div className="p-2">
              <ListUser image='/avatar1.jpg' user='Oktada' text='Selamat siang Adam' date='28 Sep 22' notif={1} />
              <ListUser image='/avatar2.jpg' user='Resti Ananda' text='Sama-sama' date='26 Sep 22' />
            </div>
          </div>
          <div className="grow flex flex-col">
              <ChatHeader setModal={setModal} />
              <ChatBox />
              <ChatInput />
          </div>
        </div>
      </div>
      {modal === 'list' ? 
      <Modal setModal={setModal}
      content={[
        {title: 'Blokir', sub: 'Kamu tidak akan mendapatkan pesan dari Oktavia.'},
        {title: 'Favorit', sub: 'Obrolan dengan Oktavia akan disematkan'}
      ]} />
      : modal === 'chat' ? 
      <Modal setModal={setModal}
      content={[
        {title: 'Ganti latar belakang'},
        {title: 'Ganti jenis huruf'},
        {title: 'Hapus otomatis obrolan'}
      ]} />
      : []}
    </Layout>
  )
}
