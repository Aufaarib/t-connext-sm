import { useDispatch } from 'react-redux'
import { fetchData } from '../../redux/reducer'
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

const Example2 = props => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props

  const { title, subtitle, color, icon, stats, trend, trendNumber } = props
  const data = useSelector(state => state.reducer)

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(fetchData())
  }

  return (
    <div>
      <button onClick={handleClick}>Fetch Data</button>
      <p>Response: </p>
      {data ? (
        <Box sx={{ textAlign: 'center', display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {data.map(item => (
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
