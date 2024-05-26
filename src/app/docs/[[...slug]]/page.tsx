const Slug = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  if (params?.slug?.length === 2) {
    return (
      <h1>
        Viewing Docs For Feature {params?.slug[0]} and Concept {params?.slug[1]}
      </h1>
    );
  } else if (params?.slug?.length === 1) {
    return <h1>Viewing Docs for Feature {params?.slug}</h1>;
  } else {
    return <h1>docs home page</h1>;
  }
};

export default Slug;
