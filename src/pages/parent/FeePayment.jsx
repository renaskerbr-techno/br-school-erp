import PageHeader from "../../components/PageHeader";

export default function FeePayment() {
  return (
    <div>
      <PageHeader title="Fee Payment" />

      {/* Fee Summary */}
      <div className="p-6 grid md:grid-cols-3 gap-6">

        <div className="bg-green-500 text-white p-6 rounded shadow">
          <h3>Total Paid</h3>
          <p className="text-2xl">₹25,000</p>
        </div>

        <div className="bg-red-500 text-white p-6 rounded shadow">
          <h3>Pending</h3>
          <p className="text-2xl">₹5,000</p>
        </div>

        <div className="bg-blue-900 text-white p-6 rounded shadow">
          <h3>Next Due</h3>
          <p className="text-2xl">15 Oct</p>
        </div>

      </div>

      {/* Payment Table */}
      <div className="p-6 overflow-x-auto">
        <table className="w-full border shadow text-center">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="p-3">Date</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border">
              <td>01 Aug</td>
              <td>₹10,000</td>
              <td className="text-green-600 font-bold">Paid</td>
            </tr>

            <tr className="border">
              <td>01 Sep</td>
              <td>₹10,000</td>
              <td className="text-green-600 font-bold">Paid</td>
            </tr>

            <tr className="border">
              <td>01 Oct</td>
              <td>₹5,000</td>
              <td className="text-red-600 font-bold">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pay Button */}
      <div className="p-6 text-center">
        <button className="bg-blue-900 text-white px-6 py-3 rounded">
          Pay Now
        </button>
      </div>
    </div>
  );
}