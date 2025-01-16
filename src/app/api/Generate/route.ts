import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

if (!process.env.GOOGLE_API_KEY) {
  throw new Error('Missing GOOGLE_API_KEY environment variable');
}

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export async function POST(req: Request) {

  try {
    const { topic } = await req.json();

    if (!topic) {
      return NextResponse.json(
        { error: 'Topic is required' },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Act as a career counselor and provide detailed guidance about ${topic} as a career path. 
    Format the response as a JSON object with the following structure and also remove special strings, markdowns that the ai model generate:

    {
      "domain": "${topic}",
      "overview": "Brief overview of the field",
      "skillLevels": {
        "beginner": {
          "skills": ["list of fundamental skills"],
          "resources": {
            "courses": ["list of beginner-friendly courses with URLs"],
            "tutorials": ["list of tutorial resources with URLs"],
            "books": ["recommended books for beginners"]
          }
        },
        "intermediate": {
          "skills": ["list of intermediate level skills"],
          "resources": {
            "courses": ["list of intermediate courses with URLs"],
            "tutorials": ["list of advanced tutorial resources with URLs"],
            "books": ["recommended books for intermediate level"]
          }
        },
        "expert": {
          "skills": ["list of advanced skills"],
          "resources": {
            "courses": ["list of expert-level courses with URLs"],
            "tutorials": ["list of specialized resources with URLs"],
            "books": ["recommended books for experts"]
          }
        }
      },
      "certifications": [
        {
          "name": "certification name",
          "provider": "certification provider",
          "level": "beginner/intermediate/expert",
          "url": "certification URL"
        }
      ],
      "careerPaths": [
        {
          "role": "job title",
          "description": "brief description",
          "averageSalary": "salary range",
          "requiredExperience": "required experience level"
        }
      ],
      "onlinePresence": {
        "platforms": ["recommended professional platforms to showcase work"],
        "portfolio": "tips for building portfolio"
      }
    }

    Ensure all URLs are valid and point to real resources. Include a mix of free and paid resources.`;

    const result = await model.generateContent(prompt);
    const response = result.response.text();
    
    // const cleanedResponse = response
    // .replace(/```json/g, '') // Remove markdown code fences
    // .replace(/```/g, '')     // Remove standalone code fences
    // .trim();         

    // Parse the response to ensure it's valid JSON
    const jsonResponse = JSON.parse(response);
    
    return NextResponse.json(jsonResponse);
  } catch (error: any) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to process request' },
      { status: 500 }
    );
  }
}