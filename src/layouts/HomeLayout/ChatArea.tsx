const ChatArea = () => {
  const instructions = [
    { title: "Code Help", usage: "Debug and write better code" },
    { title: "Explanations", usage: "Understand complex topics" },
    { title: "Creative Writing", usage: "Generate content and ideas" },
    { title: "Problem Solving", usage: "Find solutions to challenges" },
  ];

  return (
    <div className="my-10 flex flex-col items-center">
      <div className="px-2">
        <img src="/logo.png" alt="logo" width={120} height={120} />
      </div>

      <div className="py-2">
        <h2 className="pl-1 text-text text-2xl font-bold text-center cursor-pointer">
          Chat
          <span className="text-primary">AI</span>
        </h2>
        <p className="text-text-muted py-1">
          Ask me anything. I'm here to help.
        </p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 max-w-2xl mx-auto">
        {instructions.map((help, idx) => (
          <div
            key={idx}
            className="px-8 py-4 border border-border rounded-xl hover:border-primary transition-colors bg-bg-hover shadow-sm cursor-pointer"
          >
            <h2 className="text-text text-base text-center">{help.title}</h2>
            <p className="text-text-muted text-sm">{help.usage}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ChatArea;
