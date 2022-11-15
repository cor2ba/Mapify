import axios from "axios"

const directionsApi = axios.create({
    baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
    params: {
        alternatives: false,
        access_token: "pk.eyJ1IjoiY29yMmJhIiwiYSI6ImNsYWVscDJ3MjBwM3gzb3FrZGN3d3ZjbDUifQ.Czt8tVMmAQaHDXncjppSWw",
        geometries: "geojson",
        steps: false,
        overview: "simplified"

    }
})

export default directionsApi