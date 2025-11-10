

export default function OurTeamSection() {
    return(
        <div className="flex flex-col items-center justify-center w-[90%] md:w-[70%] lg:w-[60%] mx-auto rounded-2xl shadow-xl bg-white p-6 md:p-10 my-10 border border-fuchsia-100">
  {/* Title */}
  <h1 className="text-xl md:text-2xl font-extrabold text-primary text-center mb-2">
    Our Team
  </h1>

  {/* Subtitle */}
  <h2 className="text-sm md:text-base text-primary/70 text-center font-medium mb-6">
    Behind every great result is a great team — and ours is the core of everything we do.
  </h2>

  {/* Description */}
  <p className="text-gray-700 text-justify leading-relaxed text-sm md:text-base">
    At <span className="text-primary font-semibold">DataKit Studio</span>, our team is made up of
    <span className="text-primary font-semibold"> creators</span>, 
    <span className="text-primary font-semibold"> strategists</span>, 
    <span className="text-primary font-semibold"> designers</span>, and 
    <span className="text-primary font-semibold"> analysts</span> who bring fresh ideas and real results to every project.
    We’re curious, passionate, and always focused on doing our best work.
    <br /><br />
    From crafting strategies to fine-tuning details, we believe success comes from 
    <span className="text-primary font-semibold"> teamwork</span>, 
    <span className="text-primary font-semibold"> innovation</span>, and 
    <span className="text-primary font-semibold"> consistency</span>. 
    We don’t just create campaigns — we 
    <span className="text-primary font-semibold"> build connections that last.</span>
  </p>
</div>
    )
}