import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'

app.post('/user/signup', createUser)
app.put('/user/edit/:id', editUser)

const hashMenage = new HashManage()


const hash = await hashMenage.hash("senha")
console.log(hash)
const compare = await hashMenage.compare("senha", hash)
console.log(compare)


const senhas = "12345"
const senhaTentatica = "12345"

const hash = hashMenage.hash(senhas)