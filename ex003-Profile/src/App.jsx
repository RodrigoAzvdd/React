import Card from "./components/Card"

export default () => {
  return (
    <div className="App" style={{
      backgroundColor: '#428CD1',
      minHeight: '100vh',
      display: 'grid',
      placeContent: 'center'
    }}>
      <Card 
        name='John Doe'
        bio= 'Full-Stack javascript developer at Acme Inc.'
        phoneNumber='+5511987654321'
        email='john.doe@email.com'
      />
    </div>
  )
}