import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));  // for extra delay

  // throw new Error('Loading Meals failed!');
  return db.prepare('SELECT * FROM meals').all();
}
