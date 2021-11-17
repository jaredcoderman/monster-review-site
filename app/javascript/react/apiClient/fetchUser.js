const fetchUser = async () => {
  try {
    const response = await fetch("/api/v1/users")
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`
      throw new Error(errorMessage)
    }
    const responseBody = await response.json()
    if (responseBody.users) {
      return responseBody.users.role
    } else {
      return null
    }
  } catch (error) {
    console.error(`Error in Fetch: ${error.message}`)
  }
}