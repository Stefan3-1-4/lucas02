import React from 'react'

export default function Experience() {
  return (
    <main className='text-zinc-600'>
      <header className='xs:flex-col xs:place-content-center sm:mt-28 sm:space-y-14'>
        <p className='text-zinc-400 sm:text-lg sm:leading-7 sm:text-center sm:mx-48'>&lt; Get to know me better and explore my journey as a <span className='text-white font-bold'>Front-End Software Engineer</span> /&gt;</p>
        <a className='sm:flex sm:text-center sm:place-content-center sm:w-fit sm:mx-auto sm:p-2 sm:px-7 sm:font-bold sm:border-2 sm:rounded-full sm:bg-white'>DownloadCv</a>
      </header>
      <section className='bg-zinc-900 rounded-2xl sm:flex-col sm:space-y-14 sm:mt-28 sm:mx-14 sm:leading-7 sm:py-14 sm:px-7'>
        <div className=''>
          <h2 className='text-white font-bold'>Front end Sowftare engineer</h2>
          <span className='text-violet-400 sm:my-96'>Contact</span>
          <p>time</p>
          <p>location</p>
        </div>
        <div className='sm:leading-10'>
          <h3 className='text-violet-400'>Group Clickip Technologia</h3>
          <ul>
            <p>Click IP is a Internet provider holding</p>
            <li><p>• Developed React web app to avoid overloading the call center during Internet issues. (Vite, Zustand, Chakra UI). On average, we reduced support tickets by 35% during a network issue.</p></li>
            <li><p>• Developed React web app to document all router models used by the company. (Next.JS, Zustand, Tailwind). Reducing the use of spreadsheets.</p></li>
            <li><p>• Developed React Native app for customers to get Bills, see contracts info, data used, and report payments. (React Native CLI, Styled Components, Context API). </p></li>
            <li><p>• Helped the team to implement Unit Test with Jest and React Testing Library for Front-End applications.</p></li>
              <p>Main activities:</p>
            <li><p>• Led the development team Squad, and mentored Front-End juniors developers. (JavaScript, React JS and React Native).</p></li>
            <li><p>• Designed interfaces for web and mobile apps using Figma.</p></li>
            <li><p>• Published the first company's React Native app on Google Play and App Store.</p></li>
            <li><p>• Automated deployments for frontend and backend projects using GitHub Actions.</p></li>
          </ul>
        </div>
      </section>
      <section className='bg-zinc-900 rounded-2xl sm:flex-col sm:space-y-14 sm:mt-28 sm:mx-14 sm:leading-7 sm:py-14 sm:px-7'>
        <div>
          <h2 className='text-white font-bold'>IT Suport</h2>
          <span className='text-violet-400'>Employee</span>
          <p>time</p>
          <p>location</p>
        </div>
        <div className='sm:leading-10'>
          <h3 className='text-violet-400'>Grupo Clickip Tecnologia</h3>
          <ul>
            <p>Click IP is a holding of Internet providers in Amazonas and Pará. Intlink, Wire, Fiber Network and Icom are part of this group</p>
            <p>Main activities:</p>
            <li>Customer service, user support, support for residential and business customers.</li>
            <li>Network monitoring with Grafana and Zabbix.</li>
            <li>Create and update site information frequently.</li>
          </ul>
        </div>
      </section>
      <section className='bg-zinc-900 rounded-2xl sm:flex-col sm:space-y-14 sm:mt-28 sm:mx-14 sm:leading-7 sm:py-14 sm:px-7'>
        <div>
          <h2 className='text-white font-bold'>It Intern</h2>
          <span className='text-violet-400'>Intern</span>
          <p>time</p>
          <p>location</p>
        </div>
        <div className='sm:leading-10'>
          <h3 className='text-violet-400'>Tribunal Regional do Trabalho da 11ª Região</h3>
          <ul>
            <p>Main activities:</p>
            <li>Participated on migration of new software for the payments department.</li>
            <li>I updated information writing SQL querys in Oracle Database, reported and fix bugs.</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
