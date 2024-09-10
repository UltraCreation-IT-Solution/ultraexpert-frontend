import React, { useState } from "react";

const WalletPage = () => {
  const [loading, setLoading] = useState(false);
  const transactions = [
    {
      date: "31/07/2024",
      client: "Jane Doe",
      amount: "₹ 5,000",
      type: "Cr",
      id: "TID3872XG9",
    },
    {
      date: "31/07/2024",
      client: "Jane Doe",
      amount: "₹ 5,000",
      type: "Dr",
      id: "TID3872XG9",
    },
    {
      date: "31/07/2024",
      client: "Jane Doe",
      amount: "₹ 5,000",
      type: "Cr",
      id: "TID3872XG9",
    },
    {
      date: "31/07/2024",
      client: "Jane Doe",
      amount: "₹ 5,000",
      type: "Cr",
      id: "TID3872XG9",
    },
    {
      date: "31/07/2024",
      client: "Jane Doe",
      amount: "₹ 5,000",
      type: "Cr",
      id: "TID3872XG9",
    },
    {
      date: "31/07/2024",
      client: "Jane Doe",
      amount: "₹ 5,000",
      type: "Cr",
      id: "TID3872XG9",
    },
    {
      date: "31/07/2024",
      client: "Jane Doe",
      amount: "₹ 5,000",
      type: "Cr",
      id: "TID3872XG9",
    },
  ];

  return (
    <div className="flex flex-col w-full md:w-[68%]">
      <div className="flex gap-3 border-b border-solid border-[#c7c7c7] pb-3 text-sm md:text-base overflow-x-scroll px-2">
        <div
          className={
            loading
              ? `text-gray-300`
              : `px-6 py-3 font-semibold shrink-0 bg-[#ececec] rounded-sm text-base lg:text-lg`
          }
        >
          Your Wallet
        </div>
      </div>
      <div className="container mx-auto pt-8 font-montserrat ">
        {/* Header section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 ">
          <div className="flex flex-col justify-between rounded-lg shadow-md border-[#c7c7c7] border-solid border">
            <div className="bg-white px-6 ">
              <p className="text-gray-500 text-lg lg:text-xl">
                Current Balance
              </p>
              <p className="text-3xl lg:text-4xl font-bold">₹ 15,000</p>
            </div>
            <div className="text-gray-500 text-sm lg:text-base shrink bg-[#e9f2ff] p-2 rounded-b">
              Your Balance will auto-widhdraw on 31/07/2024
            </div>
          </div>
          <div className="bg-white px-6 rounded-lg shadow-md border-[#c7c7c7] border-solid border">
            <p className="text-gray-500 text-lg lg:text-xl">Last Transaction</p>
            <p className="text-2xl lg:text-3xl font-bold">₹ 5,000</p>
            <p className="text-gray-500 mt-2 text-sm lg:text-base">
              31/07/2024
            </p>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white pb-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <h2 className="text-xl md:text-lg lg:text-xl font-bold">
              All Transactions
            </h2>
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded py-2 w-[180px] xs:w-[240px] lg:w-[300px] pl-10 pr-4 focus:outline-none"
              />
              <img
                className="w-5 h-5 text-gray-500 absolute left-3 top-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/945px-Vector_search_icon.svg.png"
              ></img>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-left whitespace-nowrap">
              <thead className="bg-[#ececec] rounded-sm text-sm lg:text-base">
                <tr className="border-b border-solid border-[#d4d4d4]">
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Client Name</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Transaction Id</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index} className="text-sm lg:text-base">
                    <td className="px-4 py-2 border-b border-solid border-[#d4d4d4]">
                      {transaction.date}
                    </td>
                    <td className="px-4 py-2 border-b border-solid border-[#d4d4d4]">
                      {transaction.client}
                    </td>
                    <td className="px-4 py-2 border-b border-solid border-[#d4d4d4]">
                      <span
                        className={
                          transaction.type === "Cr"
                            ? "text-green-500"
                            : "text-red-500"
                        }
                      >
                        {transaction.amount} {transaction.type}
                      </span>
                    </td>
                    <td className="px-4 py-2 border-b border-solid border-[#d4d4d4]">
                      {transaction.id}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
