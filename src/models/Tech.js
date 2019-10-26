const { Model, DataTypes } = require('sequelize')

class Tech extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.INTEGER,
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { 
            foreignKey: 'tech_id', 
            through: 'user_techs',
            as: 'users' 
        })
    }
}

module.exports = Tech