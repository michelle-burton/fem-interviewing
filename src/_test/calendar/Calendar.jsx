function Calendar() {
  const [countries, setCountries] = React.useState([])
  const [selectCountry, setSelectCountry] = React.useState('')
  const [test, setTest] = React.useState('')

  React.useEffect(() => {
    const url = 'https://openholidaysapi.org/Countries?languageIsoCode=EN'
    // fetch API
    async function fetchData() {
      try {
        const response = await fetch(url)
        const result = await response.json()
          setCountries(result)
          
      } catch (e) {
        console.error('Error fetching data', e)
      }
    }
    fetchData()
  }, [])

  function getData() {
    setTest('try')
  }
  function onChange() {
    console.log('change')
  }

  return (
    <div className="paper">
      <h2>Calendar Component</h2>
      <button onClick={getData}>Click here</button>
      <p>??:{test}</p>
      <p>
              Countries: <pre>
                  {countries.map(item => (_)) }
        </pre>
      </p>
      <form>
        <label htmlFor="countrySelect">Select Country</label>
        <select id="countrySelect" name="countrySelect">
          <option value="USA" value="USA" onChange={onChange}>
            USA
          </option>
          <option value="UK">UK</option>
        </select>
      </form>
      <hr></hr>
      <ul>
        <li>Date 1</li>
        <li>Date 2</li>
      </ul>
    </div>
  )
}
