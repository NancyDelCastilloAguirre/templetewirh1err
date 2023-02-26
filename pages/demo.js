import MainLayout from "@/components/layouts/MainLayout";
import WalletContextProvider from "../components/WalletContextProvider"
import { AppBar } from "../components/AppBar"
import { BalanceDisplay } from "../components/BalanceDisplay"
import { SendSolForm } from "../components/SendSolForm"
import { BalanceDisplayInGroup } from "../components/BalanceDisplayInGroup"


export default function Home() {
  return (
    <MainLayout>
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <h1 className="text-2xl text-center font-bold">
      <br></br>
          RedPando 🐼 <br /> Select Wallet{" "}
          </h1>
          <br></br>
            
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div className="relative pl-16">
          <dt className="text-base font-semibold leading-7 text-gray-900">
            <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                
              </svg>
            </div>
            Send money for one
          </dt>
          <br></br>
          <br></br>
          <dd className="mt-2 text-base leading-7 text-gray-600">
          <div className="text-2xl text-center">
              <WalletContextProvider>
                <AppBar />
                <br></br>
                <div>
                  <br></br><BalanceDisplay />💰
                  <br></br>
                  <SendSolForm />
                  <br></br>
                </div>
              </WalletContextProvider>
            </div>
          </dd>
        </div>

        <div className="relative pl-16">
          <dt className="text-base font-semibold leading-7 text-gray-900">
            <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                
              </svg>
            </div>
            Send money for a group
            <br></br>
            <br></br>
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600">
          <div className="text-2xl text-center">
              <WalletContextProvider>
                <AppBar />
                <br></br>
                <div>
                  <br></br>💰
                  <br></br>
                  <SendSolForm />
                  <br></br>
                </div>
              </WalletContextProvider>
            </div>
          </dd>
        </div>
      </dl>
    </div>
      
    </MainLayout>
  );
}
