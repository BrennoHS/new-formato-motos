function HomeContent() {
  return (
  <section>
  <div className="flex items-center justify-center flex-col items-center pt-20 mx-auto max-w-screen-xl sm:px-4 lg:px-14">
    <div className="flex flex-col items-center grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:justify-center md:gap-8 max-w-screen-xl">
      <div className="md:col-span-1">
        <div className="max-w-prose md:max-w-none">
          <h2 className="text-2xl font-semibold text-[#8ec54d] sm:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>

          <p className="mt-4 text-[#1a1a1a]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
            architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
            sequi.
          </p>
        </div>
      </div>

      <div className="md:col-span-3">
        <img
          src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded"
          alt=""
        />
      </div>
    </div>
  </div>
</section>
  )
}

export default HomeContent;