export const useToken = () => {
     const token :string = JSON.parse(localStorage.getItem('user') || '{}').token || ''
     console.log('useToken', token)
     return token
}
