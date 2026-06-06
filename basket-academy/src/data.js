export const stats = [
  { id: 1, label: 'Siswa Terdaftar', value: '420+' },
  { id: 2, label: 'Pelatih Profesional', value: '18' },
  { id: 3, label: 'Tahun Berdiri', value: '2012' },
  { id: 4, label: 'Prestasi', value: 'Regional & Nasional' },
]

export const programs = [
  {
    id: 'beginner',
    title: 'Beginner Class',
    img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=abc',
    desc: 'Pengantar fundamental bola basket untuk pemula.',
    schedule: 'Sabtu & Minggu, 08:00 - 10:00'
  },
  {
    id: 'intermediate',
    title: 'Intermediate Class',
    img: 'https://images.unsplash.com/photo-1516264667509-2f8c6ecb2d9a?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=def',
    desc: 'Mengembangkan skill teknis dan fisik.',
    schedule: 'Selasa & Kamis, 16:00 - 18:00'
  },
  {
    id: 'advanced',
    title: 'Advanced Class',
    img: 'https://images.unsplash.com/photo-1541446654331-1b6f1b2f3f4f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=ghi',
    desc: 'Program intensif untuk persiapan kompetisi.',
    schedule: 'Senin, Rabu, Jumat, 17:30 - 20:00'
  },
  {
    id: 'elite',
    title: 'Elite Competition Program',
    img: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=jkl',
    desc: 'Program seleksi dan pembinaan tim kompetisi.',
    schedule: 'Jadwal khusus, kontak pelatih'
  }
]

export const coaches = [
  {
    id: 1,
    name: 'Andi Prasetyo',
    position: 'Head Coach',
    experience: '15 tahun',
    cert: 'FIBA Coaching Certificate',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    desc: 'Spesialis skill development dan taktik pertandingan.'
  },
  {
    id: 2,
    name: 'Rina Susanti',
    position: 'Assistant Coach',
    experience: '8 tahun',
    cert: 'National Coaching License',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    desc: 'Fokus pada conditioning & youth development.'
  }
]

export const gallery = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  src: `https://source.unsplash.com/collection/483251/800x600?sig=${i}`,
  alt: `Gallery ${i + 1}`
}))

export const certificates = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  img: `logo.png`,
  title: `Sertifikat ${i + 1}`,
  desc: 'Penghargaan dan pengakuan atas prestasi.'
}))

export const testimonials = [
  { id: 1, name: 'Budi', role: 'Orang Tua', img: 'https://randomuser.me/api/portraits/men/12.jpg', msg: 'Anak saya berkembang pesat sejak bergabung.' },
  { id: 2, name: 'Sari', role: 'Siswa', img: 'https://randomuser.me/api/portraits/women/21.jpg', msg: 'Latihannya intens dan menyenangkan.' }
]
