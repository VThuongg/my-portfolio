import { VOLUNTEER_DATA } from "../constants/portfolioData";

function VolunteerCard({ act }) {
  // Vite base path helper: automatically resolves /my-portfolio/ base on GitHub Pages when images are added
  const imageSrc = act.image
    ? act.image.startsWith("http") || act.image.startsWith(import.meta.env.BASE_URL)
      ? act.image
      : `${import.meta.env.BASE_URL}${act.image.startsWith("/") ? act.image.slice(1) : act.image}`
    : null;

  return (
    <div className={`volunteer-item-row ${imageSrc ? "has-photo" : "no-photo"} reveal-item`}>
      {/* Photo box: temporarily hidden (no img rendered) until an image path is set */}
      {imageSrc && (
        <div className="volunteer-photo-box">
          <img
            src={imageSrc}
            alt={act.org}
            className="volunteer-photo-img"
            onError={(e) => {
              e.currentTarget.parentElement.style.display = "none";
            }}
          />
          {/* Badge overlay on top-left corner of image on mobile */}
          <div className="volunteer-badge-overlay">
            {act.num}
          </div>
        </div>
      )}

      {/* Details Box */}
      <div className="volunteer-details-box">
        <div className="volunteer-header-group">
          {/* Badge: beside title on desktop, and on mobile when no photo */}
          <div className="volunteer-icon-square">
            {act.num}
          </div>

          <div className="volunteer-titles-meta">
            <h3 className="volunteer-org-title">{act.org}</h3>
            <div className="volunteer-role-meta">
              {act.role}
            </div>
          </div>
        </div>

        <p className="volunteer-desc">
          {act.desc}
        </p>
      </div>
    </div>
  );
}

export function Volunteer() {
  return (
    <section id="volunteer" className="magazine-section section-volunteer">
      <div className="magazine-edge-tab" />
      <div className="magazine-page-num">PAGE 07 / 09</div>

      <div className="container">
        {/* Meta Header */}
        <div className="magazine-meta-header reveal-item">
          <span>07. SOCIAL ENGAGEMENT</span>
          <span>COMMUNITY INITIATIVES & LEADERSHIP</span>
          <span>VT® 006-VOL</span>
        </div>

        <div className="volunteer-layout-grid">
          {/* Left: Big Title & Exact Description */}
          <div>
            <h2 className="volunteer-big-heading reveal-item">VOLUNTEER WORK</h2>
            <p className="volunteer-left-desc reveal-item">
              Youth Union leadership and community programs for children with disabilities.
            </p>
          </div>

          {/* Right: 3 Stacked Activities */}
          <div className="volunteer-stack-list">
            {VOLUNTEER_DATA.map((act, idx) => (
              <VolunteerCard key={idx} act={act} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
