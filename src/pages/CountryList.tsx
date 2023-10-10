import { Box, Theme } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import CountrySearch from '../components/CountrySearch'
import CountryFilter from '../components/CountryFilter'
import CountryCard from '../components/CountryCard'
import { Link } from 'react-router-dom'
import { useGetAllCountriesQuery } from '../features/api/apiSlice'
import { useMemo, useState } from 'react'
import { baseUrl } from '../AppWithRouter'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minHeight: '90vh',
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    padding: '40px 80px 16px 80px',
    gap: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2, 2),
    },
  },
  controlBox: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 16,
    flexWrap: 'wrap',
  },
  countriesList: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '79px 72px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: theme.spacing(0, 4)
    },
  }
}))

function CountryList() {
  const classes = useStyles()
  const [searchValue, setSearchValue] = useState('')
  const [filterValue, setFilterValue] = useState('')
  const { data: countries, error, isLoading } = useGetAllCountriesQuery()

  const filteredCountries = useMemo(() => {
    if (!countries) return []

    return countries.filter(country => {
      const nameMatches = searchValue
        ? country.name?.common?.toLowerCase().includes(searchValue.toLowerCase())
        : true

      const regionMatches = filterValue
        ? country.region?.toLowerCase() === filterValue.toLowerCase()
        : true

      return nameMatches && regionMatches
    })
  }, [countries, searchValue, filterValue])

  const handleSearch = (value: string) => {
    setSearchValue(value)
  }

  const handleFilter = (value: string) => {
    setFilterValue(value)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    console.log('get all countries error', error)

    return <div>Error!</div>
  }

  return (
    <Box className={classes.container}>
      <Box className={classes.controlBox}>
        <CountrySearch onSearch={handleSearch} />
        <CountryFilter onFilter={handleFilter} filterValue={filterValue} />
      </Box>
      <Box data-test-name="list-container" className={classes.countriesList}>
        {
          filteredCountries?.length ? filteredCountries.map(country => (
            <Link to={`${baseUrl}country/${country.cca3}`} key={country.cca3}>
              <CountryCard country={country} />
            </Link>
          )) : null
        }
      </Box>
    </Box>
  )
}
export default CountryList
