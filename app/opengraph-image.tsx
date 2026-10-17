import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Steffer - Tecnologia sob medida para o seu negócio'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
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
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 25px 25px, #1a1a1a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a1a1a 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 32,
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: '#ffffff',
              textAlign: 'center',
              letterSpacing: '-0.02em',
            }}
          >
            Steffer
          </div>
          <div
            style={{
              fontSize: 36,
              color: '#a0a0a0',
              textAlign: 'center',
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            Tecnologia sob medida para o seu negócio
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#16a34a',
              textAlign: 'center',
              marginTop: 16,
            }}
          >
            Automação • IA • Desenvolvimento • Dados
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
