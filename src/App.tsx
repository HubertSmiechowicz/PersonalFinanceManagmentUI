import './App.css'
import TransactionsList from "@/components/TransactionsList/TransactionsList.tsx";

function App() {

  return (
    <>
      <div className="h-screen w-full flex items-center justify-center bg-slate-900">
            <TransactionsList />
      </div>
    </>
  )
}

export default App
