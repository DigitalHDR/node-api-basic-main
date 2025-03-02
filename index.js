// Importando o express
const express = require('express')
const cors = require('cors') // Importando o pacote cors
const app = express()

// Definindo a porta do servidor
const PORT = process.env.PORT || 3000

// Usando o middleware cors para permitir requisições de qualquer origem
app.use(cors())

// Dados dos empregados (o arquivo JSON que você forneceu)
const employees = [
  {
    'id': 1,
    'name': 'João',
    'job': 'Back-end',
    'admission_date': '2019-12-02T00:00:00.000Z',
    'phone': '5551234567890',
    'image':
      'https://i.postimg.cc/59Y7qW0V/472de74594b1ac5e3ed836491b8b2cab.jpg',
  },
  {
    'id': 2,
    'name': 'Roberto',
    'job': 'Front-end',
    'admission_date': '2020-03-12T00:00:00.000Z',
    'phone': '5550321654789',
    'image':
      'https://i.postimg.cc/TP3QKZSB/755fcd612793d4e8b8fb1233fe1082bb.jpg',
  },
  {
    'id': 3,
    'name': 'Maria',
    'job': 'Front-end',
    'admission_date': '2020-03-15T00:00:00.000Z',
    'phone': '5557894561230',
    'image':
      'https://i.postimg.cc/w3YRppXZ/1521986721a3d710c41741442857767d.jpg',
  },
  {
    'id': 4,
    'name': 'Cleber',
    'job': 'Back-end',
    'admission_date': '2020-06-01T00:00:00.000Z',
    'phone': '5557410258963',
    'image':
      'https://i.postimg.cc/wBq4httf/75dda9f8b6c4ebb8cb9d02a633587ab8.jpg',
  },
  {
    'id': 5,
    'name': 'Giovana',
    'job': 'Designer',
    'admission_date': '2020-06-20T00:00:00.000Z',
    'phone': '5553698520147',
    'image':
      'https://i.postimg.cc/DZDbxs82/5e27489a40dfea32ee52e4a60a797fb0.jpg',
  },
  {
    'id': 6,
    'name': 'Mario',
    'job': 'Front-end',
    'admission_date': '2020-10-01T00:00:00.000Z',
    'phone': '5551234567890',
    'image':
      'https://i.postimg.cc/85s6dwkK/b09f55101afc48fddb07732f727b7df7.jpg',
  },
  {
    'id': 7,
    'name': 'Gabriel',
    'job': 'Back-end',
    'admission_date': '2021-01-01T00:00:00.000Z',
    'phone': '5551234567890',
    'image':
      'https://i.postimg.cc/VsdTGbK2/c4d1e2afb13b607d5cd1d11ac94e8c25.jpg',
  },
  {
    'id': 8,
    'name': 'Carla',
    'job': 'Back-end',
    'admission_date': '2021-03-01T00:00:00.000Z',
    'phone': '5551234567890',
    'image':
      'https://i.postimg.cc/RZRXVMPc/8172ea6965178a35bece5f2d6603c4a2.jpg',
  },
  {
    'id': 10,
    'name': 'Fernanda',
    'job': 'Front-end',
    'admission_date': '2021-05-01T00:00:00.000Z',
    'phone': '5551234567890',
    'image':
      'https://i.postimg.cc/QMf4SX1X/90e36290137a8f0a6b57fd8ec7bbc889.jpg',
  },
]

// Definindo o endpoint para obter todos os empregados
app.get('/employees', (req, res) => {
  res.json(employees)
})

// Definindo o endpoint para obter um empregado pelo id
app.get('/employees/:id', (req, res) => {
  const employee = employees.find((emp) => emp.id === parseInt(req.params.id))
  if (!employee) {
    return res.status(404).json({ message: 'Employee not found' })
  }
  res.json(employee)
})

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/`)
})
