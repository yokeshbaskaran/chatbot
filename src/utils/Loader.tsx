const Loader = () => {
  return (
    <section className="flex flex-col gap-5">
      {/* User Typing */}
      <UserTyping />

      {/* User typing with bg  */}
      <UserTypingBg />

      {/* Spinner  */}
      <Spinner />

      {/* line loader  */}
      <LineLoading />
    </section>
  );
};

export default Loader;

export const UserTyping = () => {
  return (
    <>
      <div className="flex items-center gap-1">
        <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-primary" />
      </div>
    </>
  );
};

export const UserTypingBg = () => {
  return (
    <>
      <div className="flex w-fit items-center gap-1 rounded-2xl bg-primary px-4 py-3">
        <div className="size-1 animate-pulse rounded-full bg-white" />
        <div className="size-1 animate-pulse rounded-full bg-white delay-100" />
        <div className="size-1 animate-pulse rounded-full bg-white delay-200" />
      </div>
    </>
  );
};

export const Spinner = () => {
  return (
    <>
      <div className="size-6 animate-spin rounded-full border-3 border-primary border-t-transparent" />
    </>
  );
};

export const LineLoading = () => {
  return (
    <>
      <div className="relative h-1 w-20 overflow-hidden rounded-full bg-bg-hover">
        <div className="absolute h-full w-1/2 animate-[loading_1s_linear_infinite] rounded-full bg-primary" />
      </div>
    </>
  );
};
