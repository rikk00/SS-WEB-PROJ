import React from 'react'

export default function Hero(){
  return (
    <div className="h-screen flex items-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1519723891239-7a8b6c3d9a1f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=xyz)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="bg-black/40 w-full h-full flex items-center">
        <div className="max-w-6xl mx-auto text-white p-8 md:p-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Membangun Generasi Atlet Basket Berprestasi</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">Kami membina talenta muda dengan program terstruktur, pelatih berpengalaman, dan fasilitas profesional.</p>
          <div className="mt-8 flex gap-4">
            <a href="#registration" className="btn-primary">Daftar Sekarang</a>
            <a href="#contact" className="btn-accent">Hubungi Kami</a>
          </div>
        </div>
      </div>
    </div>
  )
}
