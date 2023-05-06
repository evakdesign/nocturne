import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nocturne</title>
        <meta name="description" content="Nocturne, radio for the people." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <div className="bg-starry">
          <img
            srcSet="starry_night_838.jpg 838w, starry_night_lowres.jpg 1676w, starry_night.jpg 3352w"
            src="starry_night.jpg"
            alt="A beautiful AI generated picture of Starry Night with deep brushstrokes." />
        </div>
        <div className="header">
          <div className="title">
            <h1>
              Nocturne
            </h1>
            <h2>
              Radio for the people.
            </h2>
            <div>
              <button className="playlist-play">
                <div><p>Play</p></div>
                <div className ="playlist-play-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
