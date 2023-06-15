import { Sequelize } from "sequelize";

let sequelize = new Sequelize('db_food', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3309'
});

try {
    await sequelize.authenticate();
    console.log('Connected to database successfully')
} catch (error) {
    console.log(error)
}

export default sequelize;

// yarn sequelize-auto -h localhost -d db_food -u root -x 123456 -p 3309 --dialect mysql -o src/models -l esm
