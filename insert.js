
module.exports = async function insertData(db) {
  
  // Clear existing collections
  await db.collection('genres').deleteMany({});
  await db.collection('users').deleteMany({});
  await db.collection('movies').deleteMany({});
  await db.collection('reviews').deleteMany({});
  await db.collection('subscriptions').deleteMany({});

  // Insert genres
  await db.collection('genres').insertMany([
    { name: "Action", description: "Fast-paced movies with lots of stunts", popular: true },
    { name: "Comedy", description: "Light-hearted and funny movies", popular: true },
    { name: "Drama", description: "Serious, narrative-driven films", popular: true },
    { name: "Horror", description: "Scary movies to thrill the audience", popular: false },
    { name: "Sci-Fi", description: "Science fiction and futuristic stories", popular: true },
    { name: "Romance", description: "Love stories and romantic plots", popular: true },
    { name: "Documentary", description: "Informative and educational films", popular: false },
    { name: "Thriller", description: "Tense, suspenseful movies", popular: true },
    { name: "Animation", description: "Cartoons and animated features", popular: true },
    { name: "Fantasy", description: "Magical and supernatural themes", popular: true }
  ]);

  // Insert users
  await db.collection('users').insertMany([
    { username: "john_doe", email: "john@example.com", password: "hashed_password1", favorites: ["m1", "m3"], profile: { age: 30, gender: "male", country: "USA" } },
    { username: "jane_smith", email: "jane@example.com", password: "hashed_password2", favorites: ["m2"], profile: { age: 25, gender: "female", country: "Canada" } },
    { username: "mike_ross", email: "mike@example.com", password: "hashed_password3", favorites: [], profile: { age: 28, gender: "male", country: "UK" } },
    { username: "lisa_ray", email: "lisa@example.com", password: "hashed_password4", favorites: ["m1", "m4", "m5"], profile: { age: 32, gender: "female", country: "Australia" } },
    { username: "tom_hanks", email: "tom@example.com", password: "hashed_password5", favorites: ["m3"], profile: { age: 45, gender: "male", country: "USA" } },
    { username: "sara_connor", email: "sara@example.com", password: "hashed_password6", favorites: ["m2", "m6"], profile: { age: 29, gender: "female", country: "Germany" } },
    { username: "peter_parker", email: "peter@example.com", password: "hashed_password7", favorites: [], profile: { age: 21, gender: "male", country: "USA" } },
    { username: "bruce_wayne", email: "bruce@example.com", password: "hashed_password8", favorites: ["m7"], profile: { age: 35, gender: "male", country: "USA" } },
    { username: "clark_kent", email: "clark@example.com", password: "hashed_password9", favorites: ["m8", "m9"], profile: { age: 33, gender: "male", country: "USA" } },
    { username: "diana_prince", email: "diana@example.com", password: "hashed_password10", favorites: ["m10"], profile: { age: 27, gender: "female", country: "France" } }
  ]);

  // Insert movies
  await db.collection('movies').insertMany([
    { _id: "m1", title: "Fast & Furious", genre: "Action", year: 2009, rating: 7.2, cast: ["Vin Diesel", "Paul Walker"], info: { duration: 107, language: "English" } },
    { _id: "m2", title: "The Hangover", genre: "Comedy", year: 2009, rating: 7.7, cast: ["Bradley Cooper", "Zach Galifianakis"], info: { duration: 100, language: "English" } },
    { _id: "m3", title: "Inception", genre: "Sci-Fi", year: 2010, rating: 8.8, cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"], info: { duration: 148, language: "English" } },
    { _id: "m4", title: "The Conjuring", genre: "Horror", year: 2013, rating: 7.5, cast: ["Vera Farmiga", "Patrick Wilson"], info: { duration: 112, language: "English" } },
    { _id: "m5", title: "The Godfather", genre: "Drama", year: 1972, rating: 9.2, cast: ["Marlon Brando", "Al Pacino"], info: { duration: 175, language: "English" } },
    { _id: "m6", title: "Interstellar", genre: "Sci-Fi", year: 2014, rating: 8.6, cast: ["Matthew McConaughey", "Anne Hathaway"], info: { duration: 169, language: "English" } },
    { _id: "m7", title: "The Dark Knight", genre: "Action", year: 2008, rating: 9.0, cast: ["Christian Bale", "Heath Ledger"], info: { duration: 152, language: "English" } },
    { _id: "m8", title: "Titanic", genre: "Romance", year: 1997, rating: 7.8, cast: ["Leonardo DiCaprio", "Kate Winslet"], info: { duration: 195, language: "English" } },
    { _id: "m9", title: "Frozen", genre: "Animation", year: 2013, rating: 7.5, cast: ["Idina Menzel", "Kristen Bell"], info: { duration: 102, language: "English" } },
    { _id: "m10", title: "The Matrix", genre: "Sci-Fi", year: 1999, rating: 8.7, cast: ["Keanu Reeves", "Laurence Fishburne"], info: { duration: 136, language: "English" } }
  ]);

  // Insert reviews
  await db.collection('reviews').insertMany([
    { movie_id: "m1", user_id: "john_doe", rating: 8, comment: "Great action scenes!", date: new Date("2025-01-10") },
    { movie_id: "m2", user_id: "jane_smith", rating: 7, comment: "Really funny!", date: new Date("2025-02-15") },
    { movie_id: "m3", user_id: "mike_ross", rating: 9, comment: "Mind-blowing!", date: new Date("2025-03-20") },
    { movie_id: "m4", user_id: "lisa_ray", rating: 6, comment: "Scary but predictable.", date: new Date("2025-04-25") },
    { movie_id: "m5", user_id: "tom_hanks", rating: 10, comment: "Classic!", date: new Date("2025-05-30") },
    { movie_id: "m6", user_id: "sara_connor", rating: 9, comment: "Amazing visuals.", date: new Date("2025-06-04") },
    { movie_id: "m7", user_id: "peter_parker", rating: 8, comment: "Best Batman ever.", date: new Date("2025-06-10") },
    { movie_id: "m8", user_id: "bruce_wayne", rating: 7, comment: "Romantic and touching.", date: new Date("2025-06-12") },
    { movie_id: "m9", user_id: "clark_kent", rating: 7, comment: "Great for kids.", date: new Date("2025-06-14") },
    { movie_id: "m10", user_id: "diana_prince", rating: 9, comment: "A sci-fi masterpiece.", date: new Date("2025-06-15") }
  ]);

  // Insert subscriptions
  await db.collection('subscriptions').insertMany([
    { user_id: "john_doe", plan: "Basic", start_date: new Date("2024-01-01"), end_date: new Date("2025-01-01"), active: true },
    { user_id: "jane_smith", plan: "Premium", start_date: new Date("2024-03-01"), end_date: new Date("2025-03-01"), active: true },
    { user_id: "mike_ross", plan: "Basic", start_date: new Date("2024-02-15"), end_date: new Date("2025-02-15"), active: false },
    { user_id: "lisa_ray", plan: "Premium", start_date: new Date("2024-04-01"), end_date: new Date("2025-04-01"), active: true },
    { user_id: "tom_hanks", plan: "Basic", start_date: new Date("2024-05-01"), end_date: new Date("2025-05-01"), active: false },
    { user_id: "sara_connor", plan: "Premium", start_date: new Date("2024-06-01"), end_date: new Date("2025-06-01"), active: true },
    { user_id: "peter_parker", plan: "Basic", start_date: new Date("2024-07-01"), end_date: new Date("2025-07-01"), active: true },
    { user_id: "bruce_wayne", plan: "Premium", start_date: new Date("2024-08-01"), end_date: new Date("2025-08-01"), active: true },
    { user_id: "clark_kent", plan: "Basic", start_date: new Date("2024-09-01"), end_date: new Date("2025-09-01"), active: false },
    { user_id: "diana_prince", plan: "Premium", start_date: new Date("2024-10-01"), end_date: new Date("2025-10-01"), active: true }
  ]);

  console.log("All documents inserted!");
};
