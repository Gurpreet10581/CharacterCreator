module.exports = (sequelize, DataTypes) => {
    const Character = sequelize.define('character', 
    {
        name:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        species: 
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        ageInYears:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        description:
        {
            type: DataTypes.STRING,
            allowNull: false

        },
        ownerID:
        {
            type: DataTypes.INTEGER
        }

    })
};