import React from 'react'
import { useState } from 'react'
import Header from './components/header';
import './App.css'
import Vape from './components/vape';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';
import { Footer } from './components/footer';
import { Outlet } from "react-router-dom";

export default function App () {
  const [vape , setVape] = useState([
    {
      id:1,
      foto:"https://cdn.shopify.com/s/files/1/0474/6526/7356/products/VOOPOO-Drag-S-Pro-Pod-Kit-7_1024x.jpg?v=1658407437",
      namaVape:"Drag S Pro",
      harga:349000
    },
    {
      id:2,
      foto:"https://sen.voopoo.com.cn/www-voopoo/static/dist/images/product/detail/drag-x/drag1_m.jpg?v=5d7baac05d",
      namaVape:"Drag X Pro",
      harga:249000
    },
    {
      id:3,
      foto:"https://cdn.shopify.com/s/files/1/0617/4693/8029/products/Voopoo_Doric_20_Kit.png?v=1664612399",
      namaVape:"Voppo Stick",
      harga:149000
    },
    {
      id:4,
      foto:"https://images.tokopedia.net/img/cache/500-square/product-1/2019/6/22/492604604/492604604_7c067681-84b8-4416-8bda-a8ff4853ee55_908_908.jpg",
      namaVape:"Uwill Caliburn",
      harga:112500
    },
    {
      id:5,
      foto:"https://cloudandwick.com/wp-content/uploads/2021/10/thelema-quest-gunmetal-carbon.png",
      namaVape:"Lost Vape Thelema",
      harga:999000
    },
    {
      id:6,
      foto:"https://down-id.img.susercontent.com/file/sg-11134201-7qvcq-lfawckgmq87h63",
      namaVape:"Centaurus All Varian",
      harga:549000
    },
  ]);

  const [addVape,setAddVape]= useState ("")
  const [editVape,setEditVape]=useState("")
  const [addFoto,setAddFoto]=useState("")
  const [editFoto,setEditFoto]=useState("")
  const [addharga,setAddHArga]=useState("")
  const [editHarga,setEditHarga]=useState("")
  const [Id, SetId] = useState("")
  const nextId = useRef("7")

  return (
    <>
      <Header/>
      <main>
            <div className='container'>
               
                    {vape.map((e,i)=>(
                      <div key={i}>
                          <Vape
                          id={e.id}
                          foto={e.foto}
                          namaVape={e.namaVape}
                          harga={e.harga}
                          />
                      </div>
                    ))}
                
            </div>
      

        <form className='formm'>
          <div>
            <h2>
              Tambah 
            </h2>
            <label>
          ID:
          <br />
          <input type="number"
            value={nextId.current}
            onChange={(e) => setAddVape(e.target.value)} />
          <br />

          Masukan Foto :
          <br />
          <input value={addFoto}
            onChange={(e) => setAddFoto(e.target.value)} />
          <br />
          NamaVape:
          <br />
          <input value={addVape}
            onChange={(e) => setAddVape(e.target.value)} />
          <br />
          Harga Vape:
          <br />
          <input value={addharga}
            onChange={(e) => setAddHArga(e.target.value)} />
        </label>
          </div>



                      <button

            onClick={(e) => {
              e.preventDefault();
              setVape([...vape, {
                id: nextId.current++,
                foto:addFoto,
                namaVape: addVape,
                harga: addharga
              }])
            }}>
                        Tambah Produk

                      </button>
        </form>


        <form className='formm'>
        <h2 className='tengah'>Edit Barang</h2>
        <label>
          ID :
          <br />
          <input type="number" value={Id}
            onChange={(e) => SetId(e.target.value)} />
          <br />
          Nama Produk :
          <br />
          <input value={editVape}
            onChange={(e) => setEditVape(e.target.value)} />
        </label>
        <label >
          <br />
          harga :
          <br />
          <input value={editHarga}
            onChange={(e) => setEditHarga(e.target.value)} />
        </label>
        <label >
          <br />
          Foto :
          <br />
          <input value={editFoto}
            onChange={(e) => setEditFoto(e.target.value)} />
        </label>


        <br />
        <br />
        <button onClick={(e) => {
          e.preventDefault();
          setVape(vape.map((i) => i.id == Id ? { ...i, namaVape: editVape ,harga:editHarga,foto:editFoto } : i))
        }}>
          Edit
        </button>
      </form>

      <form className='formm' >
        <h2 className='tengah'>Hapus dari terakhir ADD</h2>
        <div>

          <button onClick={(e) => { e.preventDefault(); setVape(vape.slice(0, -1)) }} >Hapus</button>
        </div>
      </form>

      <Outlet/>


        </main>
  
    
      <Footer/>
    </>
  )
}
