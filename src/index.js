import addLi from '../modules/add-li.js';
import './style.css';

// object data
const leaderboardData = {
  result: [
    {
      user: 'User 1',
      score: 10,
    },
    {
      user: 'User 2',
      score: 20,
    },
    {
      user: 'User 3',
      score: 30,
    },
    {
      user: 'User 4',
      score: 40,
    },
    {
      user: 'User 5',
      score: 50,
    },
  ],
};

// print the data into the html
leaderboardData.result.forEach((element) => {
  const text = `${element.user}: ${element.score}`;
  addLi(text);
});