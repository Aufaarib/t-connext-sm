import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from 'src/actions/getApiAction'
import { postApi } from 'src/actions/postApiAction'
// ** MUI Imports
import Box from '@mui/material/Box'

// ** Icons Imports

// ** Components
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { DataTables } from 'src/@core/layouts/components/DataTables'
import { deleteApi } from 'src/actions/deleteApiAction'

const CrudPage = props => {
  // ** Props

  const dispatch = useDispatch()
  const getApi = useSelector(store => store.getApi.getApi)

  const handlePost = () => {
    const data = {
      nama_bank: namaBank,
      nomor_rekening: nomorRekening,
      nama_pemilik: namaPemilik
    }
    dispatch(postApi(data))
    setSts('success')
  }

  const [namaBank, setNamaBank] = useState('')
  const [nomorRekening, setNomorRekening] = useState('')
  const [namaPemilik, setNamaPemilik] = useState('')
  const [deleteId, setDeleteId] = useState('')
  const [sts, setSts] = useState('error')

  const transformedItems = getApi.map(item => ({
    id: item.id,
    nama_pemilik: item.nama_pemilik,
    nomor_rekening: item.nomor_rekening,
    nama_bank: item.nama_bank
  }))

  console.log(transformedItems.map(item => item.nama_bank))

  console.log(deleteId)

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  const columns = [
    {
      name: <div>No</div>,
      selector: (_row, i) => i + 1,
      width: '55px'
    },
    {
      name: <div>Nama Bank</div>,
      selector: data => data.nama_bank,
      cell: data => <div>{data.nama_bank}</div>,
      width: 'auto'
    },
    {
      name: <div>Nomor Rekening</div>,
      selector: data => data.nomor_rekening,
      cell: data => <div>{data.nomor_rekening}</div>,
      width: 'auto'
    },
    {
      name: <div>Nama Pemilik</div>,
      selector: data => data.nama_pemilik,
      cell: data => <div>{data.nama_pemilik}</div>,
      width: 'auto'
    },
    {
      name: <div>Aksi</div>,
      cell: data => (
        <div>
          <button
            style={{ fontSize: '14px' }}
            // onClick={() => navigateUbahListBank(data.id, data.nama_bank, data.nomor_rekening, data.nama_pemilik)}
            className='btn-action-ungu'
          >
            <i className='fa fa-pencil'></i> Ubah
          </button>
          <button style={{ fontSize: '14px' }} onClick={() => handleDelete(data.id)} className='btn-action-pink ml-3'>
            <i className='fa fa-trash'></i> Hapus
          </button>
        </div>
      ),
      ignoreRowClick: true,
      button: true,
      width: '360px'
    }
  ]

  const navigate = useRouter()

  const navigateTambahListBank = () => {
    navigate.push('/admin/tambah-list-bank')
  }

  const handleDelete = id => {
    setDeleteId(id)
    dispatch(deleteApi(deleteId))
    setSts('success')
  }

  return (
    <div>
      <div style={{ display: 'grid', padding: '10px', justifyItems: 'center', width: 'auto' }}>
        <p>Posting status :</p>
        {sts === 'success' && <h4>Berhasil</h4>}
        <label>Nama Bank</label>
        <input type='text' onChange={e => setNamaBank(e.target.value)}></input>
        <br></br>
        <label>Nomor Rekening</label>
        <input type='number' onChange={e => setNomorRekening(e.target.value)}></input>
        <br></br>
        <label>Nama Pemilik</label>
        <input type='text' onChange={e => setNamaPemilik(e.target.value)}></input>
        <br></br>
        <button className='mt-5' onClick={handlePost}>
          Post Data
        </button>
        <br></br>
      </div>
      <DataTables columns={columns} data={transformedItems} onClick={navigateTambahListBank} />
    </div>
  )
}

export default CrudPage
