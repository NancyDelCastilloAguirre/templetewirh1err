import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import * as web3 from "@solana/web3.js"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import { useState } from "react"

export const SendSolForm = () => {
  const [txSig, setTxSig] = useState("")
  const { connection } = useConnection()
  const { publicKey, sendTransaction } = useWallet()
  const link = () => {
    return txSig ? `https://explorer.solana.com/tx/${txSig}?cluster=devnet` : ""
  }

  const sendSol = event => {
    event.preventDefault()
    if (!connection || !publicKey) {
      return
    }
    const transaction = new web3.Transaction()
    const recipientPubKey = new web3.PublicKey(event.target.recipient.value)

    const sendSolInstruction = web3.SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: recipientPubKey,
      lamports: LAMPORTS_PER_SOL * event.target.amount.value
    })

    transaction.add(sendSolInstruction)
    sendTransaction(transaction, connection).then(sig => {
      setTxSig(sig)
    })
  }

  return (
    <div>
      {publicKey ? (
        <form onSubmit={sendSol} >
          <p>
           <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount (in SOL use devnet) to send:</label>
          <input
            id="amount"
            type="text"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            placeholder="e.g. 0.1 min"
            required
          /> 
          </p>
          <p>
           <label htmlFor="recipient" className="block text-sm font-medium text-gray-700">Send SOL to:</label>
          <input
            id="recipient"
            type="text"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            placeholder="e.g. 4Zw1fXuYuJhWhu9KLEYMhiPEiqcpKd6akw3WRZCv84HA"
            required
          /> 
          </p>
          <br></br>
          <p>
          <button type="submit" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
            Send
          </button>
          </p>
        </form>
      ) : (
        <span>Connect Your Wallet</span>
      )}
      {txSig ? (
        <div>
          <p>View your transaction on </p>
          <a href={link()}>Solana Explorer</a>
        </div>
      ) : null}
    </div>
  )
}
