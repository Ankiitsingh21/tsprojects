import { Client } from 'pg';

const client = new Client({
  connectionString:"postgresql://postgres:Mohit@098@localhost/postgres"
});

client.connect();

async function createUsersTable() {
  try {
    const query = await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

//     await client.query(query);
    console.log('Users table created successfully');
  } catch (error) {
    console.error('Error creating users table:', error);
  } finally {
    await client.end(); // Close the connection after the operation
  }
}

createUsersTable();
