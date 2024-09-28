import { Chat } from "../components/Chat.tsx/Chat"
import { Conversation } from "../components/conversation/Conversation"
import { SideBar } from "../components/sidebar/SideBar"

export const Home:React.FC = () => {
  return (
    <>
    <main className="h-screen overflow-hidden flex items-center justify-center " >
      <div className="flex flex-row h-screen w-screen antialiased text-gray-800">
        <div className="flex flex-row w-96 flex-shrink-0 bg-gray-100 p-4">
          <SideBar/>
          <Conversation />
        </div>
        <Chat />
  </div>
  </main>
    </>
  )
}
