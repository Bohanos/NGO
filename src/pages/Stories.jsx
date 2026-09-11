import SectionHeading from '../components/ui/SectionHeading'

// Placeholder story entries — replace with real content once written.
// `image`: null until a Cloudinary URL is added for that specific story.
const stories = [
  {
    tag: 'OUTREACH',
    title: 'Cancer Awareness Walk moves through Bende LGA',
    excerpt: 'Hundreds joined the annual walk to push early screening across every ward.',
    image: null, // IMAGE: landscape, min 800x500px
  },
  {
    tag: 'SCREENING',
    title: 'Volunteers coordinate door-to-door screening',
    excerpt: 'A closer look at how the screening teams plan and run each visit.',
    image: null, // IMAGE: landscape, min 800x500px
  },
  {
    tag: 'EDUCATION',
    title: 'Community symposium on early detection',
    excerpt: 'Health workers and survivors shared what early detection actually changed.',
    image: null, // IMAGE: landscape, min 800x500px
  },
  {
    tag: 'PARTNERSHIP',
    title: "Medical Women's Association joins the outreach",
    excerpt: 'A new clinical partnership brought more hands to this year\u2019s walk.',
    image: null, // IMAGE: landscape, min 800x500px
  },
]

export default function Stories() {
  return (
    <section className="px-6 py-16 md:px-10 md:py-20">
      <SectionHeading
        eyebrow="FROM THE FIELD"
        title="Stories from our outreach"
        className="mb-14"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {stories.map((story) => (
          <article
            key={story.title}
            className="overflow-hidden rounded-2xl bg-ink-soft/5 shadow-sm shadow-ink/5"
          >
            <div className="h-[150px] overflow-hidden bg-primary/5">
              {story.image ? (
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[11px] text-primary/40">
                  Image pending
                </div>
              )}
            </div>
            <div className="p-5">
              <span className="text-[11px] font-bold tracking-wide text-primary">
                {story.tag}
              </span>
              <h4 className="mt-2 text-[14.5px] font-bold leading-snug text-text">
                {story.title}
              </h4>
              <p className="mt-2 text-[12.5px] leading-relaxed text-text/60">
                {story.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}