import Image from "next/image";

export default function HoverPreview({
  image,
  video,
  title,
}: {
  image: string;
  video?: string;
  title: string;
}) {
  return (
    <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
      {/* IMAGE */}
      <Image
        src={image}
        alt={title}
        fill
        className="preview-image object-cover transition-opacity duration-300"
      />

      {/* VIDEO */}
      {video && (
        <video
          src={video}
          muted
          loop
          playsInline
          autoPlay
          className="video-preview absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}
