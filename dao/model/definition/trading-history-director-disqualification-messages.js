'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryDirectorDisqualificationMessage', {
        creditReportID: {
            type: DataTypes.INTEGER,
            field: 'CreditReportID',
            allowNull: false,
            references: {
                model: 'CreditReport',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        bureauReference: {
            type: DataTypes.STRING(20),
            field: 'BureauReference',
            allowNull: true
        },
        seq: {
            type: DataTypes.STRING(20),
            field: 'Seq',
            allowNull: true
        },
        narrative: {
            type: DataTypes.STRING(500),
            field: 'Narrative',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryDirectorDisqualificationMessages',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryDirectorDisqualificationMessage = model.TradingHistoryDirectorDisqualificationMessage;
    var CreditReport = model.CreditReport;

    TradingHistoryDirectorDisqualificationMessage.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
