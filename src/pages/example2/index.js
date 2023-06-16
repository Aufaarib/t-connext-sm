import { useDispatch } from 'react-redux'
import { fetchData } from 'src/actions/getApiAction'
import { postApi } from 'src/actions/postApiAction'
import { useSelector } from 'react-redux'
// ** MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import Menu from 'mdi-material-ui/Menu'
import Magnify from 'mdi-material-ui/Magnify'

// ** Components
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import NotificationDropdown from 'src/@core/layouts/components/shared-components/NotificationDropdown'
import { useState } from 'react'

const Example2 = props => {
  // ** Props
  const [namaBank, setNamaBank] = useState('')
  const [nomorRekening, setNomorRekening] = useState('')
  const [namaPemilik, setNamaPemilik] = useState('')
  const [sts, setSts] = useState('error')

  const dispatch = useDispatch()
  const getApi = useSelector(store => store.getApi.getApi)

  const handleClick = () => {
    dispatch(fetchData())
  }

  const handlePost = () => {
    const data = {
      nama_bank: namaBank,
      nomor_rekening: nomorRekening,
      nama_pemilik: namaPemilik
    }
    dispatch(postApi(data))
    setSts('success')
  }

  return (
    <div>
      <label>Nama Bank</label>
      <input type='text' onChange={e => setNamaBank(e.target.value)}></input>
      <br></br>
      <label>Nomor Rekening</label>
      <input type='number' onChange={e => setNomorRekening(e.target.value)}></input>
      <br></br>
      <label>Nama Pemilik</label>
      <input type='text' onChange={e => setNamaPemilik(e.target.value)}></input>
      <button onClick={handlePost}>Post Data</button>
      <br></br>
      <p>Posting status :</p>
      {sts === 'success' && <h4>Berhasil</h4>}

      <button onClick={handleClick}>Fetch Data</button>
      <p>Response: </p>
      {getApi ? (
        <Box sx={{ textAlign: 'center', display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {getApi.map(item => (
            <Box
              sx={{
                minWidth: '250px',
                border: '1px solid black',
                borderRadius: '10px',
                padding: '10px',
                backgroundColor: 'primary.dark'
              }}
              key={item.id}
            >
              <Box
                sx={{ border: '1px solid black', borderRadius: '10px', backgroundColor: '#87CEEB' }}
                width='300px'
                component='img'
                src='/images/misc/Forest-PNG-Pic-Background.png'
                alt='Image'
              />
              <br></br>
              <a>{item.nama_pemilik}</a>
              <br></br>
              <a style={{ color: 'black' }}>{item.nama_bank}</a>
            </Box>
          ))}
        </Box>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '24px' }}>Data Tidak Tersedia</h1>
        </div>
      )}
    </div>
  )
}

export default Example2
