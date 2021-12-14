
require('dotenv').config()

export default {
    MONGO: {
        URL: process.env.MONGO_URL,
        OPTIONS: {
            wtimeoutMS: 50000,
            maxPoolSize: 50,
            useUnifiedTopology: true
        }
    },
    SERVER: {
        HOST: 'localhost',
        PORT: process.env.PORT || 1337,
    },
    TOKEN: {
        LOGIN: process.env.JWT_SECRET_LOGIN
    }
}