import axios from 'axios';
import type { Character } from '../../types/types';

const API_BASE_URL = 'https://hp-api.onrender.com/api/characters';

export const fetchCharacters = async (): Promise<Character[]> => {
  try {
    const response = await axios.get<Character[]>(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};
