import axios from 'axios';

const API_URL = 'https://opentdb.com/api.php';

export const fetchQuizQuestions = async (amount: number, difficulty: string) => {
  try {
    const response = await axios.get(
      `${API_URL}?amount=${amount}&difficulty=${difficulty}&type=multiple`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching quiz questions:', error);
    return [];
  }
};
