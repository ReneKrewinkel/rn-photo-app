import { config }  from '../config'

const fetchData = () => new Promise( (resolve, reject) => {

  let killFetch = setTimeout( () => {
    console.warn("TIMEOUT!!!");
    reject({ success: false, error: 'Timeout occured' })
  }, config.timeout)

  fetch(config.api)
    .then( result => result.status !== 200 ? reject(result) : result.json() )
    .then( result => resolve(result))
    .catch( err => {
      console.warn("FROM CATCH!!")
      reject(err)
    })
    .finally( () => {
      clearTimeout(killFetch)
    })

})



export { fetchData }