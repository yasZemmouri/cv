import React from 'react'

export default function Main({summary}) {
  return (
    <main className="container">
        <section>
            <h2>Professional Summary</h2>
            <p>{summary}</p>
        </section>
    </main>
  )
}
