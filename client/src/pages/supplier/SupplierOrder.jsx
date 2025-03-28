import { useState } from "react";

import { ordersToDispatch } from "../../utils/resource/DataProvider.util";
import { IoSearch } from "../../utils/resource/IconsProvider.util";
import OrderDetails from "../../components/seller_components/seller_orders_components/OrderDetails";

const ITEMS_PER_PAGE = 10;

const SupplierOrders = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(ordersToDispatch.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedOrders = ordersToDispatch.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <>
      <div className="relative w-full border rounded-md shadow-sm bg-white mt-2">
        <header className="py-3 px-5 flex justify-between items-center border-b">
          <h3 className="text-lg font-medium text-primary-text">Order List</h3>
          <div className="flex items-center gap-x-3">
            <div className="searchbar border px-3 py-2 rounded-md flex items-center gap-x-2">
              <IoSearch className="text-[#8b8b8b]" />
              <input
                type="text"
                placeholder="Search"
                className="w-40 outline-none bg-transparent text-sm"
              />
            </div>
          </div>
        </header>

        <table className="w-full border-collapse">
          <thead className="bg-[#f7f7f7] text-primary-text uppercase text-sm">
            <tr>
              {[
                "#",
                "Client",
                "Location",
                "Items",
                "Amount(Rs)",
                "Date",
                "Action",
              ].map((heading, index) => (
                <th
                  key={index}
                  className="px-5 py-3 text-left font-medium text-sm"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {displayedOrders.map((order, index) => (
              <tr key={order.id} className={`border-b transition text-sm`}>
                <td className="py-3 px-5 text-left">
                  {startIndex + index + 1}
                </td>
                <td className="py-3 px-5 text-left">{order.clientName}</td>
                <td className="py-3 px-5 text-left">{order.location.city}</td>

                <td className="py-3 px-5 text-left">
                  {order.items
                    .map((item) => item.itemName)
                    .slice(0, 3)
                    .join(", ")}
                  {order.items.length > 3 ? " ..." : ""}
                </td>

                {/* <td className="py-3 px-5 text-center">{order.items.length}</td> */}
                <td className="py-3 px-5 text-center">{order.amount}</td>

                <td className="py-3 px-5 text-left">{order.dateOfOrder}</td>
                <td className="text-center text-xs">
                  <div className="flex justify-center items-center gap-x-1 h-full">
                    <button
                      className="border border-[#ccc] px-3 py-2 rounded-md font-medium text-primary-txt hover:bg-primary-btn hover:text-white transition-all ease"
                      onClick={() => {}}
                    >
                      Details
                    </button>
                    <button
                      className="border border-[#ccc] px-3 py-2 rounded-md font-medium text-primary-txt hover:bg-primary-btn hover:text-white transition-all ease"
                      onClick={() => {}}
                    >
                      Dispatch
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* pagination footer */}
        <div className="flex justify-between items-center p-4 border-t">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-primary-btn text-white rounded-md disabled:bg-primary-bg disabled:text-primary-txt"
          >
            Previous
          </button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-primary-btn text-white rounded-md disabled:bg-primary-bg disabled:text-primary-txt"
          >
            Next
          </button>
        </div>

        {isDetailOpen && (
          <OrderDetails
            onClose={() => {
              setIsDetailOpen(false);
            }}
          />
        )}
      </div>
    </>
  );
};

export default SupplierOrders;
