const API_URL = "http://universities.hipolabs.com/search?name="

const fetchUniversity = async (key = "universitas") => {
    try {
        const response = await fetch(API_URL + key)

        if (response.ok) {
            return response.json()
        }
    } catch (err) {
        console.error(err)
        return err
    }
}

export { fetchUniversity }