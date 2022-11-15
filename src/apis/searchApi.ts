import axios from "axios"

const searchApi = axios.create({
    baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
    params: {
        access_token: "pk.eyJ1IjoiY29yMmJhIiwiYSI6ImNsYWVscDJ3MjBwM3gzb3FrZGN3d3ZjbDUifQ.Czt8tVMmAQaHDXncjppSWw"
    }
})

export default searchApi