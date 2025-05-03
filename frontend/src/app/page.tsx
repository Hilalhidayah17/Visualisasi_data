import CustomerTable from "@/components/CustomerTable";
import DeviceChart from "@/components/DeviceChart";
import GenderChart from "@/components/GenderChart";
import LocationChart from "@/components/LocationChart";
import LoginHourChart from "@/components/LoginHourChart";
import { deviceData, genderData, locationData, loginHour } from "@/utils/api";

export default async function Home() {
  const device = await deviceData();
  const gender = await genderData();
  const location = await locationData();
  const loginData = await loginHour();

  return (
    <main className="min-h-screen p-6 md:p-10 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center text-white tracking-wide">
        Customer Insight Dashboard
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-950 rounded-2xl p-6 shadow-lg hover:shadow-purple-600 transition">
          <h2 className="text-xl font-semibold mb-2 text-purple-400">
            Gender Distribution
          </h2>
          <p className="text-sm text-gray-300 mb-4">
            Perbandingan jumlah pengguna berdasarkan gender.
          </p>
          <GenderChart data={gender.data} />
          <p className="mt-4 text-sm text-purple-200 italic"></p>
        </div>

        <div className="bg-gray-950 rounded-2xl p-6 shadow-lg hover:shadow-blue-600 transition">
          <h2 className="text-xl font-semibold mb-2 text-blue-400">
            Top 5 Device Brands
          </h2>
          <p className="text-sm text-gray-300 mb-4">
            Lima perangkat terpopuler yang digunakan oleh pengguna.
          </p>
          <DeviceChart data={device.data} />
        </div>

        <div className="bg-gray-950 rounded-2xl p-6 shadow-lg hover:shadow-green-600 transition">
          <h2 className="text-xl font-semibold mb-2 text-green-400">
            Location Type Summary
          </h2>
          <p className="text-sm text-gray-300 mb-4">
            Kategori lokasi pengguna seperti urban, suburban, atau rural.
          </p>
          <LocationChart data={location.data} />
          <p className="mt-4 text-sm text-green-200 italic"></p>
        </div>

        <div className="bg-gray-950 rounded-2xl p-6 shadow-lg hover:shadow-yellow-600 transition">
          <h2 className="text-xl font-semibold mb-2 text-yellow-300">
            Login Hour Pattern
          </h2>
          <p className="text-sm text-gray-300 mb-4">
            Waktu-waktu paling sering pengguna mengakses layanan.
          </p>
          <LoginHourChart data={loginData.data} />
          <p className="mt-4 text-sm text-yellow-200 italic"></p>
        </div>
      </section>

      <div className="bg-gray-950 rounded-2xl p-6 shadow-lg hover:shadow-pink-600 transition mb-10">
        <h2 className="text-xl font-semibold mb-2 text-pink-400">
          Customer Data Table
        </h2>
        <p className="text-sm text-gray-300 mb-4">
          Tabel seluruh pengguna yang terdaftar di sistem.
        </p>
        <CustomerTable />
      </div>
    </main>
  );
}
