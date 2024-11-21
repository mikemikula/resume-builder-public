import { ImageResponse } from '@vercel/og'
import { resumeConfig } from '@/config'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, rgb(17, 24, 39), rgb(0, 0, 0))',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '40px',
            maxWidth: '1000px',
          }}
        >
          <h1 style={{ 
            fontSize: 64, 
            fontWeight: 'bold', 
            color: 'white',
            marginBottom: 24,
            textAlign: 'center',
          }}>
            {resumeConfig.personal.name}
          </h1>
          <h2 style={{ 
            fontSize: 32, 
            color: 'rgb(209, 213, 219)',
            marginBottom: 48,
            textAlign: 'center',
          }}>
            {resumeConfig.personal.description}
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 627,
    }
  )
} 