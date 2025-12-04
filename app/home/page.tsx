"use client";
import { useState } from "react";
import { Menu, ChevronRight, Home as HomeIcon, UserCircle, FileText, ClipboardList, BarChart2, Users, ChevronDown, Search } from "lucide-react";

function SelectField({ label, placeholder, options, value, onChange }: { label: string; placeholder: string; options: string[]; value: string | null; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-2">
      <div className="text-xs text-zinc-600">{label}</div>
      <div className="relative">
        <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between rounded-md bg-zinc-100 px-3 py-2 text-sm text-zinc-600">
          <span>{value || placeholder}</span>
          <ChevronDown className="h-4 w-4" />
        </button>
        {open && (
          <div className="absolute left-0 right-0 z-10 mt-2 rounded-md border border-zinc-200 bg-white shadow-sm">
            {options.map((opt) => (
              <div key={opt} onMouseDown={() => { onChange(opt); setOpen(false); }} className="cursor-pointer px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100">
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default function HomePage() {
  const [view, setView] = useState<"home" | "lead">("home");
  const [tab, setTab] = useState<"free" | "dedicated">("free");
  const [salesType, setSalesType] = useState<string | null>(null);
  const [npp, setNpp] = useState<string | null>(null);
  const [outlet, setOutlet] = useState<string | null>(null);
  const [program, setProgram] = useState<string | null>(null);
  const [nama, setNama] = useState<string>("");
  const [nilai, setNilai] = useState<string>("");
  const [cif, setCif] = useState<string>("");
  const salesTypeOptions = ["Retail", "Corporate", "Priority", "SME"];
  const nppOptions = ["120001", "120002", "120003", "120004"];
  const outletOptions = ["KC Bekasi", "KCP Galaxy", "KCP Harapan Indah", "KCP Cikarang"];
  const programOptions = ["Promo A", "Program B", "Campaign C", "Promo D"];
  return (
    <div className="min-h-screen w-full bg-zinc-100 font-sans flex flex-col">
      <header className="w-full bg-teal-800 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="rounded-sm bg-white/10 px-3 py-1 text-base font-bold tracking-wide">BNI</div>
            <div className="text-base font-semibold">DigiSales</div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="truncate">230303 | Kelvin Sayang Okta Anda Login sebagai Business Team Leader - KC BEKASI ( PJB )</span>
            <UserCircle className="h-7 w-7" />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl flex-1 px-5 py-5">
        <div className="grid grid-cols-12 gap-5">
          <aside className="col-span-3 rounded-xl bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center gap-2 text-zinc-700">
              <Menu className="h-5 w-5" />
              <span className="text-sm font-semibold">Menu</span>
            </div>
            <div className="space-y-5 text-sm text-zinc-700">
              <div>
                <div className="mb-2 flex items-center gap-2 font-semibold"><Users className="h-4 w-4" />DATA LEADS</div>
                <ul className="space-y-2">
                  <li onClick={() => setView("lead")} className={`flex cursor-pointer items-center gap-2 rounded px-2 py-1 ${view === "lead" ? "bg-teal-800 text-white" : "text-zinc-600"}`}><ChevronRight className="h-4 w-4" />Lead Management</li>
                </ul>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2 font-semibold"><ClipboardList className="h-4 w-4" />ACCOUNT PLANNING</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-zinc-600"><ChevronRight className="h-4 w-4" />Account Planning</li>
                  <li className="flex items-center gap-2 text-zinc-600"><ChevronRight className="h-4 w-4" />Report</li>
                </ul>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2 font-semibold"><FileText className="h-4 w-4" />LAPORAN MANUAL SALES</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-zinc-600"><ChevronRight className="h-4 w-4" />Laporan Manual Sales</li>
                </ul>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2 font-semibold"><BarChart2 className="h-4 w-4" />REPORT</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-zinc-600"><ChevronRight className="h-4 w-4" />Report TOP 10 MTD Kelol</li>
                  <li className="flex items-center gap-2 text-zinc-600"><ChevronRight className="h-4 w-4" />Report TOP 10 DTD Kelol</li>
                  <li className="flex items-center gap-2 text-zinc-600"><ChevronRight className="h-4 w-4" />Product Holding</li>
                  <li className="flex items-center gap-2 text-zinc-600"><ChevronRight className="h-4 w-4" />Kenalkan Nasabah</li>
                  <li className="flex items-center gap-2 text-zinc-600"><ChevronRight className="h-4 w-4" />Nasabah Kelolaan AMA</li>
                  <li className="flex items-center gap-2 text-zinc-600"><ChevronRight className="h-4 w-4" />Report Nasabah Per RM</li>
                  <li className="flex items-center gap-2 text-zinc-600"><ChevronRight className="h-4 w-4" />Report Pertumbuhan Dana</li>
                  <li className="flex items-center gap-2 text-zinc-600"><ChevronRight className="h-4 w-4" />Report Aktivitas Sales</li>
                  <li className="flex items-center gap-2 text-zinc-600"><ChevronRight className="h-4 w-4" />Report Closing Bulanan</li>
                  <li className="flex items-center gap-2 text-zinc-600"><ChevronRight className="h-4 w-4" />Report Pipeline Per Produk</li>
                  <li className="flex items-center gap-2 text-zinc-600"><ChevronRight className="h-4 w-4" />Report Distribusi Cabang</li>
                  <li className="flex items-center gap-2 text-zinc-600"><ChevronRight className="h-4 w-4" />Report Multi Segment</li>
                  <li className="flex items-center gap-2 text-zinc-600"><ChevronRight className="h-4 w-4" />Report Performance Harian</li>
                  <li className="flex items-center gap-2 text-zinc-600"><ChevronRight className="h-4 w-4" />Report SLA Follow Up</li>
                  <li className="flex items-center gap-2 text-zinc-600"><ChevronRight className="h-4 w-4" />Report Retensi Nasabah</li>
                  <li className="flex items-center gap-2 text-zinc-600"><ChevronRight className="h-4 w-4" />Report Cross Selling</li>
                  <li className="flex items-center gap-2 text-zinc-600"><ChevronRight className="h-4 w-4" />Report Tren Transaksi</li>
                </ul>
              </div>
            </div>
          </aside>

          <section className="col-span-9 space-y-4">
            <div className="flex items-center justify-end gap-2 text-sm text-zinc-500">
              <HomeIcon className="h-4 w-4" />
              <span>Home</span>
              <ChevronRight className="h-4 w-4" />
              {view === "lead" ? (
                <>
                  <span>Lead Management</span>
                  <ChevronRight className="h-4 w-4" />
                  <span>List</span>
                </>
              ) : (
                <span>Index</span>
              )}
            </div>
            {view === "home" && (
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <div className="text-lg font-semibold text-zinc-700">Halaman Utama</div>
                <div className="mt-4 rounded-xl bg-zinc-100 p-4 text-sm text-zinc-700">Aplikasi DigiSales Modal</div>
              </div>
            )}
            {view === "lead" && (
              <div className="space-y-4">
                <div className="text-lg font-semibold text-zinc-700">Lead Management</div>
                <div className="rounded-xl bg-white shadow-sm">
                  <div className="grid grid-cols-2">
                    <button onClick={() => setTab("free")} className={`border-b p-3 text-sm font-semibold ${tab === "free" ? "border-teal-800 text-zinc-700" : "border-zinc-200 text-zinc-500"}`}>LEADS FREE</button>
                    <button onClick={() => setTab("dedicated")} className={`border-b p-3 text-sm font-semibold ${tab === "dedicated" ? "border-teal-800 text-zinc-700" : "border-zinc-200 text-zinc-500"}`}>LEADS DEDICATED</button>
                  </div>
                  <div className="p-4">
                    <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                      <div className="grid grid-cols-2 gap-6">
                        <SelectField label="Sales Type" placeholder="–Silahkan pilih Sales Stype–" options={salesTypeOptions} value={salesType} onChange={setSalesType} />
                        <div className="space-y-2">
                          <div className="text-xs text-zinc-600">NAMA</div>
                          <input value={nama} onChange={(e) => setNama(e.target.value)} placeholder="NAMA" className="w-full rounded-md bg-zinc-100 px-3 py-2 text-sm text-zinc-600 outline-none" />
                        </div>
                        <SelectField label="NPP" placeholder="–Silahkan pilih NPP–" options={nppOptions} value={npp} onChange={setNpp} />
                        <SelectField label="Program" placeholder="–Silahkan pilih Program–" options={programOptions} value={program} onChange={setProgram} />
                        <SelectField label="Outlet" placeholder="–Silahkan pilih Outlet–" options={outletOptions} value={outlet} onChange={setOutlet} />
                        <div className="space-y-2">
                          <div className="text-xs text-zinc-600">Value</div>
                          <input type="number" value={nilai} onChange={(e) => setNilai(e.target.value)} placeholder="Value" className="w-full rounded-md bg-zinc-100 px-3 py-2 text-sm text-zinc-600 outline-none" />
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs text-zinc-600">Pencarian Berdasarkan</div>
                          <input value={cif} onChange={(e) => setCif(e.target.value)} placeholder="CIF" className="w-full rounded-md bg-zinc-100 px-3 py-2 text-sm text-zinc-600 outline-none" />
                        </div>
                      </div>
                      <div className="mt-6 flex justify-end">
                        <button className="flex items-center gap-2 rounded-md bg-teal-800 px-4 py-2 text-white"><Search className="h-4 w-4"/>Cari</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>

      <footer className="w-full bg-teal-800 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 text-xs">
          <div>© Hak Cipta 2025 PT. Bank Negara Indonesia (Persero), Tbk.</div>
          <div>BNI terdaftar dan diawasi oleh Otoritas Jasa Keuangan.</div>
        </div>
      </footer>
    </div>
  );
}
