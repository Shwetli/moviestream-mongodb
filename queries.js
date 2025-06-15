
module.exports = async function runQueries(db) {
  // --- READ ---

  // 1. Извличане на всички жанрове
  const allGenres = await db.collection('genres').find().toArray();
  console.log('All genres:', allGenres);

  // 2. Филтриране на филми по жанр "Action"
  const actionMovies = await db.collection('movies').find({ genre: "Action" }).toArray();
  console.log('Action movies:', actionMovies);

  // 3. Филтриране на потребители по страна и пол
  const femaleUsersFromUSA = await db.collection('users').find({ "profile.country": "USA", "profile.gender": "female" }).toArray();
  console.log('Female users from USA:', femaleUsersFromUSA);

  // --- UPDATE ---

  // 4. Актуализиране на популярност на жанр "Horror" на true
  await db.collection('genres').updateOne({ name: "Horror" }, { $set: { popular: true } });
  console.log('Updated Horror genre to popular');

  // 5. Актуализиране на рейтинг на филм "Fast & Furious" на 7.5
  await db.collection('movies').updateOne({ title: "Fast & Furious" }, { $set: { rating: 7.5 } });
  console.log('Updated rating of Fast & Furious');

  // 6. Добавяне на нов любим филм на потребител "john_doe"
  await db.collection('users').updateOne({ username: "john_doe" }, { $push: { favorites: "m2" } });
  console.log('Added favorite movie to john_doe');

  // --- DELETE ---

  // 7. Изтриване на ревю с rating под 7 за филм "The Conjuring"
  await db.collection('reviews').deleteOne({ movie_id: "m4", rating: { $lt: 7 } });
  console.log('Deleted low rating review for The Conjuring');

  // 8. Изтриване на абонамент, който е неактивен (active: false)
  await db.collection('subscriptions').deleteOne({ active: false });
  console.log('Deleted one inactive subscription');

  // --- AGGREGATE ---

  // 9. Групиране на филми по жанр и среден рейтинг
  const avgRatingByGenre = await db.collection('movies').aggregate([
    {
      $group: {
        _id: "$genre",
        avgRating: { $avg: "$rating" },
        count: { $sum: 1 }
      }
    },
    { $sort: { avgRating: -1 } }
  ]).toArray();
  console.log('Average rating by genre:', avgRatingByGenre);

  // 10. Филтриране на активни абонаменти, сортирани по start_date
  const activeSubscriptions = await db.collection('subscriptions').aggregate([
    { $match: { active: true } },
    { $sort: { start_date: 1 } }
  ]).toArray();
  console.log('Active subscriptions sorted by start_date:', activeSubscriptions);

  // 11. Брой ревюта за всеки филм
  const reviewsCountByMovie = await db.collection('reviews').aggregate([
    {
      $group: {
        _id: "$movie_id",
        totalReviews: { $sum: 1 }
      }
    },
    { $sort: { totalReviews: -1 } }
  ]).toArray();
  console.log('Reviews count by movie:', reviewsCountByMovie);
};
