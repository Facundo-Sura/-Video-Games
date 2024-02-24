const { DataTypes } =  requrire("sequelize");

module.exports = (sequelize) => {
    sequelize.define('genres', {
        id: {
            type: DataTypes.INTEGER,
            allownull: false,
        },
        name: {
            type: DataTypes.STRING,
            allownull:false,
        },
    },
    {timetamps:false}
    );
}