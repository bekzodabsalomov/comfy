function About() {
  return (
    <div className='align-element py-20'>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">We love</h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className="stat-title text-primary-content text-3xl font-medium tracking-widest">comfy</div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
      COMFY is the first omnichannel retailer of household appliances and electronics in Ukraine. The company is a leader in sales volume and efficiency in the industry. As of September 1, 2023, the COMFY network has 94 stores, and the Comfy.ua website is consistently among the Top 5 largest online players in the Ukrainian market.
      </p>
    </div>
  )
}

export default About