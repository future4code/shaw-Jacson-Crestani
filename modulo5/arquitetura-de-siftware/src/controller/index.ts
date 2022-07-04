import { app } from "./app"
import { signup } from '../endpoints/signup'
import { createTask } from '../endpoints/createTask'
import { getTaskById } from '../endpoints/getTaskById'
import { login } from '../endpoints/login'
import { UserBusiness } from '../business/UserBusiness'

const userController = new UserController()

app.post('/user/signup', userController, signup)  
app.post('/user/login', userController, login)

app.put('/task', createTask)
app.get('/task/:id', getTaskById)

