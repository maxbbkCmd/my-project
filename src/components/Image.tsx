type ImageProps = {
  src: string;
  alt: string;
  border?: string;
  borderRadius: string;
  width?: string;
};

export const Images = (props: ImageProps) => {
  const { src, alt, border, borderRadius, width,  } = props;
  return (
    <img
      src={src}
      alt={alt}
      style={{ border: border, borderRadius: borderRadius, width: width }}
    />
  );
};
