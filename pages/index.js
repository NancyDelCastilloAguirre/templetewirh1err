import MainLayout from "@/components/layouts/MainLayout";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
const logoUrl = "";
export default function Home() {
  return (
    <MainLayout>
      <div className="content flex justify-center items-center w-full my-16">
        <div className="wrapper max-w-7xl">
          <h1 className="text-2xl text-center font-bold">
          RedPando 🐼 <br /> Payments + Wallets in group!{" "}
          </h1>
          <br></br>
            <br></br>
            <div className="text-2xl text-center">
            <p>Hey! Welcome to 🐼. A Wallet connect with Phanton (install this first)</p>
            
            </div>
            <div className="text-2xl text-center">
            <p >
              <br></br>
              <img className="h-auto max-w-xs origin-bottom -rotate-12" src=""></img>
            </p>
            </div>
        </div>
      </div>
    </MainLayout>
  );
}
