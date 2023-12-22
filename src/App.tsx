import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { Navigate, Route, Routes } from "react-router-dom"
import NewNote from "./components/newNote"



const App = () => {
  return (
    <Container className="md-4">
      <Routes>
        <Route path="/" element={<h1>hello home</h1>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>id index element</h1>} />
          <Route path="edit" element={<h1>id element edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </Container>
  )
}
export default App
