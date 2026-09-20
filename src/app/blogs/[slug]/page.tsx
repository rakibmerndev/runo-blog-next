const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  return (
    <div className="h-screen flex justify-center items-center">
      <h1>welcome to blog details of {slug} </h1>
    </div>
  );
};

export default BlogDetailsPage;
