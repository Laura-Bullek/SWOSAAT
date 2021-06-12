const sequelize = require('../config/connection');
const {User, Project } = require('../models');

const UserData = require('./userData.json');
const ProjectData = require('./projectData.json');

const seedDatabase = async() => {
    await sequelize.sync({force:true});

    const users = await User.bulkCreate(UserData, {
        individualHooks: true,
        returning: true,
    });

    for(const project of projectData) {
        await Project.create({
            ...project
        })
    }

    process.exit(0);
}

seedDatabase();