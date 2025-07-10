import { baseInstance } from './axios';

export const getRandomQuestionApi = async () => {
  try {
    const response = await baseInstance.get(`/api/v1/questions`);
    const data = await response.data;
    console.log(data, 'data');
    return data as QuestionType;
  } catch (error: any) {
    console.error(error);
  }
};
