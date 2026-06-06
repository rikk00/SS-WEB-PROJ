import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Coaches from './components/Coaches'
import Gallery from './components/Gallery'
import Certificates from './components/Certificates'
import Testimonials from './components/Testimonials'
import Registration from './components/Registration'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="text-gray-900">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about" className="pt-24"><About /></section>
        <section id="programs" className="pt-24"><Programs /></section>
        <section id="coaches" className="pt-24"><Coaches /></section>
        <section id="gallery" className="pt-24"><Gallery /></section>
        <section id="certificates" className="pt-24"><Certificates /></section>
        <section id="testimonials" className="pt-24"><Testimonials /></section>
        <section id="registration" className="pt-24"><Registration /></section>
        <section id="faq" className="pt-24"><FAQ /></section>
      </main>
      <Footer />
    </div>
  )
}
