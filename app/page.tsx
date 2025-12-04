"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import users from "./users.json";

export default function Home() {
  const router = useRouter();
  const [npp, setNpp] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPact, setShowPact] = useState(false);
  const handleLogin = () => {
    const ok = users.users.some((u) => u.npp === npp && u.password === password);
    if (ok) {
      setError("");
      setShowPact(true);
    } else {
      setError("NPP atau password salah");
    }
  };
  return (
    <div className="min-h-screen w-full bg-zinc-100 font-sans">
      <header className="w-full bg-teal-800 text-white">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-3">
          <div className="rounded-sm bg-white/10 px-3 py-1 text-base font-bold tracking-wide">BNI</div>
          <div className="text-base font-semibold">DIGISALES PORTAL</div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-5">
        <div className="grid grid-cols-12 gap-4">
          <section className="col-span-8 rounded-xl bg-white shadow-sm">
            <div className="relative overflow-hidden rounded-xl">
              <div className="h-64 w-full bg-gradient-to-br from-orange-200 via-white to-orange-100" />
              <button className="absolute left-3 top-1/2 -translate-y-1/2 rounded bg-black px-2 py-2 text-white">‹</button>
              <button className="absolute right-3 top-1/2 -translate-y-1/2 rounded bg-black px-2 py-2 text-white">›</button>
            </div>
          </section>

          <section className="col-span-4 rounded-xl bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-zinc-700">Sign in</h2>
            <form className="flex flex-col gap-4">
              <div className="flex items-center gap-3 border-b border-zinc-300 pb-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-zinc-500">
                  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z" fill="currentColor"/>
                </svg>
                <input value={npp} onChange={(e) => setNpp(e.target.value)} type="text" placeholder="npp" className="w-full bg-transparent text-sm text-zinc-600 placeholder-zinc-400 outline-none" />
              </div>
              <div className="flex items-center gap-3 border-b border-zinc-300 pb-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-zinc-500">
                  <path d="M17 8V7a5 5 0 1 0-10 0v1H5v13h14V8h-2Zm-8-1a3 3 0 1 1 6 0v1H9V7Zm8 3v9H7v-9h10Z" fill="currentColor"/>
                </svg>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="w-full bg-transparent text-sm text-zinc-600 placeholder-zinc-400 outline-none" />
              </div>
              {error && <div className="text-sm text-red-600">{error}</div>}
              <button type="button" onClick={handleLogin} className="mt-1 rounded-md bg-teal-800 px-4 py-2 text-white">Login</button>
            </form>
          </section>
        </div>

        <section className="mt-4 rounded-xl bg-white p-4 shadow-sm">
          <div className="grid grid-cols-12 items-center gap-4">
            <div className="col-span-6">
              <div className="text-sm text-zinc-600">News Category</div>
              <div className="mt-2 border-b border-zinc-300 pb-2 text-sm text-zinc-400">-Pilih News Category-</div>
            </div>
            <div className="col-span-6">
              <div className="text-sm text-zinc-600">Search</div>
              <div className="mt-2 flex items-center gap-2 border-b border-zinc-300 pb-2">
                <input placeholder="Search" className="w-full bg-transparent text-sm text-zinc-600 placeholder-zinc-400 outline-none" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-4 rounded-xl bg-white shadow-sm">
          <div className="divide-y divide-zinc-200">
            <div className="flex items-start gap-4 p-4">
              <div className="h-16 w-24 rounded bg-zinc-200" />
              <div className="flex-1">
                <div className="text-zinc-800">Kompilase Program Konsumer Bulan November 2025</div>
                <div className="text-sm text-zinc-600">Kompilase Program Konsumer Bulan November 2025</div>
                <div className="mt-1 text-xs text-zinc-500">07 Nov 2025 10:21:55  Kategori: Info Program</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4">
              <div className="h-16 w-24 rounded bg-zinc-200" />
              <div className="flex-1">
                <div className="text-zinc-800">Handbook Product Visa Infinite dan Kalkulator Miles</div>
                <div className="text-sm text-zinc-600">Update Handbook Product Visa Infinite dan Kalkulator Miles</div>
                <div className="mt-1 text-xs text-zinc-500">19 Sept 2025 10:15:51  Kategori: Info Program</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4">
              <div className="h-16 w-24 rounded bg-zinc-200" />
              <div className="flex-1">
                <div className="text-zinc-800">Pedoman Pengelolaan Nasabah Emerald Oleh Emerald RM</div>
                <div className="text-sm text-zinc-600">Pedoman Pengelolaan Nasabah Emerald Oleh Emerald RM</div>
                <div className="mt-1 text-xs text-zinc-500">09 Sept 2025 15:29:22  Kategori: Info Sales</div>
              </div>
            </div>
          </div>
          <div className="px-4 pb-4">
            <button className="mx-auto block rounded-md bg-zinc-200 px-4 py-2 text-zinc-700">Load More</button>
          </div>
        </section>
        {showPact && (
          <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-6">
            <div className="relative h-[85vh] w-full max-w-6xl overflow-hidden rounded-xl bg-white shadow-lg">
              <div className="flex items-center gap-4 bg-teal-800 px-6 py-3 text-white">
                <div className="rounded-sm bg-white/10 px-3 py-1 text-base font-bold tracking-wide">BNI</div>
                <div className="text-base font-semibold">DIGISALES PORTAL</div>
              </div>
              <div className="flex h-full flex-col">
                <div className="flex-1 overflow-y-auto px-6 py-4 text-sm text-zinc-700">
                  <ol className="list-decimal space-y-2 pl-6">
                    <li>Memberikan pemahaman kepada calon nasabah/nasabah perihal ketentuan terkait fitur produk, benefit dan risiko, kewajiban serta proses produk agar terhindar dari misselling.</li>
                    <li>Memastikan calon nasabah/nasabah menandatangani aplikasi serta melengkapi dokumen.</li>
                    <li>Menjaga kerahasiaan data calon nasabah/nasabah.</li>
                    <li>Melakukan eskalasi ke atasan maupun ke HCE/HCS (melalui Whistle Blowing System BNI) apabila Anda melihat rekan kerja melakukan hal yang melanggar kode etik.</li>
                  </ol>
                  <div className="mt-6 font-semibold">Yang Tidak Boleh Dilakukan Sales (Don&apos;ts):</div>
                  <ol className="mt-2 list-decimal space-y-2 pl-6">
                    <li>Pertukaran data dan melakukan jual beli data calon nasabah/nasabah.</li>
                    <li>Penyalahgunaan dan manipulasi data nasabah untuk kepentingan pihak ketiga.</li>
                    <li>Memberi imbalan dalam bentuk apapun yang dapat berpotensi merugikan BNI.</li>
                    <li>Menjanjikan kemudahan dan/atau keuntungan diluar ketentuan BNI yang berlaku.</li>
                    <li>Melakukan kegiatan yang dapat merugikan BNI dan calon nasabah baik materiil maupun immateriil.</li>
                    <li>Melakukan transaksi di luar kepentingan dan tanggung jawab BNI.</li>
                    <li>Menyebarluaskan materi sosialisasi yang terkait produk/program yang belum sesuai standar.</li>
                  </ol>
                </div>
                <div className="sticky bottom-0 flex items-center justify-end gap-4 border-t border-zinc-200 bg-white px-6 py-4">
                  <button onClick={() => router.push('/home')} className="rounded-md bg-sky-600 px-5 py-2 text-white">Setuju</button>
                  <button onClick={() => setShowPact(false)} className="px-2 py-2 text-rose-600">Tidak Setuju</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
