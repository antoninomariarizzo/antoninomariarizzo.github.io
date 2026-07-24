import { FaGithub, FaGoogleDrive, FaYoutube } from "react-icons/fa";

const ICONS = {
  github: FaGithub,
  drive: FaGoogleDrive,
  youtube: FaYoutube,
};

/**
 * Shared card layout for a project or publication: image on the left,
 * title/meta/description/links on the right.
 */
function ItemCard({ image, imageHref, title, titleHref, meta, tags, description, links }) {
  const Image = <img src={image} alt={title} className="item-image" loading="lazy" />;

  return (
    <article className="item-card">
      <div className="item-image-wrap">
        {imageHref ? (
          <a href={imageHref} target="_blank" rel="noreferrer">
            {Image}
          </a>
        ) : (
          Image
        )}
      </div>
      <div className="item-body">
        <h3>
          {titleHref ? (
            <a href={titleHref} target="_blank" rel="noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        {meta && <p className="item-meta">{meta}</p>}
        {tags?.length > 0 && (
          <div className="item-tags">
            {tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
        <p className="item-description">{description}</p>
        {links?.length > 0 && (
          <div className="item-links">
            {links.map((link, index) => {
              const Icon = link.icon ? ICONS[link.icon] : null;
              return (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn ${index === 0 ? "btn-primary" : "btn-secondary"}`}
                >
                  {Icon && <Icon aria-hidden="true" />}
                  {link.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
}

export default ItemCard;
