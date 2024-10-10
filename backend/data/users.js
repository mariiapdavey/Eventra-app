import bcrypt from 'bcryptjs'

const users =[
    {
        name: 'Admin user',
        email: 'info@example.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'john@example.com',
        password: bcrypt.hashSync('654321')
    },
    {
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: bcrypt.hashSync('132435')
    },
]

export default users