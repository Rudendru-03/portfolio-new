export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <div className="prose max-w-none">
        <p>
          I'm a web developer with a passion for creating user-friendly and visually appealing websites.
          With expertise in React, Next.js, and various other web technologies, I strive to deliver
          high-quality solutions that meet and exceed client expectations.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">My Skills</h2>
        <ul>
          <li>React.js</li>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  )
}

