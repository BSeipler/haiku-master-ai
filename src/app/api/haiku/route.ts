import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  const requestConfig = {
    url: 'https://api.openai.com/v1/completions',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    method: 'POST',
    data: {
      prompt: `Create a haiku about ${data.theme}.`,
      model: 'text-davinci-003',
      temperature: 0.8,
      max_tokens: 30,
    },
  };

  interface Choice {
    text: string;
  }

  interface ApiResponse {
    choices: Choice[];
  }

  try {
    const response = await axios<ApiResponse>(requestConfig);

    return NextResponse.json({ haiku: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error('Error generating Haiku:', error);
    return 'An error occurred. Please try again.';
  }
}
