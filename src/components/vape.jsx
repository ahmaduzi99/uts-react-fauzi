import React from 'react'
import './vape.css'
export default function Vape  (props)  {
  return (
    <div className='card'>
        <img src={props.foto} className='fotoProduk' alt="foto" />
    <p> ID :{props.id}</p>
    <p> Produk :{props.namaVape}</p>
    <p className='produkHarga'> Harga Rp :{props.harga}</p>
    </div>
  )
}
