export const getCliente = async () => {
  try {
    const response = await fetch('http://192.168.68.117:3007/client')
    if (!response.ok) {
      console.log(response.status);
    }
    return response.json();
  } catch (error) {
    console.log(error)
  }
}