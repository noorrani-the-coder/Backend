import { Sequelize } from "sequelize";

// Replace with your Clever Cloud credentials
const db = new Sequelize('bhsutteenonai9b5fcf4', 'ug9aqyxjqx8dvtxd', 'uDVMQiLsIVV2yMDHYKR0', {
    host: "bhsutteenonai9b5fcf4-mysql.services.clever-cloud.com",  // e.g., "bqz6bfi1l23nlf4.mysql.db"
    dialect: "mysql",
    port: 3306,             // MySQL default port
    logging: false          // Optional: Disable logging
});

// Test the connection
(async () => {
    try {
        await db.authenticate();
        console.log("Database connected successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();

export default db;
