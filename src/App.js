import React, { useEffect, useState } from 'react';
import Home from './Containers/Home';
import Loading from './Containers/Loading';



const Homewithloading = Loading(Home)

function App(props) {

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  let orgdata = [
    {

      id: 101,

      name: 'Amit',

      joining_date: "01-06-2021",

      salary: 50000

    },

    {

      id: 102,

      name: 'Piyush',

      joining_date: "01-01-2019",

      salary: 60000

    },

    {

      id: 103,

      name: 'Meet',

      joining_date: "01-03-2020",

      salary: 25000

    },

    {

      id: 104,

      name: 'Lalit',

      joining_date: "01-12-2021",

      salary: 30000

    }
  ]

  const larger = orgdata.filter(orgdata => {
    return orgdata > 25000
  })

  useEffect(() => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setData(orgdata) }, 3000)
  }, [])

  return (
   
      <Homewithloading
        isloading={loading}
        data={data}
        // larger={orgdata}
      />

  );
}

export default App;