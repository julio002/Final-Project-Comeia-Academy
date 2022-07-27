import { Sequelize } from "sequelize-typescript"
import * as models from './models'

<<<<<<< HEAD
const dialect = "postgres";

const sequelize = new Sequelize("postgres", dialect , "lorena25", {
=======
const dialect = "postgres"

const sequelize = new Sequelize("dvdrental", dialect, "julio002", {
>>>>>>> 68dd63e468b8b918ec496ff23d46a0abdb86522c
    host: "localhost",
    dialect: dialect,
    define: {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
    },
    logging: false,
    models: Object.values(models),
})

export const connectDatabase = async () => { 
    await sequelize
        .authenticate()
        .then(() => {
            console.log(`Conectado ao ${dialect} com sucesso`)
        })
        .catch((error: Error) => {
            console.log(`Não foi possível conectar ao ${dialect}: ${error}`)
        })

    sequelize.sync({ alter: true })
}

export default sequelize
